import React, { useState } from 'react';
import { Box } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton, Typography } from '@mui/material';
import { useCandidatesState } from '../context/CandidatesState';

const Table = ({ rows, name, deletIcon, acceptIcon }) => {
  const [selectedUserId, setSelectedUserId] = useState([]);
  const [selectedUserObj, setSelectedUserObj] = useState([]);
  const { candidates, setCandidates, setAccepted, setRejected } =
    useCandidatesState();

  const columns = [
    {
      field: 'profilePicture',
      headerName: 'User Image',
      description: 'User Image',
      sortable: false,
      width: 100,
      renderCell: (params) => <img src={params.row.image} className='img' />,
    },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      description: 'User FirstName',
    },
    {
      field: 'lastName',
      headerName: 'Last Name',
      width: 150,
      description: 'User LastName',
    },

    {
      field: 'email',
      headerName: 'Email',
      description: 'email',
      sortable: false,
      width: 260,
      valueGetter: (params) => params.row.email,
    },
    {
      field: 'experiences',
      headerName: 'Language & Experience',
      description: 'Language & Experience',
      sortable: false,
      width: 450,
    },
    {
      field: 'delete',
      width: 60,
      sortable: false,
      disableColumnMenu: true,
      renderHeader: () => {
        return (
          <IconButton
            onClick={() => {
              const selectedIDs = new Set(selectedUserId);
              const filterRejectedUser = (user) =>
                user.filter((x) => !selectedIDs.has(x.id));
              setCandidates(filterRejectedUser);
              setRejected(selectedUserObj);
            }}
          >
            {deletIcon}
          </IconButton>
        );
      },
    },
    {
      field: 'accept',
      width: 60,
      sortable: false,
      disableColumnMenu: true,
      renderHeader: () => {
        return (
          <IconButton
            onClick={() => {
              const selectedIDs = new Set(selectedUserId);
              const filterAcceptedUser = (user) =>
                user.filter((x) => !selectedIDs.has(x.id));
              setCandidates(filterAcceptedUser);
              setAccepted(selectedUserObj);
            }}
          >
            {acceptIcon}
          </IconButton>
        );
      },
    },
  ];

  return (
    <Box
      mb={10}
      pt={2}
      sx={{
        height: '390px',
        textAlign: 'center',
        width: '1050px',
      }}
    >
      <Typography variant='h4' mb={2} mt={4}>
        {name}
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={25}
        rowsPerPageOptions={[25]}
        checkboxSelection
        onSelectionModelChange={(id) => {
          setSelectedUserId(id);
          const selectedIDs = new Set(id);
          const selectedUserData = candidates.filter((row) =>
            selectedIDs.has(row.id)
          );
          setSelectedUserObj(selectedUserData);
        }}
      />
    </Box>
  );
};

export default Table;
