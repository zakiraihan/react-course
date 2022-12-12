import Backdrop from "./Backdrop";
import Modal from "./Modal";
import { useState } from 'react';

function Todo(props) {
  const [showModal, setShowModal] = useState(false);
  
  const deleteHandler = () => {
    setShowModal(true);
  }

  const closeModalHandler = () => {
    setShowModal(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {
        showModal && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      }
      {
        showModal && <Backdrop onClick={closeModalHandler} />
      }
    </div>
  );
}

export default Todo;