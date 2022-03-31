import React from 'react';
import { Box } from '@mui/system';
import Table from './Table';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useCandidatesState } from '../context/CandidatesState';

function RejectedUser() {
  const { rejected } = useCandidatesState();

  return (
    <Box>
      <Table
        rows={rejected}
        name={'Rejected Candidates'}
        deletIcon={<DeleteOutlinedIcon style={{ fill: 'red' }} />}
      />
    </Box>
  );
}

export default RejectedUser;
