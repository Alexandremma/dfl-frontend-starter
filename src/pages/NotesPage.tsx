import { useState } from "react";
import { NoteList } from "@/components/notes";
import { ErrorState, LoadingState } from "@/components/ui";
import { useCreateNote } from "@/hooks/useCreateNote";
import { useDeleteNote } from "@/hooks/useDeleteNote";
import { useGetNotes } from "@/hooks/useGetNotes";
import { useUpdateNote } from "@/hooks/useUpdateNote";
import type { Note } from "@/types/note.types";

/**
 * Exemplo pronto da aula de React Query.
 * Parte 1: useGetNotes (useQuery).
 * Parte 2: useCreateNote / useUpdateNote / useDeleteNote (useMutation).
 * O card não importa service. A page não importa dummy.
 */
export default function NotesPage() {
  const { data: notes = [], isPending, isError, refetch } = useGetNotes();
  const createNote = useCreateNote();
  const updateNote = useUpdateNote();
  const deleteNote = useDeleteNote();
  const [title, setTitle] = useState("");

  function handleCreate(event: React.FormEvent) {
    event.preventDefault();
    createNote.reset();
    createNote.mutate(
      { title },
      {
        onSuccess: () => setTitle(""),
      },
    );
  }

  function handleToggleDone(note: Note) {
    updateNote.mutate({ id: note.id, dto: { done: !note.done } });
  }

  function handleDelete(id: string) {
    if (!confirm("Excluir esta nota?")) return;
    deleteNote.mutate(id);
  }

  return (
    <main className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Notas</h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Mesmo CRUD de <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">/filmes</code>,
          agora com React Query. Compare{" "}
          <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">useMovies</code> com{" "}
          <code className="rounded bg-gray-100 px-1 dark:bg-gray-800">useGetNotes</code>.
        </p>
      </header>

      <form
        onSubmit={handleCreate}
        className="flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-4 sm:flex-row dark:border-gray-700 dark:bg-gray-900"
      >
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Nova nota"
          className="flex-1 rounded border border-gray-300 px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800"
        />
        <button
          type="submit"
          className="rounded bg-blue-600 px-3 py-2 text-sm text-white disabled:opacity-50"
          disabled={createNote.isPending || !title.trim()}
        >
          {createNote.isPending ? "Salvando…" : "Adicionar"}
        </button>
      </form>
      {createNote.isError && (
        <p className="text-sm text-red-600">Não foi possível criar a nota.</p>
      )}

      {isPending && <LoadingState />}
      {isError && <ErrorState onRetry={() => refetch()} />}
      {!isPending && !isError && (
        <NoteList
          notes={notes}
          updatingId={updateNote.isPending ? updateNote.variables?.id : undefined}
          deletingId={deleteNote.isPending ? deleteNote.variables : undefined}
          onToggleDone={handleToggleDone}
          onDelete={handleDelete}
        />
      )}
    </main>
  );
}
