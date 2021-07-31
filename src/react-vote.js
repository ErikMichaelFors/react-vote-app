import React from 'react';
const { useState } = wp.element;

export const Votes = () => {
    const [votes, setVotes] = useState(0);
    const addVote = () => {
      setVotes(votes + 1);
    };
    return (
      <div>
        <h2>{votes} Votes by Michael</h2>
        <p>
          <button className="testing" onClick={addVote}>Vote!</button>
        </p>
      </div>
    );
  };