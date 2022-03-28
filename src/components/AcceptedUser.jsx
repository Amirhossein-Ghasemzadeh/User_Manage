import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/system';

function AcceptedUser() {
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
      <h1>Accepted Users</h1>
      {/* <DataGrid
        rows={2}
        columns={2}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      /> */}
    </Box>
  );
}

export default AcceptedUser;
