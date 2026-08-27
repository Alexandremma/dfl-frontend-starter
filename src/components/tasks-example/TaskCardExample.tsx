import {TaskExample} from "@/types/task-example.types";

interface TaskCardExampleProps {
  task: TaskExample;
}

export default function TaskCardExample({ task }: TaskCardExampleProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
        Título: {task.title}
      </h3>
      <p className="text-sm text-gray-500">
        Status: {task.done ? "Concluída" : "Pendente"}
      </p>
    </div>
  );
}