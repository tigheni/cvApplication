import cvMaker from '/src/assets/cvMaker.jpg';
import './components.css';
export default function WelcomePage(props) {
    return (
        <>
            <div className={props.className}>
                <img
                    src={cvMaker}
                    className="backgroundImg"
                    alt="cv Maker background"
                />
                <div className="mainOverlay">
                    <h1 className="mainHeading">
                        Build your Resume instantly with our easy-to-use online
                        Resume builder
                    </h1>
                    <button className="mainButton" onClick={props.onShow}>
                        Start Now
                    </button>
                </div>
            </div>
        </>
    );
}
