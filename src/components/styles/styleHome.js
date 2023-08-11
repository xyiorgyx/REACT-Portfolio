import BackgroundImage from '../images/background.png'

export const Styles = {
  background: {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: 'contain',
    height: '102vh',
    width: '100vw',
    position: 'fixed',
    overflow: 'auto'
  },
  Main: {
    height: '90vh',
    width: '100vw',
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
    top: '-33%',
    right: '30%',
    flexShrink: '0',
    borderRadius: '448px',
    background: 'var(--white, #FFFDF3)',
    filter: 'blur(100px)',
    position: 'absolute'
  },
  selfiePicture: {
    position: 'relative',
    marginLeft:'58%',
    width: '696px',
    height: '905px',
    flexShrink: '0',
  },
  Name: {
    /* Desktop/H1 */
    display: 'inline-block',
    fontFamily: 'MuseoModerno',
    fontSize: '7.5rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '125%',
    margin: '0',
    width: '40%',
    color: 'var(--white, #FFFDF3)',
    position: 'relative',
    top: '-50%',
    left: '7%',
   
  },
  Welcome: {
    fontFamily: 'Lecend Exa',
    fontSize: '2.25rem',
    fontWeight:'600',
    fontStyle:'normal',
    lineHeight:'125%',
    color: '#FFFDF3',
    display: 'flex',
    height:'8%',
    width: '100%',
    padding: '30px 10px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    borderStyle: 'solid',
    borderWidth: '1px 0 1px 0',
  },
  About:{
    height: '100vh',
    width: '100vw',
    display: 'inline-flex',
    alignItems: 'flex-start',
  },
  EarthBox:{
    position: 'relative',
    display: 'flex',
    height:'100%',
    width: '51.875rem',
    padding: '12.5rem 0rem',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderStyle: 'solid',
    borderWidth: '1px 1px 1px 1px',
    left:'2px'
  },

  EarthPhoto:{
    position: 'relative',
    width: '26.3125rem',
    height: '26.3125rem',
    flexShrink: '0',
  },

};