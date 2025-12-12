import { useState } from "react";
import { GuideSelector } from "./components/GuideSelector";
import { StorySimulator } from "./components/StorySimulator";
import { ReelsSimulator } from "./components/ReelsSimulator";

type GuideType = "selector" | "story" | "reels";

export default function App() {
  const [currentGuide, setCurrentGuide] =
    useState<GuideType>("selector");

  const handleBack = () => {
    setCurrentGuide("selector");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {currentGuide === "selector" && (
          <GuideSelector
            onSelectStory={() => setCurrentGuide("story")}
            onSelectReels={() => setCurrentGuide("reels")}
          />
        )}

        {currentGuide === "story" && (
          <StorySimulator onBack={handleBack} />
        )}

        {currentGuide === "reels" && (
          <ReelsSimulator onBack={handleBack} />
        )}
      </div>
    </div>
  );
}