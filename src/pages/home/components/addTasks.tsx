import { useState } from "react";

interface AddTasksProps {
    addToList: (title: string, description: string) => void;
}

const AddTasks: React.FC<AddTasksProps> = ({ addToList }) => {

    const [titleTask, setTitleTask] = useState('');
    const [descTask, setDescTask] = useState('');

    const clearInputs = () => {
        setTitleTask('');
        setDescTask('');
    }

    return (
        <div className="flex flex-col space-y-4">
            <label className="font-bold">Title</label>
            <input className="rounded-md shadow-md" value={titleTask} onChange={(e) => setTitleTask(e.target.value.trim())} />
            <label className="font-bold">Description</label>
            <input className="rounded-md shadow-md" value={descTask} onChange={(e) => setDescTask(e.target.value.trim())} />
            <button className="bg-blue-600 text-white p-2 rounded-md" onClick={() => { addToList(titleTask, descTask); clearInputs(); }}>Adicionar</button>
        </div>
    )
}

export default AddTasks;