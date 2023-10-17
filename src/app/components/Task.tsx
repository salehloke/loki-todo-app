"use client"

import React from 'react'
import { ITask } from '../../../types/task'
import { AiFillDelete, AiOutlinePlus } from 'react-icons/ai'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import Modal from './Modal'
import { useRouter } from 'next/navigation'
import { deleteTodo, editTodoPUT } from '../../../api'

interface TaskProps {
    task: ITask
}

const Task: React.FC<TaskProps> = ({ task }) => {
    const router = useRouter()
    const [modalOpenEdit, setModalOpenEdit] = React.useState<boolean>(false);
    const [taskToEdit, setTaskToEdit] = React.useState<string>(task.title)
    const [taskId, setTaskId] = React.useState<string>(task.title)

    const [modalOpenDelete, setModalOpenDelete] = React.useState<boolean>(false);


    const handleSubmitEditTodo: React.FormEventHandler<HTMLFormElement> = async (e) => {
        try {
            e.preventDefault();
            console.log("submit new todo", taskToEdit);
            // save to db
            await editTodoPUT({
                id: task.id,
                title: taskToEdit,
                description: taskToEdit,
            })
            // reset the value
            setTaskToEdit(task.title);
            // close the modal
            setModalOpenEdit(false);
            // refresh the page
            router.refresh();

        } catch (error) {
        }
    }


    const handleDeleteTodo: React.FormEventHandler<HTMLFormElement> = async (e) => {
        try {
            e.preventDefault();
            console.log("submit new todo", taskToEdit);
            // save to db
            await deleteTodo(task.id)
            // reset the value
            setTaskToEdit(task.title);
            // close the modal
            setModalOpenEdit(false);
            // refresh the page
            router.refresh();

        } catch (error) {
        }
    }

    return (
        <tr key={task.id}>
            <td className='w-full'>{task.title}</td>
            <td>{task.description}</td>
            <td className='flex gap-5'>
                <FiEdit cursor='pointer' onClick={() => { setModalOpenEdit(true) }} className='text-blue-500' size={25} />
                {/* EDIT MODAL */}
                <Modal
                    modalOpen={modalOpenEdit}
                    setModalOpen={setModalOpenEdit}
                >
                    <h1 className="text-2xl font-bold">Edit Task</h1>
                    {/* EDIT FORM */}
                    <form onSubmit={(e) => handleSubmitEditTodo(e)}>
                        <div className="modal-action">
                            <input
                                onChange={(e) => setTaskToEdit(e.target.value)}
                                value={taskToEdit}
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
                    {/* end of EDIT FORM  */}
                </Modal>
                {/* end of EDIT MODAL */}
                <FiTrash2 cursor='pointer' onClick={() => setModalOpenDelete(true)} className='text-red-500' size={25} />
                {/* DELETE MODAL */}
                <Modal
                    modalOpen={modalOpenDelete}
                    setModalOpen={setModalOpenDelete}
                >
                    <h3 className="text-lg font-bold">Are you sure you want to delete this task?</h3>
                    {/* DELETE FORM */}
                    <form onSubmit={(e) => handleSubmitEditTodo(e)}>
                        <div className="modal-action">
                            <button
                                onClick={(e) => { handleDeleteTodo(e) }}
                                type="submit"
                                className="btn btn-danger">
                                Yes
                            </button>
                            <button
                                onClick={(e) => { setModalOpenDelete(false) }}
                                type="submit"
                                className="btn btn-secondary">
                                No
                            </button>
                        </div>
                    </form>
                    {/* end of DELETE FORM  */}
                </Modal>
                {/* end of DELETE MODAL */}
            </td>
        </tr>
    )
}

export default Task