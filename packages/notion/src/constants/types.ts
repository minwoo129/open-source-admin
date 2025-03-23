export type NotionDBResponseType<T extends Object> = {
  createdAt: string;
  updatedAt: string;
  documentId: string;
} & T;

export type NotionDBDateType = {
  start: string | null;
  end: string | null;
  timeZone: string | null;
};
