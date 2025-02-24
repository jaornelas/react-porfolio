import { useState } from 'react';
import Project from '../components/Project.jsx';

// TODO: Implement the Project components in two columns side-by-side. Use props to make each Project different.
function Portfolio() {
  const [projects] = useState([
    {
      name: 'preworkStudyGuide',
      repo: 'https://github.com/jaornelas/prework-study-guide',
      link: 'https://jaornelas.github.io/prework-study-guide/',
      description: 'Starter pre-bootcamp practice'
    },
    {
      name: 'employeeTracker',
      repo: 'https://github.com/jaornelas/SQLemployee-tracker',
      link: 'https://drive.google.com/file/d/1NbH16kYne8e344qzuBRC71fpoX1Y298n/view',
      description: 'PostgreSQL Employee Databases'
    },
    {
      name: 'carBuilder',
      repo: 'https://github.com/jaornelas/typescript-vehiclebuilder',
      link: 'https://drive.google.com/file/d/1vJpEogk0VnR-fd6eGw4FLYroBvAg6ZfI/view',
      description: 'Node.js & Inquirer'
    }, 
    {
      name: 'budgetCalculator', 
      repo: 'https://github.com/jaornelas/budget-calc-project-1', 
      link: 'https://jaornelas.github.io/budget-calc-project-1/', 
      description: '1st Project'
    }
  ])

  return (
    <div>
      <div className="row justify-content-center pb-5">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  )
}

export default Portfolio