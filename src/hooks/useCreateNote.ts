import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "@/lib/queryKeys";
import { createNote } from "@/services/notes.service";

export function useCreateNote() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.notes.all });
    },
  });
}
