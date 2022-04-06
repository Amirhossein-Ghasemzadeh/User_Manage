import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import AllUser from './components/AllUser';
import AcceptedUser from './components/AcceptedUser';
import RejectedUser from './components/RejectedUser';
import { Button, Stack } from '@mui/material';
import { useCandidatesState } from './context/CandidatesState';

function App() {
  const { all: candidates, technologies } = useCandidatesState();
  // Get all candidate TechnologyIds
  const rowsData = candidates?.map((item) => {
    //  Get candidate TechnologiesId .
    const candidateTechId = item.experience.map((exp) => exp.technologyId);
    //  Get Technologies name and guid from thechnologies , by Candidate Technologyids.
    const candidateTechs = technologies?.filter((technology) =>
      candidateTechId.includes(technology.guid)
    );
    // extract candidate Technologies name who they have in experience.
    const candidateAllTech = candidateTechs.map(
      (technology) => technology.name
    );
    // extract candidate Technologies years of experience
    const candidateYearsExp = item.experience.map(
      (experience) => experience.yearsOfExperience
    );
    // combine years of all user experiences and technologies
    let candidateExperiences = [];
    for (let i = 0; i < candidateAllTech.length; i++) {
      candidateExperiences.push({
        yearsOfExperience: candidateYearsExp[i],
        technology: candidateAllTech[i],
      });
    }
    // candidate tech and years of experience
    const candidateExpObj = candidateExperiences.map(
      (candidateExp) =>
        `${candidateExp.technology}(${candidateExp.yearsOfExperience} years)`
    );

    return {
      id: item.candidateId,
      lastName: item.firstName,
      firstName: item.lastName,
      image: item.profilePicture,
      email: item.email,
      experiences: candidateExpObj,
    };
  });

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
        <Route path='/' element={<AllUser rows={rowsData} />} />
        <Route path='/rejected' element={<RejectedUser />} />
        <Route path='/accepted' element={<AcceptedUser />} />
      </Routes>
    </div>
  );
}

export default App;
