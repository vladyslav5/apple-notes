import React from 'react';
import {Note} from "./Sidebar";

const note: Note =
    {
        text: "это текст-\"рыба\", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной \"рыбой\" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
        date: new Date(),
        isLocked: true
    }
const WorkSpace = () => {
    return (
        <div className={"text-space"}>
            <div>{note.date.toLocaleString(["en-US"], {
                month: "long",
                year:"numeric",
                day: "numeric",
                hour: "2-digit",
                minute: "numeric"
            })}</div>
            <textarea>fd</textarea>
        </div>
    );
};

export default WorkSpace;