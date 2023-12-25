import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
// import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { AuthContext } from '../../../Providers/AuthProvider'

const AddTask = ({ showModal, setShowModal, refetch }) => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        const splitData = data.priority.split(" ");
        console.log(splitData);
        if (data.title.length > 70) {
            toast.error("Title cannot be more than 70 characters");
            return;
        }

        if (data.description.length > 200) {
            toast.error("Description cannot be more than 200 characters");
            return;
        }
        const newTask = {
            title: data.title,
            description: data.description,
            deadline: data.date,
            status: "todo",
            priority: splitData[0],
            email: user?.email,
        };
        console.log(newTask);
        axios
            .post(
                "http://localhost:3000/tasks",
                newTask
            )
            .then((res) => {
                console.log(res.data);
                // refetch();
                if (res.data.insertedId) {
                    refetch()
                    reset();
                    setShowModal(false);
                    toast.success(`${data.title} task added`);
                }
            })
            .catch((error) => {
                console.error(error);
                toast.error(`failed to add task`);
            });
    };
    return (
        <>
            {showModal && (
                <dialog id="my_modal_1" className="modal" open>
                    <div className="modal-box">
                        <h3 className="font-bold text-lg text-center">Add A task</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Task Title</span>
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    {...register("title")}
                                    placeholder="title"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input
                                    type="text"
                                    name="description"
                                    {...register("description")}
                                    placeholder="Task description"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Deadline</span>
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        {...register("date")}
                                        className="input input-bordered"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Priority</span>
                                    </label>
                                    <select
                                        name="Priority"
                                        {...register("priority")}
                                        className="select select-bordered w-full"
                                    >
                                        <option disabled selected>
                                            Select Priority
                                        </option>
                                        <option value="high #EA3A77">High</option>
                                        <option value="moderate #FF02F0">Moderate</option>
                                        <option value="low #AA6AE2">Low</option>
                                    </select>
                                </div>
                            </div>
                            <div className="modal-action">
                                <div method="dialog" className="space-x-5">
                                    <button className="btn btn-primary text-white">Add</button>
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="btn bg-red-500 text-white"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </dialog>
            )}
            <Toaster></Toaster>
        </>
    );
};

export default AddTask;
