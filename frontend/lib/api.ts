// Use window.location to dynamically determine the API URL
// This works both in Docker and local development
const getApiUrl = () => {
  if (typeof window !== 'undefined') {
    // Client-side: use localhost with port 4000
    return 'http://localhost:4000';
  }
  // Server-side: use environment variable
  return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
};

export const api = {
  async createNote(title: string, content: string) {
    const response = await fetch(`${getApiUrl()}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });
    if (!response.ok) throw new Error('Failed to create note');
    return response.json();
  },

  async getNotes() {
    const response = await fetch(`${getApiUrl()}/notes`);
    if (!response.ok) throw new Error('Failed to fetch notes');
    return response.json();
  },

  async getAISummary(text: string) {
    const response = await fetch(`${getApiUrl()}/ai-summary`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
    if (!response.ok) throw new Error('Failed to generate summary');
    return response.json();
  },
};
