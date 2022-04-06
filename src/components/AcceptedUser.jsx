import { Box } from '@mui/system';
import Table from './Table';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useCandidatesState } from '../context/CandidatesState';

function AcceptedUser() {
  const { accepted } = useCandidatesState();

  return (
    <Box>
      <Table
        rows={accepted}
        name={'Accepted Candidates'}
        removeIcon={<HighlightOffIcon style={{ fill: 'red' }} />}
      />
    </Box>
  );
}

export default AcceptedUser;
