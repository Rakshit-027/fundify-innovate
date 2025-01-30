import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import { useMutation } from "@tanstack/react-query";

const formSchema = z.object({
  title: z.string().min(10, "Title must be at least 10 characters"),
  description: z.string().min(100, "Description must be at least 100 characters"),
  goal: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Goal must be a positive number",
  }),
  duration: z.string().refine(
    (val) => !isNaN(Number(val)) && Number(val) >= 7 && Number(val) <= 60,
    {
      message: "Duration must be between 7 and 60 days",
    }
  ),
});

const StartCampaign = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user } = useAuth();

  const createCampaign = async (values: z.infer<typeof formSchema>) => {
    if (!user) throw new Error("User not authenticated");

    const { data, error } = await supabase.from("campaigns").insert([
      {
        title: values.title,
        description: values.description,
        goal: Number(values.goal),
        duration: Number(values.duration),
        user_id: user.id,
        raised: 0,
        created_at: new Date().toISOString(),
      },
    ]).select();

    if (error) throw error;
    return data[0];
  };

  const mutation = useMutation({
    mutationFn: createCampaign,
    onSuccess: (data) => {
      toast({
        title: "Campaign Created!",
        description: "Your campaign has been submitted successfully.",
      });
      navigate(`/campaign/${data.id}`);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to create campaign",
        variant: "destructive",
      });
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      goal: "",
      duration: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutation.mutate(values);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Start Your Campaign</h1>
        <p className="text-muted-foreground mb-8">
          Share your innovative idea with the world and get the funding you need
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Campaign Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your campaign title" {...field} />
                  </FormControl>
                  <FormDescription>
                    Make it clear and attention-grabbing
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Campaign Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your project in detail..."
                      className="h-32"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Include your goals, plans, and how you'll use the funds
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="goal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Funding Goal ($)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter your funding goal"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Set a realistic goal that covers your project needs
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Campaign Duration (days)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter campaign duration"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Campaigns can run between 7 and 60 days
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Create Campaign
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default StartCampaign;