import BackgroundImage from '../images/background.png'
export const Styles = {
    navBox:{
        display: 'flex',
        width: '100%',
        height: '239px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '47px',
        flexShrink: '0',
    },
    NavList: {
      display: 'flex',
      alignItems:'center',
      gap:'48px'
    },
    NavButtons: {
      position:'relative',
      color: '#FFFDF3',
      fontFamily: 'Lexend Exa',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
      textDecoration: 'none', // Remove underline from normal state
      transition: 'color 0.3s', // Smooth color transition
    
    },
    Name: {
      /* Desktop/H1 */
      fontFamily: 'MuseoModerno',
      fontSize: '120px',
      fontStyle: 'normal',
      fontWeight: '700',
      lineheight: '125%',
    },
    iconDiv:{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '57px', 
    }
  
  
  };