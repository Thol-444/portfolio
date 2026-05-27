import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 80px',
      background: '#fff',
      borderBottom: '1px solid #e8eaed',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        fontSize: '20px',
        fontWeight: '700',
        color: '#1a73e8'
      }}>
        Nihaarika<span style={{
          color: '#202124'
        }}>.dev</span>
      </div>

      <div style={{
        display: 'flex',
        gap: '32px',
        fontSize: '14px',
        fontWeight: '500'
      }}>
        {['About','Skills','Projects',
          'Experience','Contact'].map(item => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              color: '#5f6368',
              textDecoration: 'none',
              transition: 'color 0.2s'
            }}
            onMouseEnter={e =>
              e.target.style.color = '#1a73e8'}
            onMouseLeave={e =>
              e.target.style.color = '#5f6368'}
          >
            {item}
          </a>
        ))}
      </div>

      <div style={{display: 'flex', gap: '16px'}}>
        <a href="https://github.com/Thol-444"
           target="_blank" rel="noreferrer"
           style={{
             color: '#5f6368',
             fontSize: '22px'
           }}>
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/nihaarika-tholu-b9186129b/"
           target="_blank" rel="noreferrer"
           style={{
             color: '#0077b5',
             fontSize: '22px'
           }}>
          <FaLinkedin />
        </a>
      </div>
    </nav>
  )
}

export default Navbar