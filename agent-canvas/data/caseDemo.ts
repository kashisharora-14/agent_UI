import type { CaseData } from '@/types/case';

// Demo-only source. Replace this loader with the case/agent API when the integration is ready.
export const agentAnalysisCaseDemo: CaseData = {
  case: { id: '8402', title: 'Operation Shadow Network', status: 'active', priority: 'critical', assignedTo: 'Inspector R. Mehta', filedDate: '03/03/2026', summary: 'Coordinated bank heist at Central Bank, Sector 15. The demo graph contains the case entities that agent findings reference.' },
  dataSources: [
    { id: 'cdr', type: 'cdr', label: 'Call Detail Records', uploadedAt: '03/05 14:20', status: 'processed', recordCount: 847, fileName: 'cdr_vance_carter.xlsx' },
    { id: 'ipdr', type: 'idpr', label: 'IPDR / Internet Records', uploadedAt: '03/05 14:25', status: 'processed', recordCount: 193, fileName: 'ip_sessions_march.csv' },
    { id: 'bank', type: 'bank', label: 'Bank Transactions', uploadedAt: '03/06 09:15', status: 'processed', recordCount: 132, fileName: 'bank_meridian_holdings.csv' },
    { id: 'tower', type: 'location', label: 'Tower + IMEI Dumps', uploadedAt: '03/07 08:00', status: 'processed', recordCount: 64, fileName: 'tower_imei_dump.csv' },
    { id: 'forensic', type: 'forensic', label: 'Digital Forensic Logs', uploadedAt: '03/08 16:00', status: 'processed', recordCount: 42, fileName: 'device_extraction_report.json' },
  ],
  entities: [], relationships: [], timeline: [],
};

export function fetchAgentAnalysisCase(): Promise<CaseData> {
  return new Promise((resolve) => window.setTimeout(() => resolve(agentAnalysisCaseDemo), 180));
}
