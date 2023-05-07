import React, {FC} from 'react';
interface ButtonProps{
    children:React.ReactNode
    className?:string
}
const Button:FC<ButtonProps> = ({children,className}) => {
    return (
        <button className={"button " + className}>
            {children}
        </button>
    );
};

export default Button;