// pages/projects.js
import ProjectList from './components/ProjectList';

const projects = [
    { id: 1, name: 'Project Alpha' },
    { id: 2, name: 'Beta Project' },
    { id: 3, name: 'Gamma Task' },
    { id: 4, name: 'Delta Initiative' },
    // Add more projects as needed
];

const ProjectsPage = () => {
    return (
        <div>
            <h1>My Projects</h1>
            <ProjectList projects={projects} />
        </div>
    );
};

export default ProjectsPage;
