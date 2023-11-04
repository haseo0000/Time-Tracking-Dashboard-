import React from "react";
import "./detailsCard-styled.css";
import Image from "next/image";
import { useDetailsCard } from "./useDetailsCard";
import { DataTimelineT, TimeLineT } from "@/types";

type PropsT = {
  data: DataTimelineT;
  timeLine: TimeLineT;
};

function DetailsCard({ data, timeLine }: PropsT) {
  const { getImgBG, getCurrentTime, getPreviousTime } = useDetailsCard(data, timeLine);

  return (
    <div
      className="detailsCard__container pt-10 relative overflow-hidden"
      data-details-type={data.title}>
      <div className="details_img__container">
        <Image src={getImgBG()} alt={data.title} width={100} height={100} />
      </div>
      <div className="details__container h-full p-10 relative z-10 md:p-5">
        <section className="flex justify-between items-center">
          <span>{data.title}</span>
          <div className="cursor-pointer w-7">
            <Image
              src="/images/icon-ellipsis.svg"
              alt="ellipsIcon"
              width={100}
              height={100}
            />
          </div>
        </section>
        <section className="flex mt-5 justify-between items-center md:flex-col md:mt-8 md:items-start">
          <span className="text-3xl md:text-6xl">{getCurrentTime()} hrs</span>
          <span style={{ color: "#7679ac" }}>
            Last {timeLine} - {getPreviousTime()}hrs
          </span>
        </section>
      </div>
    </div>
  );
}

export default DetailsCard;
