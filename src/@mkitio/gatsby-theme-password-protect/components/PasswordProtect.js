/**
 * Write-only the password as cookie
 */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet'
import { setSessionPassword } from '../utils/utils';
import useSiteMetadata from '../../../components/SiteMetadata'
import { withPrefix } from 'gatsby'

const styles = {
  wrapper: {
    height: '100vh',
    background: '#424242',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1rem',
    padding: '0 1rem',
    textAlign: 'center',
  },
  wrapperInner: {
    width: '300px',
  },
  input: {
    width: '100%',
    height: '48px',
    borderRadius: '4px'
  },
  button: {
    width: '100%',
    height: '48px',
    background: '#333',
    color: '#fff',
    border: '1px solid #333',
    borderRadius: '4px',
    marginTop: '16px',
    fontWeight: 'normal',
    cursor: 'pointer',
    transition: 'all .15s linear'
  },
  buttonHover: {
    background: '#fff',
    color: '#000000'
  },
  link: {
    color: '#fff',
    fontFamily: 'sans-serif'
  },
  linkHover: {
    color: 'dodgerblue'
  }
};

const PasswordProtect = () => {
  const [password, setPassword] = useState('');
  const [isButtonHovered, buttonHover] = useState(false);
  const { title, description } = useSiteMetadata()

  const onSubmit = (event) => {
    event.preventDefault();
    setSessionPassword(password);
    window.location.reload(); // eslint-disable-line
  };

  return (
    <div className="password-protect">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon.ico`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon.ico`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>

      <form onSubmit={onSubmit}>
        <div style={styles.wrapper}>
          <div style={styles.wrapperInner}>
            <h3 style={{ color: '#fff', marginBottom: '.5rem' }}>
              Enter Password:
            </h3>

            <input
              name="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              style={styles.input}
            />

            <button
              type="submit"
              style={{
                ...styles.button,
                ...(isButtonHovered ? styles.buttonHover : null)
              }}
              onMouseEnter={() => buttonHover(true)}
              onMouseLeave={() => buttonHover(false)}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PasswordProtect;
