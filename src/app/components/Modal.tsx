
import React from 'react';

interface ModalProps {
    modalOpen: boolean
    setModalOpen: (modalOpen: boolean) => void
    children?: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {

    /**
     * @description this is a ternary operator
     */
    const modalState = modalOpen ? "modal-open" : "";
    // const [mod]
    return (
        <dialog id="my_modal_3" className={`modal ${modalState}`}>
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button
                        onClick={() => setModalOpen(false)}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                </form>
                {children}
            </div>
        </dialog>
    )
}

export default Modal