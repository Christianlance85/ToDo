import React from 'react';
import IToDo from '../../interface/IToDo';
import P from '../P';
import { BsClipboardCheck, BsClipboardX, BsClipboard } from 'react-icons/bs';


type TodoProps = {
    ToDo: IToDo
    deleteToDo?: (ToDoName: string) => void
    completeToDo?: (ToDoId: number) => void
    incompleteToDo?: (ToDoId: number) => void
}

const ToDo = ({ ToDo, deleteToDo, completeToDo, incompleteToDo }: TodoProps) => {

    return <P>
        <div data-testid='ToDo' className='relative flex justify-around w-full bg-white shadow-md min-w-8'>
            <div className='relative flex justify-around mx-6 '>
                <P><div className='mr-6'>{ToDo.title}</div></P>
                <P><div>{ToDo.category}</div></P>
            </div>
            {ToDo.complete ? <div className='flex justify-around'><button className='flex px-2 text-white bg-primary font-proxima'
                onClick={() => { completeToDo(ToDo.id) }} ><div className='mt-0.5 mr-2'><BsClipboardCheck /></div>Complete</button></div>
                : <div className='flex justify-around'> <button className='flex px-2 text-white bg-primary font-proxima'
                    onClick={() => { incompleteToDo(ToDo.id) }} ><div className='mt-0.5 mr-2'><BsClipboard /> </div>Incomplete</button></div>}
            <button className='flex px-2 text-white bg-tertiary font-proxima'
                onClick={() => deleteToDo(ToDo.title)}><div className='mt-0.5 mr-2'><BsClipboardX /></div>Delete</button>
        </div>
    </P>;
};

export default ToDo;
