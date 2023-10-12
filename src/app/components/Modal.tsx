
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
        // <div className='modal-box relative'>
        //     {/* The button to open modal */}
        //     {/* <label htmlFor="my_modal_6" className="btn">open modal</label> */}

        //     {/* Put this part before </body> tag */}
        //     <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        //     <div className={`modal ${modalState}`}>
        //         <div className="modal-box">
        //             <h3 className="font-bold text-lg">Hello!</h3>
        //             <p className="py-4">This modal works with a hidden checkbox!</p>
        //             <div className="modal-action">
        //                 <label htmlFor="my_modal_6" className="btn">Close!</label>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        // <div className={`modal ${modalState}`}>

        // </div>
    )
}

export default Modal