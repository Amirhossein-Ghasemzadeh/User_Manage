import Candidates from '../data/candidates.json';
import technologies from '../data/technologies.json';

// all Candiadtes Table Row
export const users = Candidates.map((item) => {
  let userLangsId = item['experience'].map((e) => e['technologyId']);
  let userYearExp = item['experience'].map((e) => e['yearsOfExperience']);

  let userLangs = [];

  technologies.forEach((t) => {
    userLangsId.forEach((userLangId) => {
      if (userLangId === t['guid']) {
        userLangs.push(t['name']);
      }
    });
  });

  let userExperiences = [];
  for (let i = 0; i < userLangs.length; i++) {
    userExperiences.push({
      yearsOfExperience: userYearExp[i],
      technology: userLangs[i],
    });
  }

  let userTechObj = userExperiences.map((e) => ({
    tech: e.technology,
    yearsExp: e.yearsOfExperience,
  }));

  let finalUserExp = userTechObj.map((i) => `${i.tech}(${i.yearsExp} years)`);

  return {
    id: item.candidateId,
    lastName: item.firstName,
    firstName: item.lastName,
    image: item.profilePicture,
    email: item.email,
    experiences: finalUserExp,
  };
});
