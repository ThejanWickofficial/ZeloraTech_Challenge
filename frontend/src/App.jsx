import { useState, useEffect } from 'react';

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
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>ZeloraTech Recruitment Pipeline</h1>
      
      {loading ? (
        <p>Loading candidates from backend...</p>
      ) : (
        <div>
          <h2>Raw Data Connection Test:</h2>
          <pre style={{ background: '#f4f4f4', padding: '10px', borderRadius: '5px' }}>
            {JSON.stringify(candidates, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;