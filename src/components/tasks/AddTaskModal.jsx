import Modal from "../ui/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Add New Task"}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, odit
        repellat. Sit ipsa corrupti expedita tempore, cum perferendis
        praesentium tempora.
      </p>
    </Modal>
  );
};

export default AddTaskModal;
