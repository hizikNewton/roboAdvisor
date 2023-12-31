import { ReactComponent as BS1 } from "../assets/images/bestServices/bs1.svg";
import { ReactComponent as BS2 } from "../assets/images/bestServices/bs2.svg";
import { ReactComponent as BS3 } from "../assets/images/bestServices/bs3.svg";
import Card from "components/Card";
import Section from "components/Section";

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
    <Section className="relative">
      <div className="flex justify-between w-full mt-16" data-aos="fade-up"
        data-aos-delay="50">
        {data.map(({ Icon, text, subtext }) => (
          <Card Icon={Icon} text={text} subtext={subtext} transition="flip-right" />
        ))}
      </div>
    </Section>
  );
};

export default BestService;
