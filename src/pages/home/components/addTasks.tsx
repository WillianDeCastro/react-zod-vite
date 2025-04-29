import { useState } from "react";
import { z } from 'zod'

const loginSchema = z.object({
    name: z.string()
        .min(1, { message: "Name is required" })
        .regex(/[A-Z]/, { message: "Name must have at least one capital letter" }),
    age: z.string()
        .min(1, { message: "Age is required" })
        .refine(val => {
            const num = Number(val);
            return !isNaN(num) && num >= 32;
        }, { message: "Age must be a number and at least 32" }),
});

interface AddTasksProps {
    addToList: (title: string, description: string, ageTask: string) => void;
}
interface ErrorObj {
    name?: string;
    age?: string
}

const AddTasks: React.FC<AddTasksProps> = ({ addToList }) => {

    const [titleTask, setTitleTask] = useState('');
    const [descTask, setDescTask] = useState('');
    const [ageTask, setAgeTask] = useState('0');
    const [errors, setErrors] = useState<ErrorObj>({});

    const clearInputs = () => {
        setTitleTask('');
        setDescTask('');
        setAgeTask('0');
        setErrors({});
    }

    const handleAddClick = () => {
        debugger
        const result = loginSchema.safeParse({ name: titleTask, age: ageTask });
        if (!result.success) {
            // alert(result.error.errors.map(e => e.message).join('\n'));
            const fieldErrors: ErrorObj = {};
            result.error.errors.forEach(err => {
                const field = err.path[0] as 'name' | 'age';
                fieldErrors[field] = err.message;
            });
            setErrors(fieldErrors);
            return;
        }
        addToList(titleTask, descTask, ageTask);
        clearInputs();

    }

    return (
        <div className="flex flex-col space-y-4">
            <label className="font-bold">Title</label>
            <input className="rounded-md shadow-md" value={titleTask} onChange={(e) => setTitleTask(e.target.value.trim())} />
            {errors.name &&  <span className="text-red-500 text-sm">{errors.name}</span>}

            <label className="font-bold">Description</label>
            <input className="rounded-md shadow-md" value={descTask} onChange={(e) => setDescTask(e.target.value.trim())} />

            <label className="font-bold">Age of task</label>
            <input className="rounded-md shadow-md" value={ageTask} onChange={(e) => setAgeTask(e.target.value.trim() )} />
            {errors.age && <span className="text-red-500 text-sm">{errors.age}</span>}

            <button className="bg-blue-600 text-white p-2 rounded-md" onClick={handleAddClick }>Adicionar</button>
        </div>
    )
}

export default AddTasks;