import { AiOutlineClose } from "react-icons/ai";
function CraeteTodoModal({
  toggleModal,
}: {
  showModal: boolean;
  toggleModal: () => void;
}) {
  return (
    <div className="z-20 w-[25%] fixed  mx-auto left-0 right-0 bg-white border rounded-[.5rem] py-4 ">
      <header className="flex justify-between items-center pb-4 border-b px-8">
        <h1 className=" font-[600]">Create New Todo</h1>
        <button onClick={toggleModal}>
          <AiOutlineClose className="w-4 h-4" />
        </button>
      </header>
      <form action="" className="mt-8 flex flex-col gap-4 px-8">
        <div className="flex flex-col gap-[.5rem]">
          <label className="font-[500]">Title</label>
          <input
            type="text"
            className="border rounded-[4px]  p-3"
            placeholder="title"
          />
        </div>
        <button
          type="submit"
          className=" bg-blue p-4 text-white font-[600] rounded-[4px]"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default CraeteTodoModal;
