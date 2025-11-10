// Get API URL from environment variable
// NEXT_PUBLIC_ prefix makes it available in the browser
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

const getApiUrl = () => {
  return API_URL;
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
