import { AiOutlineClose } from "react-icons/ai";
const DeleteTodoModal = ({
  toggleModal,
}: {
  showModal: boolean;
  toggleModal: () => void;
}) => {
  return (
    <div className="z-20 w-[25%] fixed  mx-auto left-0 right-0 bg-white border rounded-[.5rem] py-4 ">
      <header className="flex justify-between items-center pb-4 border-b px-8">
        <h1 className=" font-[600]">Delete Todo</h1>
        <button onClick={toggleModal}>
          <AiOutlineClose className="w-4 h-4" />
        </button>
      </header>
      <form action="" className="mt-8 flex flex-col gap-4 px-8">
        <p className="mt-4">Are you sure you want to delete this Todo?</p>
        <div className="flex self-end mt-4 gap-3">
          <button
            onClick={toggleModal}
            className=" border border-red-500 px-4 py-2 text-red-500 font-[600] rounded-[4px]"
          >
            Cancel
          </button>
          <button className=" bg-red-500 px-4 py-2 text-white font-[600] rounded-[4px]">
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteTodoModal;
