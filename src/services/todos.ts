import axios from "axios";
import { IGetTodos } from "./types";

const baseUrl: string = "https://jsonplaceholder.typicode.com/todos";

export const getAllTodos = async () => {
  const response = await axios.get<IGetTodos>(`${baseUrl}`);
  console.log(response.data);

  return response.data;
};

export const createTodo = async ({ title }: { title: string }) => {
  const response = await axios.post(
    `${baseUrl}`,
    { title, completed: false },
    {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  console.log(response.data);

  return response.data;
};

export const updateTodo = async ({
  title,
  completed,
  id,
}: {
  title: string;
  completed: boolean;
  id: number;
}) => {
  const response = await axios.put(
    `${baseUrl}/${id}`,
    { title, completed },
    { headers: { "Content-type": "application/json; charset=UTF-8" } }
  );
  console.log(response.data);
  return response.data;
};

export const deleteTodo = async ({ id }: { id: number }) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  console.log(response.data);
  return response.data;
};
