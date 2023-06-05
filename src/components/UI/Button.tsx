import React, {FC} from 'react';
interface ButtonProps{
    children:React.ReactNode
    className?:string,
    disabled?:boolean,
    onClick?:()=>void
}
const Button:FC<ButtonProps> = ({children,className,disabled,onClick}) => {
    return (
        <button onClick={onClick} className={"button " + className} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;