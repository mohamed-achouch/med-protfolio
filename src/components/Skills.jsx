import skills from "../skills"
const Skills = () => {
  return (
    <section className="skills" id="skills">
        <div className="container">
            <h1 className="Sub-title">My Skills</h1>
         <div className="list_skills">
            {
                skills.map((skill)=> (
                    <div key={skill.id} className="skill">
                        <img src={skill.image} alt="" />
                        <h2>{skill.name}</h2>
                    </div>
                ))
            }
         </div>
        </div>
    </section>
  )
}

export default Skills