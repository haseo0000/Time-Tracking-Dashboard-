export enum TimeLineT {
  DAILY = "daily",
  WEEKLY = "week",
  MONTHLY = "monthly",
}

export type DataTimelineT = {
  title: string;
  timeframes: {
    daily: TimeT;
    weekly: TimeT;
    monthly: TimeT;
  };
};

type TimeT = {
  current: number;
  previous: number;
};
