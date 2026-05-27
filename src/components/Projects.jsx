import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

function Projects() {
  const projects = [
    {
      title: "🛒 E-Commerce Store — Aetheria",
      description: "Full stack e-commerce platform with product listings, cart management, JWT authentication, GST calculation and simulated payment gateway.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      live: "https://code-alpha-ecommerce-store-intern1.vercel.app/",
      github: "https://github.com/Thol-444/CodeAlpha_EcommerceStore_Intern1",
      color: "#e8f0fe"
    },
    {
      title: "🤟 Real-Time Sign Language Interpreter",
      description: "AI-powered gesture recognition system using computer vision. Converts sign language to text in real-time using ML models.",
      tech: ["Python", "OpenCV", "MediaPipe", "ML"],
      live: "",
      github: "https://github.com/Thol-444",
      color: "#e6f4ea"
    },
    {
      title: "🎓 AI Career Guidance Platform",
      description: "Full stack platform giving clarity on course selection, role roadmaps and learning modules. Helps students identify right tech roles.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
      live: "",
      github: "https://github.com/Thol-444",
      color: "#fef7e0"
    },
    {
      title: "💼 Freelancing Platform — Fiverr Clone",
      description: "MERN-based platform with role-based authentication, service listings, AI chatbot integration and real-time messaging.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      live: "",
      github: "https://github.com/Thol-444",
      color: "#fce8e6"
    },
    {
      title: "🏨 Hotel Reservation System",
      description: "Java-based system to search, book and manage hotel rooms with OOP design, GST calculation and payment simulation.",
      tech: ["Java", "MySQL", "JDBC", "OOP"],
      live: "",
      github: "https://github.com/Thol-444/CodeAlpha_HotelReservation",
      color: "#f3e8fd"
    },
    {
      title: "🎮 Tic Tac Toe AI",
      description: "Unbeatable AI using Minimax algorithm. AI evaluates all possible moves and always plays the optimal move.",
      tech: ["Python", "Minimax", "Game Theory"],
      live: "",
      github: "https://github.com/Thol-444/CODSOFT-AI-TASK2",
      color: "#e8f0fe"
    }
  ]

  return (
    <section id="projects" style={{
      padding: '80px',
      background: '#ffffff'
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
          Projects
        </h2>
        <p style={{
          color: '#5f6368',
          fontSize: '16px'
        }}>
          Things I have built
        </p>
        <div style={{
          width: '48px',
          height: '3px',
          background: '#1a73e8',
          margin: '16px auto 0',
          borderRadius: '2px'
        }}/>
      </div>

      {/* Projects Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns:
          'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        {projects.map(project => (
          <div key={project.title} style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '28px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            border: '1px solid #e8eaed',
            transition: 'transform 0.2s, box-shadow 0.2s',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform =
              'translateY(-4px)'
            e.currentTarget.style.boxShadow =
              '0 8px 24px rgba(0,0,0,0.12)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform =
              'translateY(0)'
            e.currentTarget.style.boxShadow =
              '0 1px 3px rgba(0,0,0,0.1)'
          }}
          >
            {/* Title */}
            <h3 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#202124'
            }}>
              {project.title}
            </h3>

            {/* Description */}
            <p style={{
              fontSize: '14px',
              color: '#5f6368',
              lineHeight: '1.6',
              flex: 1
            }}>
              {project.description}
            </p>

            {/* Tech Tags */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px'
            }}>
              {project.tech.map(t => (
                <span key={t} style={{
                  background: project.color,
                  color: '#1a73e8',
                  padding: '3px 10px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: '500'
                }}>
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div style={{
              display: 'flex',
              gap: '16px',
              paddingTop: '8px',
              borderTop: '1px solid #e8eaed'
            }}>
              <a href={project.github}
                 target="_blank"
                 rel="noreferrer"
                 style={{
                   display: 'flex',
                   alignItems: 'center',
                   gap: '6px',
                   color: '#5f6368',
                   textDecoration: 'none',
                   fontSize: '13px',
                   fontWeight: '500'
                 }}>
                <FaGithub /> GitHub
              </a>
              {project.live && (
                <a href={project.live}
                   target="_blank"
                   rel="noreferrer"
                   style={{
                     display: 'flex',
                     alignItems: 'center',
                     gap: '6px',
                     color: '#1a73e8',
                     textDecoration: 'none',
                     fontSize: '13px',
                     fontWeight: '500'
                   }}>
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects