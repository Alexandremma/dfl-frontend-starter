import { useEffect, useState } from "react";
import { Task, TaskStatus } from "@/types/task.types";
import {
  getTasks,
  createTask,
  updateTaskStatus,
  deleteTask,
} from "@/services/task.service";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadTasks = async () => {
    try {
      setIsLoading(true);
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const addTask = async (
    data: Pick<Task, "title" | "description" | "priority" | "user">
  ) => {
    const newTask = await createTask(data);
    setTasks((prev) => [...prev, newTask]);
  };

  const cycleStatus = async (task: Task) => {
    const ordem = [
      TaskStatus.A_fazer,
      TaskStatus.Fazendo,
      TaskStatus.Em_Revisao,
      TaskStatus.Feito,
    ];
    const indiceAtual = ordem.indexOf(task.status);
    const proximoStatus = ordem[(indiceAtual + 1) % ordem.length];

    const updated = await updateTaskStatus(task.id, proximoStatus);
    setTasks((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
  };

  const removeTask = async (id: string) => {
    await deleteTask(id);
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  useEffect(() => {
    void loadTasks();
  }, []);

  return { tasks, isLoading, addTask, cycleStatus, removeTask };
}