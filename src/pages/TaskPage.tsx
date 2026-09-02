import TaskList from "@/components/tasks/TaskList";
import { Button } from "@/components/ui/Button";
import { useTasks } from "@/hooks/UseTask";
import { ArrowLeftIcon, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function TaskPage() {
  const { tasks, isLoading, cycleStatus, removeTask } = useTasks();

  return (
    <main className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Minhas Tarefas
        </h1>
        <Link to="/">
          <Button variant="neutral" className="gap-2">
            <ArrowLeftIcon className="h-4 w-4" />
            Voltar
          </Button>
        </Link>
      </div>

      {isLoading ? (
        <div className="flex h-full items-center justify-center gap-1">
          <Loader2 className="h-4 w-4 animate-spin" />
          <p className="text-gray-500">Carregando...</p>
        </div>
      ) : (
        <TaskList tasks={tasks} onConcluir={cycleStatus} onExcluir={removeTask} />
      )}
    </main>
  );
}