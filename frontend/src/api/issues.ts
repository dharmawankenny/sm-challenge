const API_BASE_URL = 'http://localhost:4000/api';

export interface Issue {
  id: string,
  title: string,
  description: string,
}

export type NewIssue = Omit<Issue, 'id'>;

export async function getAllIssues(): Promise<Issue[]> {
  const res = await fetch(`${API_BASE_URL}/issues`);
  return res.json();
}

export async function getIssue(id: string): Promise<Issue> {
  const res = await fetch(`${API_BASE_URL}/issues/${id}`);
  return res.json();
}

export async function postIssue(issue: NewIssue): Promise<Issue> {
  const res = await fetch(`${API_BASE_URL}/issues`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(issue),
  });
  return res.json();
}

export async function putIssues(issue: Issue): Promise<Issue> {
  const res = await fetch(`${API_BASE_URL}/issues/${issue.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(issue),
  });
  return res.json();
}

export async function deleteIssue(id: string): Promise<string> {
  const res = await fetch(`${API_BASE_URL}/issues/${id}`, {
    method: 'DELETE',
  });
  return res.json();
}
