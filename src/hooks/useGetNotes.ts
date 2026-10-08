import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/lib/queryKeys";
import { getNotes } from "@/services/notes.service";

export function useGetNotes() {
  return useQuery({
    queryKey: queryKeys.notes.all,
    queryFn: getNotes,
  });
}
