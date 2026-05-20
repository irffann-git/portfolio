import './Credentials.css';
import educations from '../data/education';
import experiences from '../data/experience';

const Credentials = () => {
  return (
    <section id="edu-exp">
      <h2><i className="fas fa-scroll"></i> Credentials</h2>
      <div className="edu-exp-grid">
        {/* Experience Card */}
        <div className="exp-card" id="experience">
          <h3><i className="fas fa-briefcase"></i> Experience</h3>
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item reveal">
              <div className="timeline-icon">
                <i className={exp.icon}></i>
              </div>
              <div className="timeline-content">
                <h4>{exp.title}</h4>
                <div className="timeline-company">{exp.company}</div>
                <div className="timeline-date">{exp.date}</div>
                <div className="timeline-desc">{exp.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Card */}
        <div className="edu-card">
          <h3><i className="fas fa-university"></i> Education</h3>
          {educations.map((edu, idx) => (
            <div key={idx} className="timeline-item reveal">
              <div className="timeline-icon">
                <i className={edu.icon}></i>
              </div>
              <div className="timeline-content">
                <h4>{edu.title}</h4>
                <div className="timeline-institution">{edu.institution}</div>
                <div className="timeline-date">{edu.date}</div>
                <div className="timeline-desc">{edu.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credentials;