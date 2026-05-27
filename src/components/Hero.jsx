function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 80px 0',
      background: 'linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%)'
    }}>
      <div style={{
        maxWidth: '800px',
        textAlign: 'center'
      }}>

        {/* Tag */}
        <div style={{
          display: 'inline-block',
          background: '#e8f0fe',
          color: '#1a73e8',
          padding: '6px 16px',
          borderRadius: '20px',
          fontSize: '13px',
          fontWeight: '500',
          marginBottom: '24px'
        }}>
          👋 Open to Work — AI Java Full Stack Cloud Developer
        </div>

        {/* Name */}
        <h1 style={{
          fontSize: '56px',
          fontWeight: '700',
          color: '#202124',
          lineHeight: '1.1',
          marginBottom: '16px'
        }}>
          Hi, I'm{' '}
          <span style={{color: '#1a73e8'}}>
            Nihaarika Tholu
          </span>
        </h1>

        {/* Role */}
        <h2 style={{
          fontSize: '22px',
          fontWeight: '400',
          color: '#5f6368',
          marginBottom: '24px'
        }}>
          AI Java Full Stack Cloud Developer
        </h2>

        {/* Description */}
        <p style={{
          fontSize: '16px',
          color: '#5f6368',
          lineHeight: '1.8',
          maxWidth: '600px',
          margin: '0 auto 40px'
        }}>
          B.Tech CSE student at Anurag University
          with hands-on experience in Java,
          Spring Boot, React.js, Python AI,
          and AWS Cloud. Building intelligent
          full stack applications that solve
          real problems.
        </p>

        {/* Buttons */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '60px'
        }}>
          <a href="#projects" style={{
            background: '#1a73e8',
            color: '#fff',
            padding: '12px 28px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: '500'
          }}>
            View Projects
          </a>

          <a href="#contact" style={{
            background: '#fff',
            color: '#1a73e8',
            padding: '12px 28px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: '500',
            border: '1px solid #1a73e8'
          }}>
            Contact Me
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex',
          gap: '48px',
          justifyContent: 'center',
          paddingTop: '40px',
          borderTop: '1px solid #e8eaed'
        }}>
          {[
            {number: '8.66', label: 'CGPA'},
            {number: '110+', label: 'LeetCode'},
            {number: '6+', label: 'Projects'},
            {number: '4+', label: 'Internships'}
          ].map(stat => (
            <div key={stat.label}
                 style={{textAlign: 'center'}}>
              <div style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#1a73e8'
              }}>
                {stat.number}
              </div>
              <div style={{
                fontSize: '13px',
                color: '#5f6368',
                marginTop: '4px'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero