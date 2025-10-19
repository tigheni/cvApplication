import { useState } from 'react';
import WelcomePage from '../components/welcomePage.jsx';

function ResumeBuilder() {
    return <div>Resume Builder Component</div>;
}
function App() {
    const [visible, setVisible] = useState(false);
    const [leaving, setLeaving] = useState(false);

    function handleClick() {
        setLeaving(true);
        setTimeout(() => setVisible(true), 500);
    }

    return (
        <>
            {!visible && (
                <WelcomePage
                    onShow={handleClick}
                    className={leaving ? 'slide-up' : ''}
                />
            )}
            {visible && <ResumeBuilder />}
        </>
    );
}

export default App;
