
export type Achievement = {
  id: string;
  title: string;
  description: string;
  icon: string;
  requiredValue: number;
  type: AchievementType;
};

export enum AchievementType {
  SONGS_COMPLETED = "SONGS_COMPLETED",
  DAILY_STREAK = "DAILY_STREAK",
  POINTS_EARNED = "POINTS_EARNED",
  PERFECT_SCORES = "PERFECT_SCORES",
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "songs-10",
    title: "Song Bird",
    description: "Complete 10 songs",
    icon: "🎵",
    requiredValue: 10,
    type: AchievementType.SONGS_COMPLETED,
  },
  {
    id: "streak-7",
    title: "Consistent Learner",
    description: "Maintain a 7-day study streak",
    icon: "🔥",
    requiredValue: 7,
    type: AchievementType.DAILY_STREAK,
  },
  {
    id: "points-1000",
    title: "Point Master",
    description: "Earn 1000 points",
    icon: "⭐",
    requiredValue: 1000,
    type: AchievementType.POINTS_EARNED,
  },
  {
    id: "perfect-5",
    title: "Perfect Pitch",
    description: "Get 5 perfect scores",
    icon: "🎯",
    requiredValue: 5,
    type: AchievementType.PERFECT_SCORES,
  },
];
