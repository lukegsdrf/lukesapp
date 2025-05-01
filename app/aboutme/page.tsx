// /app/aboutme/page.tsx

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import './Page.css';

const AboutMe: React.FC = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Me</h1>
      <p style={styles.text}>
        Hello! I'm Luke, a passionate web developer who loves building interactive and user-friendly websites and applications.
      </p>
      <p style={styles.text}>
        In my free time, I like to read, draw, and explore new places.
      </p>
      <button style={styles.button} onClick={handleGoHome}>
        Go Home
      </button>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '2rem',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    marginBottom: '1rem',
  },
  button: {
    marginTop: '2rem',
    padding: '0.8rem 1.6rem',
    fontSize: '1rem',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default AboutMe;
