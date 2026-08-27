import { Priority } from "@/types/task.types";

export function corDaPrioridade(p: Priority): string {
  switch (p) {
    case Priority.ALTA:
      return "red";
    case Priority.MEDIA:
      return "yellow";
    case Priority.BAIXA:
      return "green";
  }
}