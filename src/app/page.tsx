"use client";

import { useState } from "react";
import { TimeLineT } from "../types";
import Card from "@/components/card/card";
import DetailsCard from "@/components/details-card/detailsCard";
import Datas from "../../data.json";

export default function Home() {
  const [timeLine, setTimeLine] = useState(TimeLineT.WEEKLY);

  const handleSetTimeLine = (time: TimeLineT) => {
    setTimeLine(time);
  };

  return (
    <div className="main__container">
      <Card timeLine={timeLine} handleSetTimeLine={handleSetTimeLine} />
      {Datas.map((data) => (
        <DetailsCard key={data.title} data={data} timeLine={timeLine} />
      ))}
    </div>
  );
}
