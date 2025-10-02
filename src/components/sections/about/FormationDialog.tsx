import { FormationData } from "./types";

interface FormationDialogProps {
  data: FormationData;
}

export function FormationDialog({ data }: FormationDialogProps) {
  const renderLabel = (text: string) => (
    <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      {text}:
    </span>
  );

  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="space-y-3">
        <p>
          {renderLabel("Modalidade")} {data.mode}
        </p>
        <p>
          {renderLabel("Curso")} {data.course}
        </p>
        <p>
          {renderLabel("Instituição")} {data.institution}
        </p>
      </div>
      <div className="space-y-3">
        <p>
          {renderLabel("Período")} {data.start} - {data.end}
        </p>
        <p>
          {renderLabel("Período Atual")} {data.currentPeriod}
        </p>
        <p>
          {renderLabel("Status")}{" "}
          <span className="text-green-400">{data.status}</span>
        </p>
      </div>
    </div>
  );
}
