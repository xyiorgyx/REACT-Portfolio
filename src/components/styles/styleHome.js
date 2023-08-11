import BackgroundImage from '../images/background.png'

export const Styles = {
  Main: {
    display:'flex',
    flexDirection:'column'
  },
  brightCornerLight: {
    width: '25.25rem',
    height: '24.1875rem',
    flexShrink: '0',
    borderRadius: '404px',
    background: '#5665EF',
    filter: 'blur(100px)',
    position: 'absolute',
    left: '-7%',
    top: '-8%',
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
    width: '43.5rem',
    height: '56.5625rem',
    flexShrink: '0',
    left: '57%',
    top:"-4.5rem"
  },
  Name: {
    position: 'relative',
    display: 'inline-block',
    fontFamily: 'MuseoModerno',
    fontSize: '7.5rem',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '125%',
    width: '51.875rem;',
    color: 'var(--white, #FFFDF3)',
    top: '33rem',
    right: '35rem',
  },
  Welcome: {
    fontFamily: 'Lecend Exa',
    fontSize: '2.25rem',
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: '125%',
    color: '#FFFDF3',
    display: 'flex',
    height: '8%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    borderStyle: 'solid',
    borderWidth: '1px 0 1px 0',
  },
  About: {
    width: '100%',
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  CodingAboutBox: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  EarthBox: {
    display: 'flex',
    width: '51.875rem',
    padding: '12.5rem 0',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.625rem',
    alignSelf: 'stretch',
    borderRight: '2px solid var(--white, #FFFDF3)',
    borderBottom: '2px solid var(--white, #FFFDF3)',
    borderLeft: '2px solid var(--white, #FFFDF3)',
    marginLeft: '5%'
  },
  EarthPhoto: {
    width: '26.3125rem',
    height: '26.3125rem',
    flexShrink: '0',
  },
  IntroductionBox: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    display: 'flex',
    width: '60.625rem',
    padding: '14rem ',
    gap: '0.625rem',
    flex: '1 0 0',
  },
  Introduction: {
    position: 'relative',
    display: 'flex',
    width: '34.75rem',
    flexShrink: '0',
    color: 'var(--white, #FFFDF3)',
    fontFamily: 'Lexend Exa',
    fontSize: '1.25rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '120 %',
  },
  CodingPic: {
    width: '60.625rem',
    height: '16.1875',
    flexShrink: '0',
  },
  Bottom: {
    width: '100%',
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  FourthDimmension: {
    display: 'flex'
  },
  MyWorkDiv: {
    display: 'flex',
    width: '78.25rem',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '0.625rem',
    alignSelf: 'stretch',
    borderBottom: '1px solid var(--white, #FFFDF3)',

  },
  MyWork: {
    color: 'var(--white, #FFFDF3)',
  fontFamily: 'Lexend Giga',
  fontSize: '1.25rem',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '1.5rem',
  margin: '0 20rem'
}


}