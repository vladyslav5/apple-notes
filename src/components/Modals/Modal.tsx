import React, {FC} from 'react';
import ReactDOM from "react-dom";


export interface ModalProps {
    active: boolean
    setActive: (visible: boolean) => void,
    children?: React.ReactNode
}

const Modal: FC<ModalProps> = ({active, setActive, children}) => {
    return ReactDOM.createPortal(
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={"modal-content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>,
        document.getElementById("modal") as HTMLElement
    )
};

export default Modal;