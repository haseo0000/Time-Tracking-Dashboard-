import { TimeLineT } from "../types";
import { useDetailsCard } from "../components/details-card/useDetailsCard";

describe("test useDetailsCard", () => {
  const mockData = {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  };

  describe("test getImgBG function", () => {
    it("should get work image background", () => {
      const data = { ...mockData };
      const { getImgBG } = useDetailsCard(data, TimeLineT.WEEKLY);
      const result = getImgBG();
      expect(result).toBe("/images/icon-work.svg");
    });

    it("should get play image background", () => {
      const data = { ...mockData, title: "Play" };
      const { getImgBG } = useDetailsCard(data, TimeLineT.WEEKLY);
      const result = getImgBG();
      expect(result).toBe("/images/icon-play.svg");
    });
  });

  describe("test getCurrentTime function", () => {
    it("should get daily current time", () => {
      const { getCurrentTime } = useDetailsCard(mockData, TimeLineT.DAILY);
      const result = getCurrentTime();
      expect(result).toBe(5);
    });
    it("should get weekly current time", () => {
      const { getCurrentTime } = useDetailsCard(mockData, TimeLineT.WEEKLY);
      const result = getCurrentTime();
      expect(result).toBe(32);
    });
    it("should get monthly current time", () => {
      const { getCurrentTime } = useDetailsCard(mockData, TimeLineT.MONTHLY);
      const result = getCurrentTime();
      expect(result).toBe(103);
    });
  });

  describe("test getPreviousTime function", () => {
    it("should get daily previous time", () => {
      const { getPreviousTime } = useDetailsCard(mockData, TimeLineT.DAILY);
      const result = getPreviousTime();
      expect(result).toBe(7);
    });
    it("should get weekly previous time", () => {
      const { getPreviousTime } = useDetailsCard(mockData, TimeLineT.WEEKLY);
      const result = getPreviousTime();
      expect(result).toBe(36);
    });
    it("should get monthly previous time", () => {
      const { getPreviousTime } = useDetailsCard(mockData, TimeLineT.MONTHLY);
      const result = getPreviousTime();
      expect(result).toBe(128);
    });
  });
});
