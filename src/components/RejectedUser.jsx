import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/system';

function RejectedUser({ rejectedUser, columns }) {
  return (
    <Box
      pt={8}
      sx={{
        height: '390px',
        width: '850px',
        textAlign: 'center',
        width: '1300px',
      }}
    >
      <DataGrid
        rows={rejectedUser}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Box>
  );
}

export default RejectedUser;
