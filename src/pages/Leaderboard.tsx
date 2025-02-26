
import { useState } from "react";
import Navigation from "@/components/Navigation";
import LeaderboardEntry from "@/components/LeaderboardEntry";
import { Share2 } from "lucide-react";
import { toast } from "sonner";

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState<"global" | "friends">("global");
  const [leaderboardData] = useState([
    { id: 1, username: "musicMaster", points: 5000 },
    { id: 2, username: "songLover", points: 4800 },
    { id: 3, username: "melodyKing", points: 4500 },
    { id: 4, username: "rhythmQueen", points: 4200 },
    { id: 5, username: "beatMaker", points: 4000 },
    { id: 6, username: "John Doe", points: 3800 },
    { id: 7, username: "harmonyStar", points: 3600 },
    { id: 8, username: "tuneGenius", points: 3400 },
    { id: 9, username: "musicPro", points: 3200 },
    { id: 10, username: "songStar", points: 3000 },
  ]);

  const [friendsLeaderboard] = useState([
    { id: 1, username: "John Doe", points: 3800 },
    { id: 2, username: "songMaster", points: 4200 },
    { id: 3, username: "beatMaker", points: 3800 },
  ]);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Fill the Song - Leaderboard",
          text: "Check out the top players on Fill the Song!",
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Link copied to clipboard!");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Leaderboard</h1>
          <button
            onClick={handleShare}
            className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab("global")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === "global"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Global
          </button>
          <button
            onClick={() => setActiveTab("friends")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === "friends"
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Friends
          </button>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {(activeTab === "global" ? leaderboardData : friendsLeaderboard).map((entry, index) => (
            <LeaderboardEntry
              key={entry.id}
              rank={index + 1}
              username={entry.username}
              points={entry.points}
              isCurrentUser={entry.username === "John Doe"}
            />
          ))}
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Leaderboard;
