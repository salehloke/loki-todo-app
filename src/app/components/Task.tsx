
import React from 'react'
import { ITask } from '../../../types/task'
import { AiFillDelete, AiOutlinePlus } from 'react-icons/ai'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import Modal from './Modal'
import { useRouter } from 'next/navigation'
import { editTodo } from '../../../api'

interface TaskProps {
    task: ITask
}

const Task: React.FC<TaskProps> = ({ task }) => {
    const router = useRouter()
    const [modalOpenEdit, setModalOpenEdit] = React.useState<boolean>(false);
    const [editTodo, setEditTodo] = React.useState<string>('')
    const [taskId, setTaskId] = React.useState<string>(task.title)

    const handleSubmitEditTodo: React.FormEventHandler<HTMLFormElement> = async (e) => {
        try {
            e.preventDefault();
            console.log("submit new todo", editTodo);
            // save to db
            // await editTodo({
            //     id: taskId,
            //     title: editTodo,
            //     description: editTodo,
            // })
            // reset the value
            setEditTodo("");
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
                                onChange={(e) => setEditTodo(e.target.value)}
                                value={editTodo}
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
                <FiTrash2 cursor='pointer' className='text-red-500' size={25} />

            </td>
        </tr>
    )
}

export default Task