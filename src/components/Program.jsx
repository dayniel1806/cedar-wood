import React from "react";
import "./Programs.css"; // external CSS

function Programs() {
  const programs = [
    {
      icon: "👶",
      title: "Creche",
      desc: "Providing safe, warm, and caring care for your infant daily, as a foundation for early learning stage."
    },
    {
      icon: "🎓",
      title: "Preschool",
      desc: "Preschool program focusing specifically on your child’s growth and readiness for pre-primary education."
    },
    {
      icon: "📖",
      title: "Elementary",
      desc: "Well-structured elementary education that prepares students for the next stage of school."
    },
    {
      icon: "🧑‍🎓",
      title: "Junior",
      desc: "Our Junior Secondary school program develops students with the skills and knowledge for academic success."
    },
    {
      icon: "🏫",
      title: "Senior School",
      desc: "An in-depth focus on key subjects, preparing students for exams and future career paths."
    },
    {
      icon: "❤️",
      title: "After-School Care",
      desc: "Structured after-school programs and enrichment for homework, talent, skills, and growth."
    },
  ];

  return (
    <section className="programs">
      <div className="programs-header">
        <h4>OUR PROGRAMS</h4>
        <h2>What We Offer</h2>
      </div>

      <div className="programs-grid">
        {programs.map((prog, idx) => (
          <div key={idx} className="program-card">
            <span className="program-icon">{prog.icon}</span>
            <div>
              <h3>{prog.title}</h3>
              <p>{prog.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Programs;