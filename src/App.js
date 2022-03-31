import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import AllUser from './components/AllUser';
import AcceptedUser from './components/AcceptedUser';
import RejectedUser from './components/RejectedUser';
import { Button, Stack } from '@mui/material';

function App() {
  return (
    <div className='container'>
      <div className='btn'>
        <Stack direction='row' spacing={6}>
          <Link to='/'>
            <Button variant='contained' color='primary'>
              All Candidates
            </Button>
          </Link>
          <Link to='/accepted'>
            <Button variant='contained' color='success'>
              Accepted Candidates
            </Button>
          </Link>
          <Link to='/rejected'>
            <Button variant='contained' color='error'>
              Rejected Candidates
            </Button>
          </Link>
        </Stack>
      </div>
      <Routes>
        <Route path='/' element={<AllUser />} />
        <Route path='/rejected' element={<RejectedUser />} />
        <Route path='/accepted' element={<AcceptedUser />} />
      </Routes>
    </div>
  );
}

export default App;
