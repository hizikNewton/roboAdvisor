import React, { PropsWithChildren } from 'react'

import { ReactComponent as Underline } from '../assets/images/bestServices/underline.svg';



const Section = ({ children }: PropsWithChildren) => {
    return (

        <section className="">

            <div className="max-w-6xl px-4 mx-auto sm:px-6 flex items-center flex-col">
                <div className=" text-center text-5xl font-bold mb-4">Our Best Services<br />For Your Convinience</div>
                <div className="text-center text-base font-normal mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt ut labore et dolore magna.</div>
                <Underline />
                {children}
            </div>
        </section>
    )
}

export default Section