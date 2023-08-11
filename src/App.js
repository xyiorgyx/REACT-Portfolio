import React from "react";
import PortfolioContainer from "./PortfolioContainer.js";
import BackGround from './components/images/background.png'

const Styles = {
    bg: {
        backgroundImage: `url(${BackGround})`,
        backgroundSize: 'contain',
        height:'100vh',
        width:'100vw',
        overflow: 'auto'
    },
}

const App = () => {
    return (
        <div>
            <div class="background" style={Styles.bg}>
                <PortfolioContainer />
                {/* <Footer /> */}
            </div>
        </div>
    );
}
export default App;