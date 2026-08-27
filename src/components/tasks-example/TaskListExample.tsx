import {TaskExample} from "@/types/task-example.types";
import TaskCardExample from "@/components/tasks-example/TaskCardExample";

interface TaskListExampleProps {
  tasksExample: TaskExample[];
}

export default function TaskListExample({ tasksExample }: TaskListExampleProps) {
  return (
    <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Lista de Tarefas</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {tasksExample.map((taskExample) => (
          <TaskCardExample key={taskExample.id} task={taskExample} />
        ))}
      </div>
    </div>
  );
}