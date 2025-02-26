
interface LeaderboardEntryProps {
  rank: number;
  username: string;
  points: number;
  isCurrentUser?: boolean;
}

const LeaderboardEntry = ({ rank, username, points, isCurrentUser }: LeaderboardEntryProps) => {
  return (
    <div
      className={`flex items-center justify-between p-3 rounded-lg ${
        isCurrentUser ? "bg-primary/10" : "hover:bg-gray-50"
      } transition-colors duration-200`}
    >
      <div className="flex items-center gap-3">
        <span className="font-semibold w-8">{rank}</span>
        <span className="font-medium">{username}</span>
      </div>
      <span className="text-sm font-semibold">{points} pts</span>
    </div>
  );
};

export default LeaderboardEntry;
