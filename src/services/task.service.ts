import { Task, TaskStatus } from "@/types/task.types";
import { tasksDummyData } from "@/test-utils/task.dummy";

let tasksDb: Task[] = [...tasksDummyData];

const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));

export async function getTasks(): Promise<Task[]> {
  await delay();
  return [...tasksDb];
}

export async function createTask(
  data: Pick<Task, "title" | "description" | "priority" | "user">
): Promise<Task> {
  await delay();
  const newTask: Task = {
    id: crypto.randomUUID(),
    title: data.title,
    description: data.description,
    priority: data.priority,
    status: TaskStatus.A_fazer,
    createdAt: new Date(),
    updatedAt: new Date(),
    user: data.user,
  };
  tasksDb = [...tasksDb, newTask];
  return newTask;
}

export async function updateTaskStatus(
  id: string,
  status: TaskStatus
): Promise<Task> {
  await delay();
  tasksDb = tasksDb.map((task) =>
    task.id === id ? { ...task, status, updatedAt: new Date() } : task
  );
  const updated = tasksDb.find((task) => task.id === id);
  if (!updated) throw new Error("Task não encontrada");
  return updated;
}

export async function deleteTask(id: string): Promise<void> {
  await delay();
  tasksDb = tasksDb.filter((task) => task.id !== id);
}

