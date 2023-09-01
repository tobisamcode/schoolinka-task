import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

function AllTodo({
  data,
  toggleUpdateModal,
  toggleDeleteModal,
}: {
  data: any;
  toggleUpdateModal: () => void;
  toggleDeleteModal: () => void;
}) {
  return (
    <>
      {/* ALL CARDS */}
      <div className="grid grid-cols-4 mt-4 gap-4 ">
        {data?.map(
          ({ title, completed }: { title: string; completed: boolean }) => (
            <div className="p-4 flex justify-between flex-col border rounded-[.5rem] bg-white ">
              <div className="flex flex-col justify-between gap-4 ">
                <p
                  className={`text-[12px] self-start font-[500]  rounded-[.875rem]  py-1 px-3  ${
                    completed
                      ? " text-done bg-green-100"
                      : "text-in-progress-800 bg-in-progress-700"
                  } `}
                >
                  {completed ? "Completed" : "In Progress"}
                </p>

                <h1 className="font-[400] text-[1.5rem]">{title}</h1>
              </div>

              <div className="flex justify-self-end justify-between items-center mt-3 border-t pt-4">
                <button
                  onClick={toggleUpdateModal}
                  className="flex gap-3 items-center text-gray-100 "
                >
                  <BiEdit className="w-6 h-6" />
                  <span className="text-[12px] font-[500]">Edit</span>
                </button>
                <button
                  onClick={toggleDeleteModal}
                  className="flex gap-3 items-center text-gray-100 "
                >
                  <AiFillDelete className="w-6 h-6" />
                  <span className="text-[12px] font-[500]">Delete</span>
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}

export default AllTodo;
