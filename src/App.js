import React from "react";
import PortfolioContainer from "./PortfolioContainer.js";
import './components/styles/App.css'
import background from './components/images/background.png'


const App = () => {
    return (
        <div >
            <div style={
                {
                    backgroundImage: `url(${background})`,
                    backgroundSize: "contain",
                    height: "100vh",
                    width: "100vw",
                    overflow: "auto",
                    imageRendering: "crisp-edges",
                    MozImageRendering: "-moz-crisp-edges",
                    msInterpolationMode: "nearest-neighbor",
                    WebkitImageRendering: "-webkit-optimize-contrast",
                    OImageRendering: "-o-crisp-edges",

                }
            }>
                
                <PortfolioContainer />
            </div>
        </div >
    );
}
export default App;