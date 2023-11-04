import React from "react";
import "./card-styled.css";
import Image from "next/image";
import { TimeLineT } from "@/types";

type Props = {
  timeLine: TimeLineT;
  handleSetTimeLine: (time: TimeLineT) => void;
};

function Card({ timeLine, handleSetTimeLine }: Props) {
  const TIMEARR = [
    {
      name: "Daily",
      time: TimeLineT.DAILY,
    },
    {
      name: "Weekly",
      time: TimeLineT.WEEKLY,
    },
    {
      name: "Monthly",
      time: TimeLineT.MONTHLY,
    },
  ];

  return (
    <div className="container__card">
      <section className="profile__section flex gap-3 p-10 md:flex-col">
        <div className="img__profile w-14">
          <Image
            src={"/images/image-jeremy.png"}
            alt="UserImg"
            width={100}
            height={100}
          />
        </div>
        <div className="grid md:mt-5">
          <span>report for</span>
          <span className="md:text-4xl">Firstname lastname</span>
        </div>
      </section>
      <section className="flex justify-between p-10 md:flex-col md:gap-5">
        {TIMEARR.map((item) => (
          <div
            key={item.name}
            onClick={() => handleSetTimeLine(item.time)}
            className={`${
              timeLine === item.time ? "text-white" : "text-gray-500"
            } cursor-pointer`}>
            {item.name}
          </div>
        ))}
      </section>
    </div>
  );
}

export default Card;
