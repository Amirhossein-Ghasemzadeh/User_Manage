import { createContext, useEffect, useReducer, useContext } from 'react';
import CandidatesReducer from './CandidatesReducer';

const initialValue = {
  all: [],
  accepted: [],
  rejected: [],
  technologies: [],
};
export const CandidatesContext = createContext(initialValue);

export function CandidatesProvider({ children }) {
  const [state, dispatch] = useReducer(CandidatesReducer, initialValue);
  const acceptUser = function (candidate) {
    dispatch({ type: 'ACCEPT_USER', payload: candidate });
  };

  const rejectUser = function (candidate) {
    dispatch({ type: 'REJECT_USER', payload: candidate });
  };

  const removeFromAccepted = function (candidateId) {
    dispatch({ type: 'REMOVE_ACCEPTED_USER', payload: candidateId });
  };

  const removeFromRejected = function (candidateId) {
    dispatch({ type: 'REMOVE_REJECTED_USER', payload: candidateId });
  };
  const fetchCandidates = async () => {
    const res = await fetch('http://localhost:8000/users');
    const candidates = await res.json();
    dispatch({ type: 'FETCH_CANDINATES', payload: candidates });
  };

  const fetchTechnologies = async () => {
    const res = await fetch('http://localhost:8000/technologies');
    const technologies = await res.json();
    dispatch({ type: 'FETCH_TECHNOLOGIES', payload: technologies });
  };

  useEffect(() => {
    fetchCandidates();
    fetchTechnologies();
  }, []);

  return (
    <CandidatesContext.Provider
      value={{
        ...state,
        acceptUser,
        rejectUser,
        removeFromAccepted,
        removeFromRejected,
      }}
    >
      {children}
    </CandidatesContext.Provider>
  );
}

export const useCandidatesState = () => {
  return useContext(CandidatesContext);
};
