import { ReactComponent as BS1 } from "../assets/images/bestServices/bs1.svg";
import { ReactComponent as BS2 } from "../assets/images/bestServices/bs2.svg";
import { ReactComponent as BS3 } from "../assets/images/bestServices/bs3.svg";
import Card from "src/components/Card";
import Section from "src/components/Section";

type Props = {};

const data = [
  {
    Icon: BS1,
    text: "Guarantee Safety",
    subtext:
      "Lorem ipsum dolor sit amet, etetcera ut consectetur adipiscing elit, sed do terru eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    Icon: BS2,
    text: "All in One App",
    subtext:
      "Lorem ipsum dolor sit amet, etetcera ut consectetur adipiscing elit, sed do terru eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    Icon: BS3,
    text: "Easy to Use",
    subtext:
      "Lorem ipsum dolor sit amet, etetcera ut consectetur adipiscing elit, sed do terru eiusmod tempor incididunt ut labore et dolore magna.",
  },
];
const BestService = (props: Props) => {
  return (
    <Section>
      <div className="flex w-full justify-between mt-16">
        {data.map(({ Icon, text, subtext }) => (
          <Card Icon={Icon} text={text} subtext={subtext} />
        ))}
      </div>
    </Section>
  );
};

export default BestService;
