import { useParams } from "react-router"

const Detail: React.FC = () => {

    const tasks = [
        {
            id: 1,
            title: 'Aprender',
            description: 'coisas importantes',
            done: false
        },
        {
            id: 2,
            title: 'Aprender Java',
            description: 'Mudar carreira',
            done: true
        },
        {
            id: 3,
            title: 'Aprender react',
            description: 'Mais vagas',
            done: false
        }
    ]

    const { idDetail } = useParams();

    const taskSelected = idDetail ? tasks.find((t) => t.id === parseInt(idDetail)) : undefined;

    return (
        <div>
            <h1 className="font-bold">Detalhes</h1>
            <p>id {taskSelected?.id}</p>
            <p>title {taskSelected?.title}</p>
            <p>description {taskSelected?.description}</p>
        </div>
    )
}

export default Detail