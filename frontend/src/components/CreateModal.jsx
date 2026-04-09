import { useState } from 'react';
import styles from './CreateModal.module.css';

function CreateModal({ onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: '',
    stage: 'Applying Period',
    appliedDate: '',
    overallScore: 0,
    isReferred: false,
    hasAssessment: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) return alert("Name is required!");
    
    onSave(formData);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalCard}>
        <div className={styles.modalHeader}>
          <h2>Add New Candidate</h2>
          <button className={styles.closeBtn} onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit} className={styles.modalBody}>
          <div className={styles.inputGroup}>
            <label>Full Name</label>
            <input 
              type="text" 
              required
              placeholder="e.g. Sarah Connor"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>Pipeline Stage</label>
              <select 
                value={formData.stage}
                onChange={(e) => setFormData({...formData, stage: e.target.value})}
              >
                <option value="Applying Period">Applying Period</option>
                <option value="Screening">Screening</option>
                <option value="Interview">Interview</option>
                <option value="Test">Test</option>
              </select>
            </div>

            <div className={styles.inputGroup}>
              <label>Application Date</label>
              <input 
                type="text" 
                placeholder="e.g. 10 Apr, 2026"
                value={formData.appliedDate}
                onChange={(e) => setFormData({...formData, appliedDate: e.target.value})}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>Overall Score</label>
              <input 
                type="number" 
                step="0.1" 
                max="5"
                value={formData.overallScore}
                onChange={(e) => setFormData({...formData, overallScore: parseFloat(e.target.value)})}
              />
            </div>
            
            <div className={styles.checkboxGroup}>
              <label>
                <input 
                  type="checkbox" 
                  checked={formData.isReferred}
                  onChange={(e) => setFormData({...formData, isReferred: e.target.checked})}
                />
                Is Referred?
              </label>
              <label>
                <input 
                  type="checkbox" 
                  checked={formData.hasAssessment}
                  onChange={(e) => setFormData({...formData, hasAssessment: e.target.checked})}
                />
                Requires Assessment?
              </label>
            </div>
          </div>

          <div className={styles.modalFooter}>
            <button type="button" className={styles.cancelBtn} onClick={onClose}>Cancel</button>
            <button type="submit" className={styles.saveBtn}>Create Candidate</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateModal;