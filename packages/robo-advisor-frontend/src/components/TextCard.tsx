import React, { FC } from "react";

type TextCardData = {
  title: string;
  para1: string;
  para2: string;
  score: number;
  color: string
}
interface Props {
  data: TextCardData
}


const TextCard: FC<Props> = ({ data }) => {
  const { score, color, title, para1, para2 } = data || {}
  return (
    <div className="w-[480px] h-fit">
      <article className="information rounded-2xl shadow p-6 backdrop-blur-lg">
        <span style={{ backgroundColor: color }} className={`inline-block text-white font-bold text-sm px-[0.5em] py-[0.75em] leading-4 rounded-md`}>{`RISK SCORE: ${score}`}</span>
        <h2 className=" text-2xl mt-4 text-[#141b22]">{title}</h2>
        <p className="info my-4">{para1}</p>

        <p className="info">{para2}</p>
        <div className="flex w-full justify-end">
          <button className="btn border-2 mt-2 border-green-600 rounded flex p-3 ">
            <span>Learn more</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="none">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </article>
    </div>
  );
};

export default TextCard;
