
import React from 'react'
import { ITask } from '../../../types/task'

interface TaskProps {
    task: ITask
}

const Task: React.FC<TaskProps> = ({ task }) => {
    return (
        <tr key={task.id}>
            <td>{task.title}</td>
            <td>{task.description}</td>
        </tr>
    )
}

export default Task