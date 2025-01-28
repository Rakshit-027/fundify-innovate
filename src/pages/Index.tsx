import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CampaignCard from "@/components/CampaignCard";

const FEATURED_CAMPAIGNS = [
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