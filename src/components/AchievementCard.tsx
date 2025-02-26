
import { Achievement } from "@/types/achievements";
import { motion } from "framer-motion";
import ProgressBar from "@/components/ProgressBar";

interface AchievementCardProps {
  achievement: Achievement;
  progress: number;
  unlocked: boolean;
}

const AchievementCard = ({ achievement, progress, unlocked }: AchievementCardProps) => {
  const percentage = Math.min((progress / achievement.requiredValue) * 100, 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-4 rounded-lg border ${
        unlocked ? "border-success bg-success/10" : "border-gray-200"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="text-2xl">{achievement.icon}</div>
        <div>
          <h3 className="font-semibold">{achievement.title}</h3>
          <p className="text-sm text-gray-600">{achievement.description}</p>
        </div>
      </div>
      <div className="mt-3">
        <ProgressBar value={progress} max={achievement.requiredValue} />
        <p className="text-xs text-gray-500 mt-1">
          {progress} / {achievement.requiredValue}
        </p>
      </div>
    </motion.div>
  );
};

export default AchievementCard;
