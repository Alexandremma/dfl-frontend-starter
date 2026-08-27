import TaskListExample from "@/components/tasks-example/TaskListExample";
import { Button } from "@/components/ui/Button";
import { taskExampleData } from "@/test-utils/tasks-example.dummy";
import { TaskExample } from "@/types/task-example.types";
import { ArrowLeftIcon, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const delay = () => new Promise((resolve) => setTimeout(resolve, 3000));

export default function TaskExamplePage() {
  const [tasksExample, setTasksExample] = useState<TaskExample[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loadTasksExample = async () => {
    try {
      setIsLoading(true);
      await delay();
      setTasksExample([...taskExampleData]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void loadTasksExample();
  }, []);

  return (
    <main className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Tarefas</h1>
        <Link to="/">
          <Button variant="neutral" className="gap-2">
            <ArrowLeftIcon className="h-4 w-4" />
            Voltar
          </Button>
        </Link>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400">
        Pronto xandão a página está buscando o dummy com{" "}
        <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">useState</code> +{" "}
        <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">useEffect</code>  sem o service e
        sem React Query.
      </p>

      {isLoading ? (
        <div className="flex h-full items-center justify-center gap-1">
          <Loader2 className="h-4 w-4 animate-spin" />
          <p className="text-gray-500">Carregando...</p>
        </div>
      ) : tasksExample.length === 0 ? (
        <div className="flex h-full items-center justify-center">
          <p className="text-gray-500">Nenhuma tarefa encontrada</p>
        </div>
      ) : (
        <TaskListExample tasksExample={tasksExample} />
      )}
    </main>
  );
}