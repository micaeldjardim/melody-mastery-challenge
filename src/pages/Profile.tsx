
import { useState } from "react";
import { Calendar, Star, Music } from "lucide-react";
import Navigation from "@/components/Navigation";
import ProgressBar from "@/components/ProgressBar";
import AchievementCard from "@/components/AchievementCard";
import { ACHIEVEMENTS } from "@/types/achievements";

const Profile = () => {
  const [userStats] = useState({
    name: "John Doe",
    level: 5,
    points: 2500,
    pointsToNextLevel: 3000,
    songsCompleted: 25,
    perfectScores: 8,
    dailyStreak: 7,
  });

  const [unlockedAchievements] = useState(new Set(["songs-10", "streak-7"]));

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container px-4 py-8">
        {/* Profile Header */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl font-medium">{userStats.name[0]}</span>
          </div>
          <h1 className="text-2xl font-semibold mb-1">{userStats.name}</h1>
          <p className="text-gray-600">Level {userStats.level}</p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Progress to Level {userStats.level + 1}</span>
            <span className="text-sm font-medium">
              {userStats.points} / {userStats.pointsToNextLevel} XP
            </span>
          </div>
          <ProgressBar value={userStats.points} max={userStats.pointsToNextLevel} />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <Music className="w-6 h-6 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-semibold mb-1">{userStats.songsCompleted}</p>
            <p className="text-xs text-gray-600">Songs</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <Star className="w-6 h-6 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-semibold mb-1">{userStats.perfectScores}</p>
            <p className="text-xs text-gray-600">Perfect Scores</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <Calendar className="w-6 h-6 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-semibold mb-1">{userStats.dailyStreak}</p>
            <p className="text-xs text-gray-600">Day Streak</p>
          </div>
        </div>

        {/* Achievements */}
        <h2 className="text-lg font-semibold mb-4">Achievements</h2>
        <div className="grid gap-4">
          {ACHIEVEMENTS.map((achievement) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              progress={
                achievement.type === "SONGS_COMPLETED"
                  ? userStats.songsCompleted
                  : achievement.type === "DAILY_STREAK"
                  ? userStats.dailyStreak
                  : achievement.type === "PERFECT_SCORES"
                  ? userStats.perfectScores
                  : userStats.points
              }
              unlocked={unlockedAchievements.has(achievement.id)}
            />
          ))}
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Profile;
