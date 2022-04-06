export const columns = [
  {
    field: 'profilePicture',
    headerName: 'User Image',
    description: 'User Image',
    sortable: false,
    width: 100,
    renderCell: (params) => (
      <img src={params.row.image} className='img' alt='user_Image' />
    ),
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
    width: 480,
  },
];
