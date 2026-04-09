import styles from './KanbanBoard.module.css';
import CandidateCard from './CandidateCard';

const STAGES = ["Applying Period", "Screening", "Interview", "Test"];

const getStageColor = (stage) => {
  switch (stage) {
    case "Applying Period": return { bg: '#ffedd5', text: '#ea580c' };
    case "Screening": return { bg: '#f3e8ff', text: '#9333ea' }; 
    case "Interview": return { bg: '#dbeafe', text: '#2563eb' }; 
    case "Test": return { bg: '#ccfbf1', text: '#0d9488' }; 
    default: return { bg: '#f1f5f9', text: '#475569' };
  }
};

function KanbanBoard({ candidates, onMoveCandidate }) {
  return (
    <div className={styles.boardContainer}>
      {STAGES.map((stage) => {
        const columnCandidates = candidates.filter(c => c.stage === stage);
        const colors = getStageColor(stage);
        
        return (
          <div key={stage} className={styles.column}>
            <div className={styles.columnHeader}>
              <h3 style={{ 
                backgroundColor: colors.bg, 
                color: colors.text, 
                padding: '4px 12px', 
                borderRadius: '16px',
                textTransform: 'none',
                fontWeight: '600'
              }}>
                {stage}
              </h3>
              <span className={styles.countBadge}>{columnCandidates.length}</span>
            </div>
            
            <div className={styles.cardList}>
              {columnCandidates.map(candidate => (
                <CandidateCard 
                  key={candidate.id} 
                  candidate={candidate} 
                  onMoveCandidate={onMoveCandidate} 
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default KanbanBoard;