import { Box } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import { columns } from '../dataTable';
import { useCandidatesState } from '../context/CandidatesState';

const Table = ({ rows, name, removeIcon, acceptIcon, deletIcon }) => {
  const { rejectUser, acceptUser, removeFromAccepted, removeFromRejected } =
    useCandidatesState();

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='actionBtn'>
            <div className='checkBtn' onClick={() => acceptUser(params.row)}>
              {acceptIcon}
            </div>
            <div className='deleteBtn' onClick={() => rejectUser(params.row)}>
              {deletIcon}
            </div>
            <div
              className='removeBtn'
              onClick={() =>
                removeFromAccepted(params.row.id) ||
                removeFromRejected(params.row.id)
              }
            >
              {removeIcon}
            </div>
          </div>
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
        width: '1328px',
      }}
    >
      <Typography variant='h4' mb={2} mt={4}>
        {name}
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={25}
        rowsPerPageOptions={[25]}
        checkboxSelection
      />
    </Box>
  );
};

export default Table;
