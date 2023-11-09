import React, { FC } from 'react'

interface Props {
    text: string
    clx?: string
    type?: "button" | "submit"
    handleSubmit?: () => void
}

const Button: FC<Props> = ({ type = "button", handleSubmit, text, clx }) => {
    return (
        <button
            className={`w-full text-white bg-[#2FB574] p-3 rounded-lg btn  ${clx}`}
            type={type}
            onClick={handleSubmit}
        >
            {text}
        </button>
    )
}

export default Button