import { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';

function App() {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5001/api/candidates')
      .then((response) => response.json())
      .then((data) => {
        setCandidates(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ padding: '30px', fontFamily: 'Inter, sans-serif', backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <h1 style={{ marginBottom: '30px', color: '#111827' }}>ZeloraTech Recruitment Pipeline</h1>
      
      {loading ? (
        <p>Loading candidates from backend...</p>
      ) : (
        <KanbanBoard candidates={candidates} />
      )}
    </div>
  );
}

export default App;