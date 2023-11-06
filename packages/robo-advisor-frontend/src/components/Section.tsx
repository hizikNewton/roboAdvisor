import React, { PropsWithChildren } from "react";

import { ReactComponent as Underline } from "../assets/images/bestServices/underline.svg";

interface Props {
  className?: string;
}

const Section = ({
  children,
  className: classes,
}: PropsWithChildren<Props>) => {
  return (
    <section>
      <div
        className={`flex flex-col items-center max-w-6xl px-4 mx-auto mb-20 sm:px-6 ${classes}`}
      >
        <div className="mb-4 text-5xl font-bold text-center ">
          Our Best Services
          <br />
          For Your Convinience
        </div>
        <div className="mb-8 text-base font-normal text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
          sed do eiusmod tempor incididunt ut labore et dolore magna.
        </div>
        <Underline />
        {children}
      </div>
    </section>
  );
};

export default Section;
