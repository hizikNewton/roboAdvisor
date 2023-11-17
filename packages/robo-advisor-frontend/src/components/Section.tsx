import React, { PropsWithChildren } from "react";

import { ReactComponent as Underline } from "../assets/images/bestServices/underline.svg";

interface Props {
  className?: string;
  title?: string
}

const Section = ({
  title,
  children,
  className: classes,
}: PropsWithChildren<Props>) => {
  return (
    <section className="">
      <div
        className={`flex flex-col items-center max-w-6xl  pt-6 px-4 mx-auto mb-20 sm:px-6 ${classes}`}
      >
        <div className="mb-4 text-5xl w-[500px] font-bold text-center ">
          {title ?? `Our Best Services for Your Convenience`}
        </div>
        <div className="mb-8 text-base font-normal text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
          sed do eiusmod tempor incididunt ut labore et dolore magna.
        </div>
        <Underline className="mb-12" />
        {children}
      </div>
    </section>
  );
};

export default Section;
