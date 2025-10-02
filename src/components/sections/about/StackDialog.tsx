import { StackData } from "./types";

interface StackDialogProps {
  data: StackData;
}

export function StackDialog({ data }: StackDialogProps) {
  const renderLabel = (text: string) => (
    <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      {text}:
    </span>
  );

  return (
    <div className="space-y-4">
      {/* Dois dialogs lado a lado */}
      <div className="grid grid-cols-2 gap-4">
        {/* Dialog Frontend */}
        <div className="glass-card border border-slate-700/50 rounded-lg p-4 bg-slate-900/50">
          <h4 className="text-lg font-semibold text-blue-400 mb-3 text-center border-b border-blue-400/30 pb-2">
            Frontend
          </h4>
          <div className="space-y-2">
            <p className="text-sm">
              {renderLabel("Linguagens")} {data.frontend.language}
            </p>
            <p className="text-sm">
              {renderLabel("Frameworks")} {data.frontend.framework}
            </p>
            <p className="text-sm">
              {renderLabel("Estilização")} {data.frontend.styling}
            </p>
            <p className="text-sm">
              {renderLabel("Deploy")} {data.frontend.tools}
            </p>
          </div>
        </div>

        {/* Dialog Backend */}
        <div className="glass-card border border-slate-700/50 rounded-lg p-4 bg-slate-900/50">
          <h4 className="text-lg font-semibold text-purple-400 mb-3 text-center border-b border-purple-400/30 pb-2">
            Backend
          </h4>
          <div className="space-y-2">
            <p className="text-sm">
              {renderLabel("Linguagens")} {data.backend.language}
            </p>
            <p className="text-sm">
              {renderLabel("Frameworks")} {data.backend.framework}
            </p>
            <p className="text-sm">
              {renderLabel("APIs")} {data.backend.api}
            </p>
            <p className="text-sm">
              {renderLabel("Banco de Dados")} {data.backend.database}
            </p>
            <p className="text-sm">
              {renderLabel("Ferramentas")} {data.backend.tools}
            </p>
            <p className="text-sm">
              {renderLabel("Infraestrutura")} {data.backend.infra}
            </p>
          </div>
        </div>
      </div>

      {/* Área de descrição embaixo */}
      <div className="glass-card border border-slate-700/50 rounded-lg p-3 bg-slate-900/30 h-16 flex items-center">
        <p className="text-slate-300 text-sm leading-relaxed">
          {data.description}
        </p>
      </div>
    </div>
  );
}
