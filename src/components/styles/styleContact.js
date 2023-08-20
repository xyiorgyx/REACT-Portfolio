export const Styles = {
    messageBox:{

    },
    message:{

    },
    pageHeaderDiv: {
        display: 'flex',
        padding: ' 30px 383px 30px 10px',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '10px',
        borderTop: '2px solid var(--white, #FFFDF3)',
        borderBottom: '2px solid var(--white, #FFFDF3)',
    },
    pageHeader: {
        color: 'var(--white, #FFFDF3)',
        fontFamily: 'MuseoModerno',
        fontSize: '80px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '125%', /* 100px */
    },
    contactContainer: {
        maxWidth: '70%',
        margin: '0 auto',
        padding: '3%',
    },
    contactForm: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '15px',
    },
    contactFormLabel: {
        fontWeight: 'bold',
        color: 'white'
    },
    contactFormInput: {
        width: '60%',
        padding: '10px',
        border: '1px solid #ccc',
    },
    contactFormTextarea: {
        width: '100%',
        height: "20rem",
        padding: '10p',
        border: '1px solid #ccc',

    },
    contactFormButton: {
        padding: '10px 20px',
        background: 'rgba(86, 101, 239, 0.50)',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        width: '20%',
        borderRadius:'25px'
    },
}