import type { Note } from "@/types/note.types";

interface NoteCardProps {
  note: Note;
  isUpdating: boolean;
  isDeleting: boolean;
  onToggleDone: (note: Note) => void;
  onDelete: (id: string) => void;
}

export function NoteCard({ note, isUpdating, isDeleting, onToggleDone, onDelete }: NoteCardProps) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{note.title}</h3>
      <p className="mt-1 text-sm text-gray-500">{note.done ? "Feita" : "A fazer"}</p>

      <div className="mt-4 flex gap-2">
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-2 text-sm text-white disabled:opacity-50"
          disabled={isUpdating || isDeleting}
          onClick={() => onToggleDone(note)}
        >
          {note.done ? "Reabrir" : "Concluir"}
        </button>
        <button
          type="button"
          className="rounded border border-gray-300 px-3 py-2 text-sm text-gray-700 disabled:opacity-50 dark:border-gray-600 dark:text-gray-200"
          disabled={isDeleting || isUpdating}
          onClick={() => onDelete(note.id)}
        >
          {isDeleting ? "Excluindo…" : "Excluir"}
        </button>
      </div>
    </article>
  );
}
