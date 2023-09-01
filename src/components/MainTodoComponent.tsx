import { AiOutlinePlus } from "react-icons/ai";
import CraeteTodoModal from "./modals/CraeteTodoModal";
import ModalOverlay from "./modals/ModalOverlay";
import { useState } from "react";
import UpdateTodoModal from "./modals/UpdateTodoModal";
import DeleteTodoModal from "./modals/DeleteTodoModal";
import { useQuery } from "@tanstack/react-query";
import { getAllTodos } from "../services/todos";
import toast from "react-hot-toast";
import AllTodo from "./AllTodo";

const MainTodoComponent = () => {
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const toggleCreateModal = () => {
    setShowCreateModal((prevState) => !prevState);
  };

  const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false);
  const toggleUpdateModal = () => {
    setShowUpdateModal((prevState) => !prevState);
  };

  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const toggleDeleteModal = () => {
    setShowDeleteModal((prevState) => !prevState);
  };

  const date = new Date();

  const options: {} = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let currentDate = date.toLocaleString("en-IN", options);

  const { data } = useQuery({
    queryFn: () => getAllTodos(),
    queryKey: ["todos"],
    onError: () => {
      toast.error("Error occured! Try again");
    },
  });

  return (
    <div className="relative">
      <>
        <div className="flex justify-between items-center py-6 border-b ">
          <span className="font-satoshi font-[600] text-[2rem]">Todo App</span>
          <p className=" font-[400] ">{currentDate}</p>
          <button
            onClick={toggleCreateModal}
            className="bg-blue py-2 px-4 rounded-[4px] font-[600] text-white flex gap-2 items-center "
          >
            Create Task
            <AiOutlinePlus className="text-[1.5rem]" />
          </button>
        </div>

        <main className="mt-8">
          {/* TAB  */}

          {/* TASKS */}
          <div className="flex gap-[10rem] ">
            <div className="flex items-center gap-2 ">
              <span className="w-3 h-3 rounded-full bg-in-progress-900"></span>
              <span className="font-[500] ">In Progress</span>
            </div>

            <div className="flex items-center gap-2 ">
              <span className="w-3 h-3 rounded-full bg-done"></span>
              <span className="font-[500] ">Done</span>
            </div>
          </div>

          {showCreateModal && (
            <>
              <ModalOverlay
                showModal={showCreateModal}
                toggleModal={toggleCreateModal}
              />
              <CraeteTodoModal
                showModal={showCreateModal}
                toggleModal={toggleCreateModal}
              />
            </>
          )}

          {showUpdateModal && (
            <>
              <ModalOverlay
                showModal={showUpdateModal}
                toggleModal={toggleUpdateModal}
              />
              <UpdateTodoModal
                showModal={showUpdateModal}
                toggleModal={toggleUpdateModal}
              />
            </>
          )}

          {showDeleteModal && (
            <>
              <ModalOverlay
                showModal={showDeleteModal}
                toggleModal={toggleDeleteModal}
              />
              <DeleteTodoModal
                showModal={showDeleteModal}
                toggleModal={toggleDeleteModal}
              />
            </>
          )}

          <AllTodo
            data={data}
            toggleUpdateModal={toggleUpdateModal}
            toggleDeleteModal={toggleDeleteModal}
          />
        </main>
      </>
    </div>
  );
};

export default MainTodoComponent;
