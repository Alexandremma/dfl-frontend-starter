import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/lib/queryKeys";
import { updateNote } from "@/services/notes.service";
import type { UpdateNoteDto } from "@/types/note.types";

export function useUpdateNote() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, dto }: { id: string; dto: UpdateNoteDto }) => updateNote(id, dto),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.notes.all });
    },
  });
}
