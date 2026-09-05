import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AgentAnalysisDemo } from './agent-canvas/AgentAnalysisDemo';
import 'reactflow/dist/style.css';
import './agent-canvas/agent-analysis-demo.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AgentAnalysisDemo onClose={() => undefined} />
  </StrictMode>,
);
