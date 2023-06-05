import React, {FC, useState} from 'react';
import Button from "../UI/Button";
import Modal, {ModalProps} from "./Modal";


const DeleteModal: FC<ModalProps> = ({children, active, setActive}) => {
    const [check, setCheck] = useState<boolean>(false)
    const keepHandler = () => {
        setActive(false)
    }
    const deleteHandler = () => {
        localStorage.setItem("delete", check.toString())
        setActive(false)
    }
    return (
        <Modal active={active} setActive={setActive}>
            <div className={"delete"}>
                <p>Do you want delete this note?</p>
                <label>
                    <input type={"checkbox"} checked={check} onChange={e => setCheck(e.target.checked)}/>
                    <span>Don't ask again</span>
                </label>
                <div>
                    <Button onClick={deleteHandler}>delete</Button>
                    <Button onClick={keepHandler}>Keep</Button>
                </div>
            </div>
            {children}
        </Modal>
    );
};

export default DeleteModal;