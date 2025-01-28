import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import CampaignCard from "@/components/CampaignCard";

const MOCK_CAMPAIGNS = [
  {
    id: "1",
    title: "AI-Powered Smart Home Assistant",
    description: "A revolutionary smart home assistant that learns from your daily routines and automates your home perfectly.",
    imageUrl: "/placeholder.svg",
    raised: 50000,
    goal: 100000,
    daysLeft: 30,
  },
  {
    id: "2",
    title: "Sustainable Energy Storage Solution",
    description: "Innovative battery technology that makes renewable energy storage more efficient and affordable.",
    imageUrl: "/placeholder.svg",
    raised: 75000,
    goal: 150000,
    daysLeft: 45,
  },
  {
    id: "3",
    title: "Next-Gen Learning Platform",
    description: "An AI-driven educational platform that adapts to each student's learning style and pace.",
    imageUrl: "/placeholder.svg",
    raised: 25000,
    goal: 80000,
    daysLeft: 60,
  },
];

const Campaigns = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Discover Innovative Projects</h1>
        <p className="text-muted-foreground">
          Support groundbreaking ideas and help bring them to life
        </p>
      </div>

      <div className="flex gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search campaigns..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline">
          <SlidersHorizontal className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_CAMPAIGNS.filter(campaign =>
          campaign.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          campaign.description.toLowerCase().includes(searchQuery.toLowerCase())
        ).map((campaign) => (
          <CampaignCard key={campaign.id} {...campaign} />
        ))}
      </div>
    </div>
  );
};

export default Campaigns;