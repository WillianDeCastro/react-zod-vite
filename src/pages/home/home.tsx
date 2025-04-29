import { useState } from "react";
import ListaTasks from "./components/listaTasks";
import AddTasks from "./components/addTasks";
import { useNavigate } from "react-router";

const Home: React.FC = () => {
    const navigate = useNavigate();

    const [myTasks, setMyTasks] = useState([

        {
            id: 1,
            title: 'Aprender',
            description: 'coisas importantes',
            done: false,
            age:'21'
        },
        {
            id: 2,
            title: 'Aprender Java',
            description: 'Mudar carreira',
            done: true,
            age:'21'
        },
        {
            id: 3,
            title: 'Aprender react',
            description: 'Mais vagas',
            done: false,
            age:'21'
        },

    ]);

    const handlerAddTask = (title: string, description: string, age:string) => {
        if (title.trim().length == 0 || description.trim().length == 0) {
            return;
        }

        let newTask = {
            id: myTasks.length + 1,
            title: title,
            description: description,
            done: false,
            age:age
        }

        setMyTasks([...myTasks, newTask]);
    }
    const onToogleDoneTask = (taskId: number) => {

        let newTasks = myTasks.map((task) => {
            if (task.id == taskId) {
                return { ...task, done: !task.done }
                task.done = !task.done;
            }
            return task;
        });

        setMyTasks(newTasks);
    }

    const onDeleteTask = (taskId: number) => {
        let newMyTasks = myTasks.filter((t) => t.id !== taskId);
        setMyTasks(newMyTasks)
    }

    const onDetailTask = (taksId: number) => {
        let task = myTasks.find((t) => t.id === taksId)
        navigate(`/detail/${task?.id}`);
    }

   

    return (
        <div className="w-[500px] space-y-4">
            <h1 className="text-3xl text-blue-100 font-bold text-center">Home</h1>
            <AddTasks addToList={handlerAddTask} />
            <ListaTasks tasks={myTasks} onToogleDoneTask={onToogleDoneTask} onDeleteTask={onDeleteTask} onDetailTask={onDetailTask} />
        </div>
    )
}

export default Home;