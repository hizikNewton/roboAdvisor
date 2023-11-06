import React from "react";

import { ReactComponent as Underline } from '../assets/images/bestServices/underline.svg';
import { ReactComponent as BS1 } from '../assets/images/bestServices/bs1.svg';
import { ReactComponent as BS2 } from '../assets/images/bestServices/bs2.svg';
import { ReactComponent as BS3 } from '../assets/images/bestServices/bs3.svg';
import Card from "src/components/Card";


type Props = {};

const data = [{
  Icon: BS1,
  text: "Guarantee Safety",
  subtext: "Lorem ipsum dolor sit amet, etetcera ut consectetur adipiscing elit, sed do terru eiusmod tempor incididunt ut labore et dolore magna."
},
{
  Icon: BS2,
  text: "All in One App",
  subtext: "Lorem ipsum dolor sit amet, etetcera ut consectetur adipiscing elit, sed do terru eiusmod tempor incididunt ut labore et dolore magna."
}, {
  Icon: BS3,
  text: "Easy to Use",
  subtext: "Lorem ipsum dolor sit amet, etetcera ut consectetur adipiscing elit, sed do terru eiusmod tempor incididunt ut labore et dolore magna."
}]
const BestService = (props: Props) => {
  return (
    <section className="">

      <div className="max-w-6xl px-4 mx-auto sm:px-6 flex items-center flex-col">
        <div className=" text-center text-5xl font-bold mb-4">Our Best Services<br />For Your Convinience</div>
        <div className="text-center text-base font-normal mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt ut labore et dolore magna.</div>
        <Underline />
        <div className="flex w-full justify-between mt-16">
          {data.map(({ Icon, text, subtext }) => <Card Icon={Icon} text={text} subtext={subtext} />)}
        </div>
      </div>
    </section>
  );
};

export default BestService;
