function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "CodeAlpha",
      period: "2026",
      color: "#1a73e8",
      points: [
        "Built and deployed E-commerce Store using MERN stack",
        "Implemented JWT authentication and MongoDB Atlas",
        "Deployed on Vercel + Render with live demo"
      ]
    },
    {
      role: "AI Developer Intern",
      company: "CodSoft",
      period: "2026",
      color: "#1e8e3e",
      points: [
        "Built Rule-Based AI Chatbot using Python and Regex",
        "Developed Tic-Tac-Toe AI using Minimax Algorithm",
        "Built Movie Recommendation System using Content-Based Filtering"
      ]
    },
    {
      role: "Java Developer Intern",
      company: "CodeAlpha",
      period: "2026",
      color: "#9334e6",
      points: [
        "Built Student Grade Tracker using Java + ArrayList",
        "Developed Hotel Reservation System with Java + MySQL + JDBC"
      ]
    },
    {
      role: "AI Powered Cloud Engineer",
      company: "AICTE Virtual Intern",
      period: "Jan 2026 – Mar 2026",
      color: "#f29900",
      points: [
        "Worked on cloud deployment and AI integration basics",
        "Tech Stack: AWS/Azure basics, Cloud Computing"
      ]
    },
    {
      role: "Networking Virtual Intern",
      company: "AICTE + Zscaler",
      period: "Jul 2025 – Sep 2025",
      color: "#d93025",
      points: [
        "Explored Zero Trust architecture and enterprise security",
        "Tech Stack: TCP/IP, Network Security, VPN"
      ]
    },
    {
      role: "Java Full Stack Developer",
      company: "AICTE Virtual Intern",
      period: "Nov 2024 – Jan 2025",
      color: "#1a73e8",
      points: [
        "Gained exposure to Spring Boot and REST APIs",
        "Worked on full stack development workflows"
      ]
    }
  ]

  return (
    <section id="experience" style={{
      padding: '80px',
      background: '#f8f9fa'
    }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '48px'
      }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: '700',
          color: '#202124',
          marginBottom: '12px'
        }}>
          Experience
        </h2>
        <p style={{
          color: '#5f6368',
          fontSize: '16px'
        }}>
          Internships and training
        </p>
        <div style={{
          width: '48px',
          height: '3px',
          background: '#1a73e8',
          margin: '16px auto 0',
          borderRadius: '2px'
        }}/>
      </div>

      {/* Timeline */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        position: 'relative'
      }}>
        {/* Timeline line */}
        <div style={{
          position: 'absolute',
          left: '16px',
          top: 0,
          bottom: 0,
          width: '2px',
          background: '#e8eaed'
        }}/>

        {experiences.map((exp, index) => (
          <div key={index} style={{
            display: 'flex',
            gap: '32px',
            marginBottom: '32px',
            position: 'relative'
          }}>
            {/* Dot */}
            <div style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: exp.color,
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '14px',
              fontWeight: '700',
              zIndex: 1
            }}>
              {exp.company[0]}
            </div>

            {/* Content */}
            <div style={{
              background: '#fff',
              borderRadius: '12px',
              padding: '20px 24px',
              flex: 1,
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              border: '1px solid #e8eaed'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '8px',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '15px',
                    fontWeight: '600',
                    color: '#202124'
                  }}>
                    {exp.role}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: exp.color,
                    fontWeight: '500',
                    marginTop: '2px'
                  }}>
                    {exp.company}
                  </p>
                </div>
                <span style={{
                  fontSize: '12px',
                  color: '#5f6368',
                  background: '#f8f9fa',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  border: '1px solid #e8eaed'
                }}>
                  {exp.period}
                </span>
              </div>

              {/* Points */}
              <ul style={{
                paddingLeft: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}>
                {exp.points.map((point, i) => (
                  <li key={i} style={{
                    fontSize: '13px',
                    color: '#5f6368',
                    lineHeight: '1.5'
                  }}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience