import type { Note } from "@/types/note.types";

/** Array mutável em memória. O service grava aqui; o GET devolve uma cópia. */
export const notesData: Note[] = [
  { id: "1", title: "Revisar o card", done: true },
  { id: "2", title: "Separar service e hook", done: false },
];
