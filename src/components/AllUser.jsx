import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, IconButton } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Box } from '@mui/system';
import data from '../candidates.json';
import RejectedUser from './RejectedUser';

const rows = data.map(
  ({ candidateId: id, firstName, lastName, profilePicture, email }) => ({
    id: id,
    lastName: firstName,
    firstName: lastName,
    image: profilePicture,
    email: email,
  })
);

function AllUser() {
  const [users, setUsers] = useState(rows);
  const [selectedUser, setSelectedUser] = useState([]);
  const [rejectedUser, setRejectedUser] = useState([]);
  const [rejectSection, setRejectSection] = useState(false);

  const columns = [
    { field: 'id', headerName: 'ID', width: 300 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'profilePicture',
      headerName: 'user Image',
      description: 'user user',
      sortable: false,
      width: 160,
      height: 260,
      borderRadius: 140,
      renderCell: (params) => (
        <img src={params.row.image} alt='user-photo' className='img' />
      ),
    },
    {
      field: 'email',
      headerName: 'Email',
      description: 'email',
      sortable: false,
      width: 260,
      valueGetter: (params) => params.row.email || '',
    },
    {
      field: 'delete',
      width: 75,
      sortable: false,
      disableColumnMenu: true,
      renderHeader: () => {
        return (
          <IconButton
            onClick={() => {
              const selectedIDs = new Set(selectedUser);
              setUsers((r) => r.filter((x) => !selectedIDs.has(x.id)));
            }}
          >
            <DeleteOutlinedIcon />
          </IconButton>
        );
      },
    },
  ];

  return (
    <Box
      pt={2}
      sx={{
        height: '390px',
        width: '850px',
        textAlign: 'center',
        width: '1300px',
        marginLeft: 0,
      }}
    >
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        //Store Data from the row in another variable
        onSelectionModelChange={(id) => {
          setSelectedUser(id);
          const selectedIDs = new Set(id);
          const selectedRowData = users.filter((row) =>
            selectedIDs.has(row.id)
          );
          setRejectedUser(selectedRowData);
          console.log(selectedUser);
        }}
      />
      <Button onClick={() => setRejectSection(true)}>
        Go to rejection User
      </Button>
      {rejectSection ? (
        <RejectedUser rejectedUser={rejectedUser} columns={columns} />
      ) : (
        ''
      )}
    </Box>
  );
}

export default AllUser;
