import { Task, TaskStatus, Priority } from "@/types/task.types";

export const tasksDummyData: Task[] = [
  {
    id: "1",
    title: "Configurar ambiente do projeto",
    description: "Instalar dependências e rodar npm run dev",
    priority: Priority.ALTA,
    status: TaskStatus.A_fazer,
    createdAt: new Date("2026-07-01"),
    updatedAt: new Date("2026-07-01"),
    user: "Gabriel",
  },

  {
    id: "2",
    title: "Criar type Task",
    description: "Definir interface e enums de status/prioridade",
    priority: Priority.MEDIA,
    status: TaskStatus.Fazendo,
    createdAt: new Date("2026-07-02"),
    updatedAt: new Date("2026-07-03"),
    user: "Gabriel",
  },
  
  {
    id: "3",
    title: "Revisar PR do colega",
    description: "Conferir se o CreateTask está batendo com o type",
    priority: Priority.BAIXA,
    status: TaskStatus.Feito,
    createdAt: new Date("2026-06-28"),
    updatedAt: new Date("2026-06-30"),
    user: "Gabriel",
  },
];