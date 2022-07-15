import { useEffect, useState } from "react";
import useMultipleTimeout from "../../hooks/useTimeout";
import Achievement from "./achievement";

const AchievementContainer = ({
  achievements,
  setAchievements,
  dismissTime,
}) => {
  useEffect(() => {
    achievements.forEach((ach) => {
      if (!ach.timeout) {
        ach.timeout = setTimeout(() => {
          deleteAchievement(ach);
        }, dismissTime);
      }
    });
    //setAchievements([...achievements]);
  }, [achievements]);

  const deleteAchievement = (achievement) => {
    setAchievements((ach) => {
      const achievementsIndex = ach.findIndex((ac) => ac.id === achievement.id);

      ach.splice(achievementsIndex, 1);
      return [...ach];
    });
  };

  return (
    <>
      {achievements && achievements.length > 0 && (
        <div className="min-h-[50%] fixed pb-6 pt-10 bottom-0 m-auto left-0 right-0 w-96 z-50 flex flex-col justify-end overflow-hidden">
          {achievements.map((achievement, i) => (
            <Achievement
              key={i}
              achievement={achievement}
              dismiss={() => deleteAchievement(achievement)}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default AchievementContainer;
