import BackgroundImage from '../images/background.png'

export const Styles = {
    background: {
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: 'contain',
      height: '100vh',
      width: '100vw',
      position: 'fixed'
    },
    brightCornerLight: {
      width: '404px',
      height: '387px',
      flexShrink: '0',
      borderRadius: '404px',
      background: '#5665EF',
      filter: 'blur(100px)',
      position: 'absolute',
      left: '-7%',
      top: '-8%'
    },
    brightTopLight: {
      width: '448px',
      height: '425px',
      top:'-33%',
      right:'30%',
      flexShrink: '0',
      borderRadius: '448px',
      background: 'var(--white, #FFFDF3)',
      filter: 'blur(100px)',
      position: 'absolute'
    },
    selfiePicture: {
      position: 'relative',
      left: '57%',
      width: '696px',
      height: '905px',
      flexShrink: '0',
    },
    Name: {
      /* Desktop/H1 */
      fontFamily: 'MuseoModerno',
      fontSize: '120px',
      fontStyle: 'normal',
      fontWeight: '700',
      lineHeight: '125%',
      display: 'relative',
      width: '100%',
      color: 'var(--white, #FFFDF3)',
    },
    Welcome: {
      display: 'flex',
      width: '1920px',
      padding: '30px 10px',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
    },
  };