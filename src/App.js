import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <h1>Welcome to vercel.breger.com</h1>
      <h2>
        Testing deployment to Vercel.
      </h2>
      <p>
        Example by Ron Breger
        <hr></hr>
        Deployed to Vercel via GitHub.
      </p>
      <br />
      <h2>The date/time in UTC:</h2>
      <p>{date ? date : 'Loading date...'}</p>
    </main>
  );
}

export default App;
