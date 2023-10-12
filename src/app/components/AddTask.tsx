import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { useState } from "react";

export default function AddTask() {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

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
            </Modal>
        </div>
    )
}