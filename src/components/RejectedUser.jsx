import { Box } from '@mui/system';
import Table from './Table';
import { useCandidatesState } from '../context/CandidatesState';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function RejectedUser() {
  const { rejected } = useCandidatesState();
  return (
    <Box>
      <Table
        rows={rejected}
        name={'Rejected Candidates'}
        removeIcon={<HighlightOffIcon style={{ fill: 'red' }} />}
      />
    </Box>
  );
}

export default RejectedUser;
