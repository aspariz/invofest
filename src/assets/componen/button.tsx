import type React from "react"

interface buttonProps {  
    title:string
}

const Button: React.FC<buttonProps> = ({title}) => {
    return <button>{title}</button>
};

export default Button;