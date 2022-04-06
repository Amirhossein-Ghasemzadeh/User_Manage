export default function CandidatesReducer(state, action) {
  switch (action.type) {
    case 'FETCH_CANDINATES':
      return {
        ...state,
        all: action.payload,
      };

    case 'FETCH_TECHNOLOGIES':
      return {
        ...state,
        technologies: action.payload,
      };
    case 'ACCEPT_USER':
      return {
        ...state,
        all: state.all.filter(
          (candidate) => candidate.candidateId !== action.payload.id
        ),
        accepted: [...state.accepted, action.payload],
      };
    case 'REJECT_USER':
      return {
        ...state,
        all: state.all.filter(
          (candidate) => candidate.candidateId !== action.payload.id
        ),
        rejected: [...state.rejected, action.payload],
      };
    case 'REMOVE_ACCEPTED_USER':
      return {
        ...state,
        accepted: state.accepted.filter(
          (accept) => accept.id !== action.payload
        ),
      };

    case 'REMOVE_REJECTED_USER':
      return {
        ...state,
        rejected: state.rejected.filter(
          (rejected) => rejected.id !== action.payload
        ),
      };
    default:
      return { state };
  }
}
