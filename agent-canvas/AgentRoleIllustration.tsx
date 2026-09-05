import type { AgentResult } from './data/agentResults';

interface Props { agent: AgentResult; className?: string }

const roleConfig = (domain: string) => {
  const value = domain.toLowerCase();
  if (value.includes('judge')) return { bg: '#eef2ff', accent: '#4f46e5', mark: '⚖', label: 'J' };
  if (value.includes('prosecutor')) return { bg: '#f5f3ff', accent: '#9333ea', mark: '§', label: 'P' };
  if (value.includes('defense')) return { bg: '#fdf2f8', accent: '#db2777', mark: '⚔', label: 'D' };
  if (value.includes('forensic')) return { bg: '#ecfeff', accent: '#0891b2', mark: '⌕', label: 'F' };
  if (value.includes('financial')) return { bg: '#ecfdf5', accent: '#059669', mark: '$', label: '$' };
  if (value.includes('telecom')) return { bg: '#fff7ed', accent: '#d97706', mark: '◉', label: 'T' };
  if (value.includes('chronologist')) return { bg: '#eff6ff', accent: '#2563eb', mark: '◷', label: 'C' };
  if (value.includes('auditor')) return { bg: '#f0fdf4', accent: '#16a34a', mark: '✓', label: 'A' };
  if (value.includes('intelligence')) return { bg: '#f5f3ff', accent: '#7c3aed', mark: '⌁', label: 'I' };
  return { bg: '#eff6ff', accent: '#2563eb', mark: '✦', label: 'I' };
};

export function AgentRoleIllustration({ agent, className = '' }: Props) {
  const config = roleConfig(agent.domain);
  return <svg className={`agent-role-illustration ${className}`} viewBox="0 0 100 100" role="img" aria-label={`${agent.domain} illustration`} xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50" fill={config.bg} />
    <path d="M22 89c2-17 13-27 28-27s26 10 28 27" fill={config.accent} opacity=".88" />
    <circle cx="50" cy="42" r="17" fill="#f1c7a6" />
    <path d="M33 40c1-14 8-21 18-21 11 0 17 8 17 20-6-5-12-8-19-8-5 0-10 3-16 9Z" fill="#26364a" />
    <path d="M40 48c3 3 7 4 10 4s7-1 10-4" fill="none" stroke="#b66f5d" strokeWidth="2" strokeLinecap="round" />
    <circle cx="44" cy="41" r="2" fill="#26364a" /><circle cx="57" cy="41" r="2" fill="#26364a" />
    <circle cx="78" cy="23" r="15" fill={config.accent} stroke="#fff" strokeWidth="3" />
    <text x="78" y="29" textAnchor="middle" fill="#fff" fontSize="17" fontWeight="800" fontFamily="Arial, sans-serif">{config.mark}</text>
    <text x="50" y="84" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="800" letterSpacing="1" fontFamily="Arial, sans-serif">{config.label}</text>
  </svg>;
}
