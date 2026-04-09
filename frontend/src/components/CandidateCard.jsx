import { useState } from 'react';
import styles from './CandidateCard.module.css';

const getAvatarColor = (name) => {
  const colors = ['#f59e0b', '#8b5cf6', '#10b981', '#ef4444', '#3b82f6'];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};

function CandidateCard({ candidate, onMoveCandidate, onDeleteCandidate, onUpdateCandidate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: candidate.name,
    appliedDate: candidate.appliedDate,
    overallScore: candidate.overallScore,
    isReferred: candidate.isReferred
  });

  const avatarBg = getAvatarColor(candidate.name);

  const handleSave = () => {
    const finalData = {
      ...formData,
      overallScore: parseFloat(formData.overallScore) || 0
    };
    onUpdateCandidate(candidate.id, finalData);
    setIsEditing(false); 
  };

  if (isEditing) {
    return (
      <div className={styles.card}>
        <div className={styles.editForm}>
          <input 
            type="text" 
            value={formData.name} 
            onChange={(e) => setFormData({...formData, name: e.target.value})} 
            placeholder="Candidate Name"
            className={styles.editInput}
          />
          <input 
            type="text" 
            value={formData.appliedDate} 
            onChange={(e) => setFormData({...formData, appliedDate: e.target.value})} 
            placeholder="e.g. 10 Apr, 2026"
            className={styles.editInput}
          />
          <div className={styles.editRow}>
            <input 
              type="number" 
              step="0.1" 
              max="5"
              value={formData.overallScore} 
              className={styles.editInput}
              style={{ width: '80px' }}
              onChange={(e) => {
                let val = e.target.value;
                if (val === "") {
                  setFormData({ ...formData, overallScore: "" });
                  return;
                }
                if (parseFloat(val) > 5) {
                  val = "5";
                  e.target.value = "5"; 
                } else if (parseFloat(val) < 0) {
                  val = "0";
                  e.target.value = "0";
                }
                setFormData({ ...formData, overallScore: val });
              }} 
            />
            <label className={styles.checkboxLabel}>
              <input 
                type="checkbox" 
                checked={formData.isReferred} 
                onChange={(e) => setFormData({...formData, isReferred: e.target.checked})} 
              />
              Referred
            </label>
          </div>
          
          <div className={styles.editActions}>
            <button className={styles.saveBtn} onClick={handleSave}>Save</button>
            <button className={styles.cancelBtn} onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatar} style={{ backgroundColor: avatarBg, color: 'white' }}>
           {candidate.name.charAt(0)}
        </div>
        <div className={styles.info}>
          <h4>{candidate.name}</h4>
          <p>Applied at {candidate.appliedDate}</p>
        </div>
        
        <div className={styles.menuContainer}>
          <button className={styles.menuBtn} onClick={() => setIsMenuOpen(!isMenuOpen)}>...</button>
          
          {isMenuOpen && (
            <div className={styles.dropdownMenu}>
              <button onClick={() => { setIsEditing(true); setIsMenuOpen(false); }}>
                ✏️ Edit Details
              </button>
              <button 
                className={styles.deleteBtn}
                onClick={() => { onDeleteCandidate(candidate.id); setIsMenuOpen(false); }}
              >
                🗑️ Delete
              </button>
            </div>
          )}
        </div>
      </div>
      
      <div className={styles.footer}>
        <span className={styles.score}>⭐ {candidate.overallScore} Overall</span>
        {candidate.isReferred && <span className={styles.referred}>Referred</span>}
      </div>

      <div className={styles.moveAction}>
        <select 
          value={candidate.stage} 
          onChange={(e) => onMoveCandidate(candidate.id, e.target.value)}
          className={styles.moveSelect}
        >
          <option value="Applying Period">Applying Period</option>
          <option value="Screening">Screening</option>
          <option value="Interview">Interview</option>
          <option value="Test">Test</option>
        </select>
      </div>
    </div>
  );
}

export default CandidateCard;