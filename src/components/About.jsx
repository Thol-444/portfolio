function About() {
  return (
    <section id="about" style={{
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
          About Me
        </h2>
        <p style={{
          color: '#5f6368',
          fontSize: '16px'
        }}>
          Who I am and what I do
        </p>
        <div style={{
          width: '48px',
          height: '3px',
          background: '#1a73e8',
          margin: '16px auto 0',
          borderRadius: '2px'
        }}/>
      </div>

      {/* Content */}
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '48px',
        alignItems: 'center'
      }}>
        {/* Left — Text */}
        <div>
          <h3 style={{
            fontSize: '22px',
            fontWeight: '600',
            color: '#202124',
            marginBottom: '16px'
          }}>
            Hi! I'm Nihaarika 👋
          </h3>
          <p style={{
            fontSize: '15px',
            color: '#5f6368',
            lineHeight: '1.8',
            marginBottom: '16px'
          }}>
            I'm a B.Tech Computer Science student
            at Anurag University, Hyderabad with
            a CGPA of 8.66. I'm passionate about
            building AI-powered full stack
            applications that solve real problems.
          </p>
          <p style={{
            fontSize: '15px',
            color: '#5f6368',
            lineHeight: '1.8',
            marginBottom: '16px'
          }}>
            My goal is to become an
            <strong style={{color: '#1a73e8'}}>
              {' '}AI Java Full Stack Cloud Engineer
            </strong> — combining Java backend,
            React frontend, AI integration,
            and AWS cloud deployment.
          </p>
          <p style={{
            fontSize: '15px',
            color: '#5f6368',
            lineHeight: '1.8'
          }}>
            When I'm not coding, I'm solving
            DSA problems on LeetCode, building
            projects, or learning new technologies.
            I have solved 110+ problems with
            a 50+ days consistency badge! 🔥
          </p>
        </div>

        {/* Right — Info Cards */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {[
            {
              label: '🎓 Education',
              value: 'B.Tech CSE — Anurag University',
              sub: 'CGPA: 8.66 | 2023 – Present'
            },
            {
              label: '📍 Location',
              value: 'LB Nagar, Hyderabad',
              sub: 'Telangana, India'
            },
            {
              label: '🎯 Goal',
              value: 'AI Java Full Stack Cloud Developer',
              sub: 'Open to work — 2026'
            },
            {
              label: '💻 LeetCode',
              value: '110+ Problems Solved',
              sub: '50+ Days Consistency Badge 🔥'
            },
            {
              label: '🏆 Achievement',
              value: 'Smart India Hackathon',
              sub: 'Reached 3rd Round — 2024'
            }
          ].map(item => (
            <div key={item.label} style={{
              background: '#f8f9fa',
              borderRadius: '10px',
              padding: '16px 20px',
              border: '1px solid #e8eaed',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}>
              <span style={{
                fontSize: '12px',
                color: '#1a73e8',
                fontWeight: '600'
              }}>
                {item.label}
              </span>
              <span style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#202124'
              }}>
                {item.value}
              </span>
              <span style={{
                fontSize: '12px',
                color: '#5f6368'
              }}>
                {item.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About