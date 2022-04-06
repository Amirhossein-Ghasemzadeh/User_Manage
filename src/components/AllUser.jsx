import { Box } from '@mui/system';
import Table from './Table';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

function AllUsers({ rows }) {
  return (
    <Box>
      <Table
        rows={rows}
        name={'All Candidates'}
        acceptIcon={<CheckCircleOutlineOutlinedIcon style={{ fill: 'green' }} />}
        deletIcon={<DeleteOutlinedIcon style={{ fill: 'red' }} />}
      />
    </Box>
  );
}
export default AllUsers;
