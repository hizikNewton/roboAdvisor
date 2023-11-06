type Props = {
    Icon: any;
    text: string;
    subtext: string
}

const Card = ({ Icon, text, subtext }: Props) => {
    return (
        <div className="w-72">
            <Icon />
            <div className=" text-2xl font-medium  leading-[48px] mt-6 mb-4">{text}</div>
            <div className='ext-base font-normal'>
                {subtext}
            </div>
        </div>
    )
}

export default Card