import { createContext, useContext, useEffect, useState } from 'react';
import { users } from '../utils/helper';

export const CandidatesContext = createContext();

export function CandidatesProvider({ children }) {
  const [candidates, setCandidates] = useState(users);
  const [accepted, setAccepted] = useState([]);
  const [rejected, setRejected] = useState([]);

  return (
    <CandidatesContext.Provider
      value={{
        candidates,
        setCandidates,
        accepted,
        setAccepted,
        rejected,
        setRejected,
      }}
    >
      {children}
    </CandidatesContext.Provider>
  );
}

export const useCandidatesState = () => {
  return useContext(CandidatesContext);
};
