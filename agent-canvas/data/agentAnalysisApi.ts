import type { AgentResult } from './agentResults';
import bundledAnalysis from './8402.json';

export interface AgentAnalysisResponse {
  case: { id: string; title: string; primarySuspect: string; riskScore: number; summary: string; insight: string; reasoning: string; activitySeries: { label: string; event: string; value: number }[]; metrics: { agentsCompleted: number; evidenceItems: number; entitiesIdentified: number; overallConfidence: number } };
  agents: AgentResult[];
}

function portraitForAgent(id: string, fallback: string) {
  const imageNumber = Number.parseInt(id, 10);
  if (id === '01') return '/images/1.png';
  if (id === '02') return '/images/2.png';
  if (id === '03') return '/images/3.png';
  if (id === '04') return '/images/finance.png';
  if (id === '05') return '/images/telecom.png';
  if (id === '07') return '/images/law.png';
  if (id === '09') return '/images/kyc.png';
  if (id === '06') return '/images/socialmedia.png';
  if (id === '08') return '/images/police.png';
  if (id === '10') return '/images/10thagent.png';
  return Number.isNaN(imageNumber) ? fallback : `/images/${imageNumber}.png`;
}

export async function fetchAgentAnalysisResults(caseId = '8402'): Promise<AgentAnalysisResponse> {
  let data: AgentAnalysisResponse;
  try {
    const response = await fetch(`/api/agent-analysis/${caseId}.json`);
    if (!response.ok) throw new Error('API unavailable');
    data = await response.json() as AgentAnalysisResponse;
    if (!data.case || !Array.isArray(data.agents)) throw new Error('Invalid API response');
  } catch {
    data = bundledAnalysis as AgentAnalysisResponse;
  }
  return { ...data, agents: data.agents.map((agent) => ({ ...agent, imageUrl: portraitForAgent(agent.id, agent.imageUrl) })) };
}
