export interface Note {
  id: string;
  title: string;
  done: boolean;
}

export interface CreateNoteDto {
  title: string;
}

export interface UpdateNoteDto {
  title?: string;
  done?: boolean;
}
