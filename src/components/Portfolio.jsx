import { useState } from 'react';
import Project from '../components/Project.jsx';

// TODO: Implement the Project components in two columns side-by-side. Use props to make each Project different.
function Portfolio() {
  const [projects] = useState([
    {
      name: 'preworkStudyGuide',
      repo: 'https://github.com/jaornelas/prework-study-guide',
      link: 'https://jaornelas.github.io/prework-study-guide/',
      description: ''
    },
    {
      name: 'payrollTracker',
      repo: 'https://github.com/jaornelas/SQLemployee-tracker',
      link: 'https://drive.google.com/file/d/1NbH16kYne8e344qzuBRC71fpoX1Y298n/view',
      description: ''
    },
    {
      name: 'Build-A-Car',
      repo: 'https://github.com/jaornelas/typescript-vehiclebuilder',
      link: 'https://drive.google.com/file/d/1vJpEogk0VnR-fd6eGw4FLYroBvAg6ZfI/view',
      description: ''
    }
  ])

  return (
    <div>
      <div className="flex-row">
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