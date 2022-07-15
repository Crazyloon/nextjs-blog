import { createContext, useState, useEffect } from "react";
import Achievements from "../../lib/achievements";
import AchievementContainer from "./achievement-container";

const AchievementContext = createContext();

export function AchievementProvider({ children }) {
  const [achievements, setAchievement] = useState(Achievements);
  const [displayedAchievements, setDisplayedAchievements] = useState([]);

  const advanceProgress = function (id, name) {
    // get achievement and add Progress
    const achievement = achievements.find((ach) => ach.id == id);
    if (achievement == undefined) {
      return false;
    }

    let progress = achievement.progress;
    progress.names = Array.from(new Set([...progress.names, name]));

    return checkForCompletion(achievement);
  };

  const checkForCompletion = function (achievement) {
    if (
      achievement.progress.names.length >= achievement.requirements &&
      !achievement.completed
    ) {
      achievement.completed = true;
      playCompletionEvent(achievement);
    }

    const filtered = achievements.filter((ach) => ach.id != achievement.id);
    setAchievement([...filtered, achievement]);
    return achievement;
  };

  const playCompletionEvent = function (achievement) {
    setDisplayedAchievements((ach) => [...ach, achievement]);
  };

  return (
    <AchievementContext.Provider
      value={{
        achievements: achievements,
        achievementsManager: {
          advanceProgress,
          checkForCompletion,
          playCompletionEvent,
        },
      }}
    >
      {children}
      {
        <AchievementContainer
          achievements={displayedAchievements}
          setAchievements={setDisplayedAchievements}
          isDismissable={true}
          dismissTime={5000}
        />
      }
    </AchievementContext.Provider>
  );
}

export default AchievementContext;
