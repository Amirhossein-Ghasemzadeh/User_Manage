import React from 'react';
import { Box } from '@mui/system';
import Table from './Table';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useCandidatesState } from '../context/CandidatesState';

function AcceptedUser() {
  const { accepted } = useCandidatesState();

  return (
    <Box>
      <Table
        rows={accepted}
        name={'Accepted Candidates'}
        deletIcon={<DeleteOutlinedIcon style={{ fill: 'red' }} />}
      />
    </Box>
  );
}

export default AcceptedUser;
