import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Task = ({ t , refetch }) => {
    const { title, description, deadline, priority, status , _id } = t;

    const handleDelete = () =>{
        axios.delete(`http://localhost:3000/tasks/${_id}`)
        .then((data) => {
            console.log(data.data);
            refetch();
            if (data.data.deletedCount > 0) {
              toast.error("Task has been deleted");
            }
          });
    }
    return (
        <div data-aos="zoom-in">
            <div className=" bg-base-100 border">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p className="">Deadline : {deadline}</p>
                    <div className="flex justify-between">
                        <div>
                            <p className="badge badge-primary">{priority}</p>
                        </div>
                        <button onClick={handleDelete} className="badge badge-error text-white">delete</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Task;