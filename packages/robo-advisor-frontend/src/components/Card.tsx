type Props = {
  Icon: any;
  text: string;
  subtext: string;
  transition: string
};

const Card = ({ Icon, text, transition, subtext }: Props) => {
  return (
    <div className="w-64 h-fit " data-aos={transition} data-aos-delay="100" data-aos-duration="3000">
      <Icon />
      <div className=" text-2xl font-medium  leading-[48px] mt-6 mb-4">
        {text}
      </div>
      <div className="font-normal ext-base">{subtext}</div>
    </div>
  );
};

export default Card;
