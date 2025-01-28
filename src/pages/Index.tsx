import Navigation from "@/components/Navigation";
import CampaignCard from "@/components/CampaignCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FEATURED_CAMPAIGNS = [
  {
    id: "1",
    title: "AI-Powered Smart Home Assistant",
    description:
      "A revolutionary smart home assistant that learns from your habits and automates your daily routines using advanced AI.",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    raised: 50000,
    goal: 100000,
    daysLeft: 15,
  },
  {
    id: "2",
    title: "Sustainable Energy Storage Solution",
    description:
      "Innovative battery technology that makes renewable energy storage more efficient and accessible for everyone.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    raised: 75000,
    goal: 150000,
    daysLeft: 20,
  },
  {
    id: "3",
    title: "Next-Gen Development Platform",
    description:
      "A cloud-based development environment that streamlines collaboration and accelerates project delivery.",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    raised: 30000,
    goal: 80000,
    daysLeft: 25,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-purple-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-down">
              Fund the Next Big Thing in Tech
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-up">
              Join a community of innovators and supporters shaping the future of
              technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90"
              >
                Start Your Campaign
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 hover:bg-white/20 border-white"
              >
                Explore Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Featured Campaigns
            </h2>
            <Button variant="ghost" className="text-primary">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_CAMPAIGNS.map((campaign) => (
              <CampaignCard key={campaign.id} {...campaign} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;