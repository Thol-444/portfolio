import { FaGithub, FaLinkedin, 
         FaEnvelope, FaPhone,
         FaMapMarkerAlt } from 'react-icons/fa'

function Contact() {
  return (
    <section id="contact" style={{
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
          Contact Me
        </h2>
        <p style={{
          color: '#5f6368',
          fontSize: '16px'
        }}>
          Let's connect and build something amazing!
        </p>
        <div style={{
          width: '48px',
          height: '3px',
          background: '#1a73e8',
          margin: '16px auto 0',
          borderRadius: '2px'
        }}/>
      </div>

      {/* Contact Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns:
          'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '24px',
        maxWidth: '900px',
        margin: '0 auto 48px'
      }}>
        {[
          {
            icon: <FaEnvelope size={24}/>,
            label: 'Email',
            value: 'niharika.tholu005@gmail.com',
            link: 'mailto:niharika.tholu005@gmail.com',
            color: '#e8f0fe',
            iconColor: '#1a73e8'
          },
          {
            icon: <FaPhone size={24}/>,
            label: 'Phone',
            value: '+91 6301110274',
            link: 'tel:+916301110274',
            color: '#e6f4ea',
            iconColor: '#1e8e3e'
          },
          {
            icon: <FaMapMarkerAlt size={24}/>,
            label: 'Location',
            value: 'LB Nagar, Hyderabad',
            link: '#',
            color: '#fce8e6',
            iconColor: '#d93025'
          }
        ].map(item => (
          <a key={item.label}
             href={item.link}
             style={{
               background: '#fff',
               borderRadius: '12px',
               padding: '28px',
               boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
               border: '1px solid #e8eaed',
               textDecoration: 'none',
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'center',
               gap: '12px',
               transition: 'transform 0.2s'
             }}
             onMouseEnter={e =>
               e.currentTarget.style.transform =
               'translateY(-4px)'}
             onMouseLeave={e =>
               e.currentTarget.style.transform =
               'translateY(0)'}
          >
            <div style={{
              background: item.color,
              color: item.iconColor,
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {item.icon}
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{
                fontSize: '13px',
                color: '#5f6368',
                marginBottom: '4px'
              }}>
                {item.label}
              </div>
              <div style={{
                fontSize: '14px',
                fontWeight: '500',
                color: '#202124'
              }}>
                {item.value}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Social Links */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '16px',
        marginBottom: '48px'
      }}>
        <a href="https://github.com/Thol-444"
           target="_blank" rel="noreferrer"
           style={{
             display: 'flex',
             alignItems: 'center',
             gap: '8px',
             background: '#202124',
             color: '#fff',
             padding: '10px 20px',
             borderRadius: '8px',
             textDecoration: 'none',
             fontSize: '14px',
             fontWeight: '500'
           }}>
          <FaGithub /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/nihaarika-tholu-b9186129b/"
           target="_blank" rel="noreferrer"
           style={{
             display: 'flex',
             alignItems: 'center',
             gap: '8px',
             background: '#0077b5',
             color: '#fff',
             padding: '10px 20px',
             borderRadius: '8px',
             textDecoration: 'none',
             fontSize: '14px',
             fontWeight: '500'
           }}>
          <FaLinkedin /> LinkedIn
        </a>
      </div>

      {/* Footer */}
      <div style={{
        textAlign: 'center',
        paddingTop: '32px',
        borderTop: '1px solid #e8eaed'
      }}>
        <p style={{
          fontSize: '14px',
          color: '#5f6368'
        }}>
          © 2026 Nihaarika Tholu — 
          Built with React.js ⚡ Deployed on Vercel
        </p>
      </div>
    </section>
  )
}

export default Contact