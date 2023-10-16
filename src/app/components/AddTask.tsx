import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { useState } from "react";
import { addTodo } from "../../../api";
import { useRouter } from "next/navigation";
import { v4 as uuid } from "uuid";

export default function AddTask() {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [newTodo, setNewTodo] = useState<string>("");

    const handleSubmitNewTodo: React.FormEventHandler<HTMLFormElement> = async (e) => {
        try {
            e.preventDefault();
            console.log("submit new todo", newTodo);
            // save to db
            await addTodo({
                id: uuid(),
                title: newTodo,
                description: newTodo,
            })
            // reset the value
            setNewTodo("");
            // close the modal
            setModalOpen(false);
            // refresh the page
            router.refresh();

        } catch (error) {

        }

    }

    return (
        <div>
            <button
                className="btn btn-primary w-full "
                onClick={() => setModalOpen(true)}>
                Add New Task
                <AiOutlinePlus className="ml-2" />
            </button>

            <Modal
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
            >
                <h1 className="text-2xl font-bold">Add New Task</h1>
                <form onSubmit={(e) => handleSubmitNewTodo(e)}>
                    <div className="modal-action">
                        <input
                            onChange={(e) => setNewTodo(e.target.value)}
                            value={newTodo}
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full " />
                        <button
                            type="submit"
                            className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}