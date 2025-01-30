import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";
import { useMutation, useQuery } from "@tanstack/react-query";

interface Profile {
  username: string;
  full_name: string;
  avatar_url: string;
}

const Profile = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState<Profile>({
    username: "",
    full_name: "",
    avatar_url: "",
  });

  const { data: profileData, isLoading } = useQuery({
    queryKey: ["profile", user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user?.id)
        .single();

      if (error) throw error;
      return data as Profile;
    },
    enabled: !!user,
    onSuccess: (data) => {
      setProfile(data);
    },
  });

  const mutation = useMutation({
    mutationFn: async (updatedProfile: Profile) => {
      const { error } = await supabase
        .from("profiles")
        .update(updatedProfile)
        .eq("id", user?.id);

      if (error) throw error;
      return updatedProfile;
    },
    onSuccess: () => {
      toast({
        title: "Profile updated successfully",
      });
      setEditing(false);
    },
    onError: (error) => {
      toast({
        title: "Error updating profile",
        description: error instanceof Error ? error.message : "An error occurred",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(profile);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            value={profile.username}
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
            disabled={!editing}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            value={profile.full_name}
            onChange={(e) =>
              setProfile({ ...profile, full_name: e.target.value })
            }
            disabled={!editing}
          />
        </div>
        <div className="flex gap-4">
          {editing ? (
            <>
              <Button type="submit">Save Changes</Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setEditing(false)}
              >
                Cancel
              </Button>
            </>
          ) : (
            <Button type="button" onClick={() => setEditing(true)}>
              Edit Profile
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Profile;