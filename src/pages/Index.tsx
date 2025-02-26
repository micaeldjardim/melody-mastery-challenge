
import { useState } from "react";
import { Heart, Play, Calendar, Award, Share2, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import ProgressBar from "@/components/ProgressBar";
import { toast } from "sonner";

const Index = () => {
  const [userLevel, setUserLevel] = useState(1);
  const [userPoints, setUserPoints] = useState(250);
  const [isLiked, setIsLiked] = useState(false);
  const pointsToNextLevel = 500;

  const dailySong = {
    title: "Shape of You",
    artist: "Ed Sheeran",
    difficulty: "Medium",
    points: 100,
    likes: 128,
    comments: 24,
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Fill the Song - Daily Challenge",
          text: `I'm learning English with "${dailySong.title}" by ${dailySong.artist} on Fill the Song!`,
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

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast.success(isLiked ? "Removed from favorites" : "Added to favorites!");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8">
        {/* User Status */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Welcome back!</h2>
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Level {userLevel}</span>
              <span className="text-sm font-medium">{userPoints} / {pointsToNextLevel} XP</span>
            </div>
            <ProgressBar value={userPoints} max={pointsToNextLevel} />
          </div>
        </div>

        {/* Daily Song */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Today's Song</h2>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-medium text-xl mb-1">{dailySong.title}</h3>
                <p className="text-gray-600">{dailySong.artist}</p>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={handleLike}
                  className={`text-red-500 ${isLiked ? 'fill-red-500' : ''}`}
                >
                  <Heart className="w-6 h-6" />
                </button>
                <button onClick={handleShare} className="text-primary">
                  <Share2 className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
              <span>Difficulty: {dailySong.difficulty}</span>
              <span>+{dailySong.points} points</span>
            </div>
            <div className="flex gap-4 mb-6 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                <span>{dailySong.likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                <span>{dailySong.comments}</span>
              </div>
            </div>
            <button className="w-full bg-primary text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
              <Play className="w-5 h-5" />
              Start Learning
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Your Progress</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="text-gray-600 text-sm mb-1">Daily Streak</h3>
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                <p className="text-2xl font-semibold">7 days</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="text-gray-600 text-sm mb-1">Songs Completed</h3>
              <p className="text-2xl font-semibold">12</p>
            </div>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Index;
