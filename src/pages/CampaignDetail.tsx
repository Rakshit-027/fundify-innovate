import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Share2, Clock, Users } from "lucide-react";

const MOCK_CAMPAIGN = {
  id: "1",
  title: "AI-Powered Smart Home Assistant",
  description: `A revolutionary smart home assistant that learns from your daily routines and automates your home perfectly. Our AI-powered system uses advanced machine learning algorithms to understand your preferences and create a truly personalized home automation experience.

  Key Features:
  - Adaptive Learning System
  - Voice Recognition
  - Energy Optimization
  - Smart Device Integration
  - Privacy-First Design`,
  imageUrl: "/au.jpg",
  raised: 50000,
  goal: 100000,
  daysLeft: 30,
  backers: 250,
  creator: {
    name: "Sarah Chen",
    title: "Tech Entrepreneur",
    avatar: "/placeholder.svg"
  }
};

const CampaignDetail = () => {
  const { id } = useParams();
  const progress = (MOCK_CAMPAIGN.raised / MOCK_CAMPAIGN.goal) * 100;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <img
            src={MOCK_CAMPAIGN.imageUrl}
            alt={MOCK_CAMPAIGN.title}
            className="w-full rounded-lg mb-6 aspect-video object-cover"
          />
          <h1 className="text-3xl font-bold mb-4">{MOCK_CAMPAIGN.title}</h1>
          <div className="flex items-center gap-4 mb-6">
            <img
              src={MOCK_CAMPAIGN.creator.avatar}
              alt={MOCK_CAMPAIGN.creator.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-medium">{MOCK_CAMPAIGN.creator.name}</p>
              <p className="text-sm text-muted-foreground">
                {MOCK_CAMPAIGN.creator.title}
              </p>
            </div>
          </div>
          <div className="prose max-w-none">
            <p className="whitespace-pre-line">{MOCK_CAMPAIGN.description}</p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardContent className="pt-6">
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">
                    ${MOCK_CAMPAIGN.raised.toLocaleString()}
                  </span>
                  <span className="text-muted-foreground">
                    of ${MOCK_CAMPAIGN.goal.toLocaleString()}
                  </span>
                </div>
                <Progress value={progress} className="h-2 mb-2" />
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{MOCK_CAMPAIGN.backers} backers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{MOCK_CAMPAIGN.daysLeft} days left</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Button className="w-full">Back this project</Button>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <Heart className="h-4 w-4 mr-2" />
                    Remind me
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetail;