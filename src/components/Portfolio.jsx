import { useState } from 'react';
import Project from '../components/Project.jsx';

// TODO: Implement the Project components in two columns side-by-side. Use props to make each Project different.
function Portfolio() {
    const [projects] = useState([
        {
            title: 'Prework Study Guide', 
            image: prework,
            app: 'https://jaornelas.github.io/prework-study-guide/',
            repo: 'https://github.com/jaornelas/prework-study-guide'

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