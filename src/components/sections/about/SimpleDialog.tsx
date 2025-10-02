import { SimpleData } from "./types";

interface SimpleDialogProps {
  data: SimpleData;
}

export function SimpleDialog({ data }: SimpleDialogProps) {
  return <p className="text-slate-300">{data.description}</p>;
}
