import { Link } from '@reach/router'
import React, { useState } from 'react'

const ResponsiveNavigation = ({
  navLinks,
  background,
  logo,
  linkColor,
  hoverBackground,
}) => {
  const [hoverIndex, setHoverIndex] = useState(-1)
  const [navOpen, setNavOpen] = useState(false)

  return (
    <nav className="responsive-toolbar" style={{ background }}>
      <ul style={{ background }} className={navOpen ? 'active' : ''}>
        <figure onClick={() => setNavOpen(!navOpen)}>
          <img src={logo} height="40px" width="40px" alt="logo-nav-toggle" />
        </figure>
        {navLinks.map((link, index) => (
          <li
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(-1)}
            style={{
              background: hoverIndex === index ? hoverBackground || '#999' : '',
            }}
          >
            <Link to={link.path} style={{ color: linkColor }}>
              {link.text}
              <i className={link.icon}></i>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default ResponsiveNavigation
