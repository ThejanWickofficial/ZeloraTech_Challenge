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

  const handleMoveCandidate = async (candidateId, newStage) => {
    try {
      const response = await fetch(`http://localhost:5001/api/candidates/${candidateId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ stage: newStage }),
      });

      if (response.ok) {
        const updatedCandidate = await response.json();
        
        setCandidates((prevCandidates) =>
          prevCandidates.map((c) => (c.id === candidateId ? updatedCandidate : c))
        );
      } else {
        console.error("Failed to update candidate on the backend");
      }
    } catch (error) {
      console.error("Error updating candidate:", error);
    }
  };

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