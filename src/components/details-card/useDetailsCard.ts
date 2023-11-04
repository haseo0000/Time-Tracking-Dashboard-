import { DataTimelineT, TimeLineT } from "@/types";

export function useDetailsCard(data: DataTimelineT, timeLine: TimeLineT) {
  const getImgBG = () => {
    switch (data.title) {
      case "Work":
        return "/images/icon-work.svg";
      case "Play":
        return "/images/icon-play.svg";
      case "Study":
        return "/images/icon-study.svg";
      case "Exercise":
        return "/images/icon-exercise.svg";
      case "Social":
        return "/images/icon-social.svg";
      case "Self Care":
        return "/images/icon-self-care.svg";
      default:
        return "";
    }
  };

  const getCurrentTime = () => {
    switch (timeLine) {
      case TimeLineT.DAILY:
        return data.timeframes.daily.current;
      case TimeLineT.WEEKLY:
        return data.timeframes.weekly.current;
      case TimeLineT.MONTHLY:
        return data.timeframes.monthly.current;
    }
  };

  const getPreviousTime = () => {
    switch (timeLine) {
      case TimeLineT.DAILY:
        return data.timeframes.daily.previous;
      case TimeLineT.WEEKLY:
        return data.timeframes.weekly.previous;
      case TimeLineT.MONTHLY:
        return data.timeframes.monthly.previous;
    }
  };

  return {
    getImgBG,
    getCurrentTime,
    getPreviousTime,
  };
}
