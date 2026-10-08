import type { Note } from "@/types/note.types";
import { NoteCard } from "./NoteCard";

interface NoteListProps {
  notes: Note[];
  updatingId?: string;
  deletingId?: string;
  onToggleDone: (note: Note) => void;
  onDelete: (id: string) => void;
}

export function NoteList({ notes, updatingId, deletingId, onToggleDone, onDelete }: NoteListProps) {
  if (notes.length === 0) {
    return <p className="text-sm text-gray-500">Nenhuma nota encontrada.</p>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          isUpdating={updatingId === note.id}
          isDeleting={deletingId === note.id}
          onToggleDone={onToggleDone}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
