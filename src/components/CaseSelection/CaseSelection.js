import React, { useState } from 'react';
import './CaseSelection.css';

const cases = [
  { id: 1, name: 'Aluminum', color: 'Silver' },
  { id: 2, name: 'Titanium', color: 'Black' },
  { id: 3, name: 'Stainless Steel', color: 'Gold' }
];

const CaseSelection = ({ onCaseSelect }) => {
  const [selectedCase, setSelectedCase] = useState(null);

  const handleCaseClick = (selected) => {
    setSelectedCase(selected);
    onCaseSelect(selected);
  };

  return (
    <div className="case-grid">
      {cases.map((watchCase) => (
        <div
          key={watchCase.id}
          className={`case-item ${selectedCase?.id === watchCase.id ? 'selected' : ''}`}
          onClick={() => handleCaseClick(watchCase)}
        >
          <p>{watchCase.name}</p>
          <span>{watchCase.color}</span>
        </div>
      ))}
    </div>
  );
};

export default CaseSelection;