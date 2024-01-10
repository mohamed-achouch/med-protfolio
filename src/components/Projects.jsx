import projects from "../projects";
import Project from "./Project";
const Projects = () => {
  return (
    <section className="projects">
      <div className="container">
        <h1 className="Sub-title">My Projects</h1>
        <div className="list_projects">            
         {
            projects.map((item,index)=>(
                <Project key={index} item={item}/>
            ))
         }
         </div>
      </div>
    </section>
  );
};

export default Projects;
