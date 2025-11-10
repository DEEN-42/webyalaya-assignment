'use client';

import { useState, useEffect } from 'react';
import { Note, AISummaryResponse } from '@/types/note';
import { api } from '@/lib/api';
import styles from './page.module.css';

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [summaries, setSummaries] = useState<{ [key: string]: AISummaryResponse }>({});
  const [loadingSummary, setLoadingSummary] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const data = await api.getNotes();
      setNotes(data);
    } catch (error) {
      console.error('Error fetching notes:', error);
      alert('Failed to fetch notes. Make sure the backend is running.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert('Please fill in both title and content');
      return;
    }

    setLoading(true);
    try {
      await api.createNote(title, content);
      setTitle('');
      setContent('');
      await fetchNotes();
    } catch (error) {
      console.error('Error creating note:', error);
      alert('Failed to create note');
    } finally {
      setLoading(false);
    }
  };

  const handleGetSummary = async (noteId: string, noteContent: string) => {
    setLoadingSummary(prev => ({ ...prev, [noteId]: true }));
    try {
      const summary = await api.getAISummary(noteContent);
      setSummaries(prev => ({ ...prev, [noteId]: summary }));
    } catch (error) {
      console.error('Error generating summary:', error);
      alert('Failed to generate summary');
    } finally {
      setLoadingSummary(prev => ({ ...prev, [noteId]: false }));
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>📝 Notes App with AI Summary</h1>
        
        <div className={styles.formSection}>
          <h2>Create a New Note</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              placeholder="Note Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={styles.input}
              disabled={loading}
            />
            <textarea
              placeholder="Note Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className={styles.textarea}
              rows={5}
              disabled={loading}
            />
            <button 
              type="submit" 
              className={styles.button}
              disabled={loading}
            >
              {loading ? 'Creating...' : 'Create Note'}
            </button>
          </form>
        </div>

        <div className={styles.notesSection}>
          <h2>Your Notes ({notes.length})</h2>
          {notes.length === 0 ? (
            <p className={styles.emptyState}>No notes yet. Create your first note above!</p>
          ) : (
            <div className={styles.notesList}>
              {notes.map((note) => (
                <div key={note.id} className={styles.noteCard}>
                  <h3>{note.title}</h3>
                  <p className={styles.noteContent}>{note.content}</p>
                  <p className={styles.noteDate}>
                    Created: {new Date(note.createdAt).toLocaleString()}
                  </p>
                  
                  <button
                    onClick={() => handleGetSummary(note.id, note.content)}
                    className={styles.summaryButton}
                    disabled={loadingSummary[note.id]}
                  >
                    {loadingSummary[note.id] ? '⏳ Generating...' : '🤖 Get AI Summary'}
                  </button>

                  {summaries[note.id] && (
                    <div className={styles.summaryBox}>
                      <h4>AI Summary:</h4>
                      <p>{summaries[note.id].summary}</p>
                      <small>
                        Original: {summaries[note.id].originalLength} chars → 
                        Summary: {summaries[note.id].summaryLength} chars
                      </small>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
