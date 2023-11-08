import React, { FC } from "react";

interface Props {
  title: string;
  para1: string;
  para2: string;
}

const TextCard: FC<Props> = ({ title, para1, para2 }) => {
  return (
    <div className="w-64 h-fit">
      <div className=" text-2xl font-medium  leading-[48px] mt-6 mb-4">
        <h2>{title}</h2>
      </div>
      <p>{para1}</p>
      <p>{para2}</p>
    </div>
  );
};

export default TextCard;
