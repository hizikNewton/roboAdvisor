import Section from "src/components/Section";
import { ReactComponent as Line1 } from "../assets/images/Vector1.svg";
import { ReactComponent as Line2 } from "../assets/images/Vector2.svg";
import { ReactComponent as Line3 } from "../assets/images/Vector3.svg";
import { ReactComponent as Judge } from "../assets/images/judge.svg";
import { ReactComponent as Menu } from "../assets/images/menu.svg";
import { ReactComponent as Chart } from "../assets/images/chart.svg";
import { ReactComponent as Wallet } from "../assets/images/wallet.svg";
import Card from "../components/Card";

type Props = {};

const WhyChooseUs = (props: Props) => {
  return (
    <Section className="bg-green-600">
      <div className="grid items-center grid-cols-3 grid-rows-3 justify-items-center">
        <Card
          Icon={Menu}
          text="Lots Choices"
          subtext="There are various types of investments available and you can choose investments"
        />
        <div className="row-span-3 h-[500px] col-start-2 col-end-3">
          <Line1 />
        </div>
        <div className="">
          <Card
            Icon={Wallet}
            text="Minimal Risk"
            subtext="Interest rate risk in the risk that arises because the relative value"
          />
        </div>
        <div className="w-full h-2 overflow-hidden">
          <Line2 />
        </div>
        <div className="w-full h-2 overflow-hidden ">
          <Line3 />
        </div>
        <Card
          Icon={Chart}
          text="High Profit"
          subtext="The money or assets will gradually grow or increase in value within a certain period"
        />
        <Card
          Icon={Judge}
          text="Legal"
          subtext="Our platform has been verified and supervised by related institutions"
        />
      </div>
    </Section>
  );
};

export default WhyChooseUs;
