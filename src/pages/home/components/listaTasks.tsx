import { ChevronRightIcon, TrashIcon } from "lucide-react";

interface Task {
    id: number;
    title: string;
    description: string;
}

interface ListaTasksProps {
    tasks: Task[];
    onDeleteTask: (taksId: number) => void;
    onDetailTask: (taksId: number) => void;
    onToogleDoneTask: (taskId: number) => void;
}

const ListaTasks: React.FC<ListaTasksProps> = ({ tasks, onDeleteTask, onDetailTask, onToogleDoneTask }) => {

    return (
        <ul className="space-y-4 p-6 bg-blue-400 rounded-md shadow">
            {tasks.map((task: any) => (
                <li key={task.id} className="flex gap-2" >
                    <button onClick={() => onToogleDoneTask(task.id)} className={`bg-blue-600 text-left w-full text-white p-2 rounded-md 
                        ${task.done && 'line-through'}` }>
                        {task.title}
                    </button>
                    <button onClick={() => onDetailTask(task.id)} className="bg-blue-600 text-white p-2 rounded-md">
                        <ChevronRightIcon />
                    </button>
                    <button onClick={() => onDeleteTask(task.id)} className="bg-blue-600 text-white p-2 rounded-md">
                        <TrashIcon />
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default ListaTasks;