export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  status: TaskStatus;
  createdAt: Date;
  updatedAt: Date;
  user: string;
}

export enum TaskStatus {
  A_fazer = "A fazer",
  Fazendo = "Fazendo",
  Em_Revisao = "Em revisão",
  Feito = "Feito",
}

export enum Priority {
  BAIXA = "baixa",
  MEDIA = "média",
  ALTA = "alta",
}