export interface CaseDataSource {
  id: string;
  type: string;
  label: string;
  uploadedAt: string;
  status: string;
  recordCount: number;
  fileName: string;
}

export interface CaseData {
  case: {
    id: string;
    title: string;
    status: string;
    priority: string;
    assignedTo: string;
    filedDate: string;
    summary: string;
  };
  dataSources: CaseDataSource[];
  entities: unknown[];
  relationships: unknown[];
  timeline: unknown[];
}
