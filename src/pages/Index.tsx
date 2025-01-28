import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CampaignCard from "@/components/CampaignCard";

const FEATURED_CAMPAIGNS = [
  {
    id: "1",
    title: "AI-Powered Smart Home Assistant",
    description: "A revolutionary smart home assistant that learns from your daily routines and automates your home perfectly.",
    imageUrl: "/au.jpg",
    raised: 50000,
    goal: 100000,
    daysLeft: 30,
  },
  {
    id: "2",
    title: "Sustainable Energy Storage Solution",
    description: "Innovative battery technology that makes renewable energy storage more efficient and affordable.",
    imageUrl: "/sus.jpg",
    raised: 75000,
    goal: 150000,
    daysLeft: 45,
  },
  {
    id: "3",
    title: "Next-Gen Learning Platform",
    description: "An AI-driven educational platform that adapts to each student's learning style and pace.",
    imageUrl: "data:image/jpeg;base64,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",
    raised: 25000,
    goal: 80000,
    daysLeft: 60,
  },
];

const Index = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <div className="py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Fund the Future of Technology
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join our community of innovators and supporters to bring groundbreaking
          ideas to life
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/start">Start a Campaign</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/campaigns">Explore Projects</Link>
          </Button>
        </div>
      </div>

      {/* Featured Campaigns */}
      <div className="py-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Featured Campaigns</h2>
            <p className="text-muted-foreground">
              Discover innovative projects making waves
            </p>
          </div>
          <Button variant="ghost" asChild>
            <Link to="/campaigns" className="flex items-center">
              View all
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_CAMPAIGNS.map((campaign) => (
            <CampaignCard key={campaign.id} {...campaign} />
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="font-semibold mb-2">Create Your Campaign</h3>
            <p className="text-muted-foreground">
              Share your innovative idea and set your funding goal
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="font-semibold mb-2">Share With Community</h3>
            <p className="text-muted-foreground">
              Spread the word and gather support from tech enthusiasts
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="font-semibold mb-2">Get Funded</h3>
            <p className="text-muted-foreground">
              Receive funds and bring your innovation to life
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;