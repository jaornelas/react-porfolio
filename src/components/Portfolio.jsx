import { useState } from 'react';
import Project from '../components/Project.jsx';
import prework from '../img/led-wall.webp'

// TODO: Implement the Project components in two columns side-by-side. Use props to make each Project different.
function Portfolio() {
  const [projects] = useState([
    {
      name: 'Prework Study Guide',
      repo: 'https://github.com/jaornelas/prework-study-guide',
      link: 'https://jaornelas.github.io/prework-study-guide/',
      description: ''
    },
    {
      name: 'Prework Study Guide',
      repo: 'https://github.com/jaornelas/prework-study-guide',
      link: 'https://jaornelas.github.io/prework-study-guide/',
      description: ''
    },
    {
      name: 'Prework Study Guide',
      repo: 'https://github.com/jaornelas/prework-study-guide',
      link: 'https://jaornelas.github.io/prework-study-guide/',
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