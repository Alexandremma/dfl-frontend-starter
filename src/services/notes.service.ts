import { SIMULATED_API_DELAY_MS } from "@/constants/app.constants";
import { notesData } from "@/test-utils/notes.dummy";
import type { CreateNoteDto, Note, UpdateNoteDto } from "@/types/note.types";

const delay = () => new Promise((resolve) => setTimeout(resolve, SIMULATED_API_DELAY_MS));

export async function getNotes(): Promise<Note[]> {
  await delay();
  return [...notesData];
}

export async function createNote(dto: CreateNoteDto): Promise<Note> {
  await delay();
  const title = dto.title.trim();
  if (!title) throw new Error("Título da nota é obrigatório");

  const note: Note = {
    id: String(Date.now()),
    title,
    done: false,
  };
  notesData.unshift(note);
  return { ...note };
}

export async function updateNote(id: string, dto: UpdateNoteDto): Promise<Note> {
  await delay();
  const index = notesData.findIndex((note) => note.id === id);
  if (index === -1) throw new Error(`Nota ${id} não encontrada`);

  notesData[index] = { ...notesData[index], ...dto };
  return { ...notesData[index] };
}

export async function deleteNote(id: string): Promise<void> {
  await delay();
  const index = notesData.findIndex((note) => note.id === id);
  if (index === -1) throw new Error(`Nota ${id} não encontrada`);
  notesData.splice(index, 1);
}
