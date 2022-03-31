import React from 'react';
import { Box } from '@mui/system';
import Table from './Table';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { useCandidatesState } from '../context/CandidatesState';

function AllUsers() {
  const { candidates } = useCandidatesState();

  return (
    <Box>
      <Table
        rows={candidates}
        name={'All Candidates'}
        deletIcon={<DeleteOutlinedIcon style={{ fill: 'red' }} />}
        acceptIcon={
          <CheckCircleOutlineOutlinedIcon style={{ fill: 'green' }} />
        }
      />
    </Box>
  );
}
export default AllUsers;
