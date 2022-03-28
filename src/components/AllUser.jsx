import React, { useState } from 'react';
import { Box } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

import Candidates from '../components/data/candidates.json';
import technologies from '../components/data/technologies.json';
import RejectedUser from './RejectedUser';
import AcceptedUser from './AcceptedUser';

// Candidates
const rows = Candidates.map(
  ({
    candidateId: id,
    firstName,
    lastName,
    profilePicture,
    email,
    experience: { ...tech_years },
  }) => ({
    id: id,
    lastName: firstName,
    firstName: lastName,
    image: profilePicture,
    email: email,
    job: tech_years,
  })
);

// Technologies
const Technologies = technologies.map((item) => ({
  name: item.name,
  guid: item.guid,
}));

function AllUser() {
  const [users, setUsers] = useState(rows);
  const [selectedUser, setSelectedUser] = useState([]);
  const [rejectedUser, setRejectedUser] = useState([]);

  //  coulmns
  const columns = [
    { field: 'id', headerName: 'ID', width: 300, description: 'User Id' },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 130,
      description: 'User FirstName',
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 130,
      description: 'User LastName',
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'User FullName',
      sortable: false,
      width: 160,
      valueGetter: (params) => `${params.row.firstName} ${params.row.lastName}`,
    },
    {
      field: 'profilePicture',
      headerName: 'User Image',
      description: 'User Image',
      sortable: false,
      width: 120,
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
      valueGetter: (params) => params.row.email,
    },
    {
      field: 'job',
      headerName: 'Language & Experience',
      description: 'Language & Experience',
      sortable: false,
      width: 260,
      valueGetter: (params) => params.row.job,
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
              const filterRejectedUser = (user) =>
                user.filter((x) => !selectedIDs.has(x.id));
              setUsers(filterRejectedUser);
            }}
          >
            <DeleteOutlinedIcon />
          </IconButton>
        );
      },
    },
    {
      field: 'accept',
      width: 75,
      sortable: false,
      disableColumnMenu: true,
      renderHeader: () => {
        return (
          <IconButton>
            <CheckCircleOutlineOutlinedIcon />
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
      }}
    >
      <h1>All Users</h1>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={50}
        rowsPerPageOptions={[50]}
        checkboxSelection
        //select each row id and data
        onSelectionModelChange={(id) => {
          setSelectedUser(id);
          const selectedIDs = new Set(id);
          const selectedRowData = users.filter((row) =>
            selectedIDs.has(row.id)
          );
          setRejectedUser(selectedRowData);
        }}
      />
      {/* push accept or reject user to their component */}
      <RejectedUser rejectedUser={rejectedUser} columns={columns} />
      <AcceptedUser />
    </Box>
  );
}

export default AllUser;
