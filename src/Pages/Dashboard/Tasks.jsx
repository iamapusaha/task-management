import { useEffect, useState } from "react";
import Task from "./Task";
import AddTask from "./AddTask/AddTask";
import useTasks from "../../hooks/useTasks";
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Tasks = () => {
    const [tasks, refetch] = useTasks();
    // const [tasks, setTasks] = useState([]);
    const [showModal , setShowModal] = useState(false);


    console.log(tasks)
    
    // useEffect(() => {
    //     fetch('tasks.json')
    //         .then(res => res.json())
    //         .then(data => setTasks(data));
    // }, []);

    const handleAddTask = () =>{
        setShowModal(true);
    }
    return (
        <div className="border md:w-5/6 px-5 pt-2">
            <p data-aos="zoom-in" className="text-3xl font-bold text-center mt-2">Task Management Dashboard</p>
            <hr className="my-4" />
            <div>
                <button onClick={handleAddTask} className="btn my-3 border border-blue-400 bg-none">Add a Task</button>
            </div>
            <AddTask refetch={refetch} setShowModal={setShowModal} showModal={showModal}></AddTask>
            <div className="grid grid-cols-3 gap-3">
                {/* todo */}
                <div className="border rounded bg-gray-50 shadow">
                    <p className="text-xl text-center font-medium mt-2">Todo</p>
                    <hr  className="my-2"/>
                    {/* tasks */}
                    <div className="grid grid-cols-1 gap-3">
                        {
                            tasks.filter(task=>task.status==='todo').map(t=><Task refetch={refetch} t={t}></Task>)
                        }
                    </div>
                </div>
                {/* in progress */}
                <div className="border rounded bg-gray-50 shadow">
                    <p className="text-xl text-center font-medium mt-2">Ongoing</p>
                    <hr  className="my-2"/>
                    {/* tasks */}
                    <div className="grid grid-cols-1 gap-3">
                        {
                            tasks.filter(task=>task.status==='ongoing').map(t=><Task refetch={refetch} t={t}></Task>)
                        }
                    </div>
                </div>
                {/* done */}
                <div className="border rounded bg-gray-50 shadow">
                    <p className="text-xl text-center font-medium mt-2">Completed</p>
                    <hr  className="my-2"/>
                    {/* tasks */}
                    <div className="grid grid-cols-1 gap-3">
                        {
                            tasks.filter(task=>task.status==='completed').map(t=><Task refetch={refetch} t={t}></Task>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tasks;