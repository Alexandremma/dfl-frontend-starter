import { Task, TaskStatus } from "@/types/task.types";
import { corDaPrioridade } from "@/utils/task.utils";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

interface TaskCardProps {
  task: Task;
  onConcluir: () => void;
  onExcluir: () => void;
}

export default function TaskCard({ task, onConcluir, onExcluir }: TaskCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-gray-100">
          {task.title}
          {task.status === TaskStatus.Feito && (
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          )}
        </h3>
        <span
          className="rounded-full px-2 py-1 text-xs font-semibold text-white"
          style={{ backgroundColor: corDaPrioridade(task.priority) }}
        >
          {task.priority}
        </span>
      </div>

      <p className="text-sm text-gray-500">{task.description}</p>
      <p className="mt-2 text-xs text-gray-400">Status: {task.status}</p>

      <div className="mt-3 flex gap-2">
        <Button onClick={onConcluir}>Avançar status</Button>
        <Button variant="neutral" onClick={onExcluir}>Excluir</Button>
      </div>
    </div>
  );
}