import { ITask } from "./types/task";

const baseURL = "http://localhost:3001";

export const getAllTodos = async (): Promise<ITask[]> => {
  const response = await fetch(`${baseURL}/tasks`, { cache: "no-store" });
  const data = await response.json();
  return data;
};

export const addTodo = async (formData): Promise<ITask> => {
  try {
    const response = await fetch(`${baseURL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error");
    throw new Error(error);
  }
};

export const editTodoPUT = async (formData): Promise<ITask> => {
  try {
    const response = await fetch(`${baseURL}/tasks/${formData.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error");
    throw new Error(error);
  }
};

export const deleteTodo = async (id: number): Promise<void> => {
  try {
    await fetch(`${baseURL}/tasks/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log("error");
    throw new Error(error);
  }
};
