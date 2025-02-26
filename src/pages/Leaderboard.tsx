
import { useState } from "react";
import Navigation from "@/components/Navigation";
import LeaderboardEntry from "@/components/LeaderboardEntry";

const Leaderboard = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8">
        <h1 className="text-2xl font-semibold mb-6">Global Leaderboard</h1>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {leaderboardData.map((entry, index) => (
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
