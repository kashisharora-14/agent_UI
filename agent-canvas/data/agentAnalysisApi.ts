import type { AgentResult } from './agentResults';
import bundledAnalysis from './8402.json';

export interface AgentAnalysisResponse {
  case: { id: string; title: string; primarySuspect: string; riskScore: number; summary: string; insight: string; reasoning: string; activitySeries: { label: string; event: string; value: number }[]; metrics: { agentsCompleted: number; evidenceItems: number; entitiesIdentified: number; overallConfidence: number } };
  agents: AgentResult[];
}

function portraitForAgent(id: string, fallback: string) {
  const imageNumber = Number.parseInt(id, 10);
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
