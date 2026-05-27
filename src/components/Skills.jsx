function Skills() {
  const skills = [
    {
      category: "Backend",
      color: "#e8f0fe",
      textColor: "#1a73e8",
      items: ["Java", "Spring Boot", 
              "Hibernate", "REST APIs",
              "Spring Security", "JWT"]
    },
    {
      category: "Frontend",
      color: "#fce8e6",
      textColor: "#d93025",
      items: ["React.js", "HTML", 
              "CSS", "JavaScript"]
    },
    {
      category: "AI / ML",
      color: "#e6f4ea",
      textColor: "#1e8e3e",
      items: ["Python", "OpenCV", 
              "MediaPipe", "Scikit-learn",
              "Pandas", "NumPy"]
    },
    {
      category: "Cloud & DevOps",
      color: "#fef7e0",
      textColor: "#f29900",
      items: ["AWS EC2", "AWS S3",
              "AWS IAM", "Docker basics",
              "Vercel", "Render"]
    },
    {
      category: "Database",
      color: "#f3e8fd",
      textColor: "#9334e6",
      items: ["MySQL", "PostgreSQL",
              "MongoDB Atlas", "JDBC"]
    },
    {
      category: "Tools",
      color: "#e8f0fe",
      textColor: "#1a73e8",
      items: ["Git", "GitHub", 
              "Postman", "VS Code",
              "IntelliJ IDEA"]
    }
  ]

  return (
    <section id="skills" style={{
      padding: '80px',
      background: '#f8f9fa'
    }}>
      {/* Header */}
      <div style={{textAlign: 'center',
                   marginBottom: '48px'}}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: '700',
          color: '#202124',
          marginBottom: '12px'
        }}>
          Technical Skills
        </h2>
        <p style={{
          color: '#5f6368',
          fontSize: '16px'
        }}>
          Technologies I work with
        </p>
        <div style={{
          width: '48px',
          height: '3px',
          background: '#1a73e8',
          margin: '16px auto 0',
          borderRadius: '2px'
        }}/>
      </div>

      {/* Skills Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 
          'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '24px',
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        {skills.map(skill => (
          <div key={skill.category} style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            border: '1px solid #e8eaed',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={e =>
            e.currentTarget.style.transform = 
            'translateY(-4px)'}
          onMouseLeave={e =>
            e.currentTarget.style.transform = 
            'translateY(0)'}
          >
            {/* Category Title */}
            <h3 style={{
              fontSize: '15px',
              fontWeight: '600',
              color: '#202124',
              marginBottom: '16px',
              paddingBottom: '12px',
              borderBottom: '1px solid #e8eaed'
            }}>
              {skill.category}
            </h3>

            {/* Skill Tags */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px'
            }}>
              {skill.items.map(item => (
                <span key={item} style={{
                  background: skill.color,
                  color: skill.textColor,
                  padding: '4px 12px',
                  borderRadius: '16px',
                  fontSize: '13px',
                  fontWeight: '500'
                }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills