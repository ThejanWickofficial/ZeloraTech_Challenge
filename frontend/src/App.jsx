import { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';

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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ stage: newStage }),
      });

      if (response.ok) {
        const updatedCandidate = await response.json();
        setCandidates((prevCandidates) =>
          prevCandidates.map((c) => (c.id === candidateId ? updatedCandidate : c))
        );
      }
    } catch (error) {
      console.error("Error updating candidate:", error);
    }
  };

  const handleAddCandidate = async (candidateName) => {
    const today = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    
    const newCandidateData = {
      name: candidateName,
      stage: "Applying Period",
      appliedDate: today,
      overallScore: 0, 
      isReferred: false,
      hasAssessment: false
    };

    try {
      const response = await fetch('http://localhost:5001/api/candidates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCandidateData),
      });

      if (response.ok) {
        const createdCandidate = await response.json();
        setCandidates((prev) => [...prev, createdCandidate]);
      }
    } catch (error) {
      console.error("Error creating candidate:", error);
    }
  };

  const handleDeleteCandidate = async (candidateId) => {
    if (!window.confirm("Are you sure you want to delete this candidate?")) return;

    try {
      const response = await fetch(`http://localhost:5001/api/candidates/${candidateId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setCandidates((prevCandidates) => prevCandidates.filter((c) => c.id !== candidateId));
      }
    } catch (error) {
      console.error("Error deleting candidate:", error);
    }
  };

  const handleUpdateCandidate = async (candidateId, updatedData) => {
    try {
      const response = await fetch(`http://localhost:5001/api/candidates/${candidateId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData), 
      });

      if (response.ok) {
        const updatedCandidate = await response.json();
        setCandidates((prevCandidates) =>
          prevCandidates.map((c) => (c.id === candidateId ? updatedCandidate : c))
        );
      } else {
        console.error("Failed to update candidate");
      }
    } catch (error) {
      console.error("Error updating candidate:", error);
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'Inter, sans-serif' }}>
      
      <Sidebar />

      <div style={{ marginLeft: '70px', width: '100%', display: 'flex', flexDirection: 'column' }}>
        
        <TopNav onAddCandidate={handleAddCandidate} />

        <div style={{ padding: '10px 30px 30px 30px' }}>
          {loading ? (
            <p>Loading candidates from backend...</p>
          ) : (
            <KanbanBoard 
                candidates={candidates} 
                onMoveCandidate={handleMoveCandidate} 
                onDeleteCandidate={handleDeleteCandidate}
                onUpdateCandidate={handleUpdateCandidate}
            />
          )}
        </div>

      </div>
    </div>
  );
}

export default App;