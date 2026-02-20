import { useEffect, useState } from 'react';

function PageLoader() {
    const [phase, setPhase] = useState('loading'); // 'loading' | 'exiting' | 'done'

    useEffect(() => {
        // Start exit animation after a brief delay
        const exitTimer = setTimeout(() => setPhase('exiting'), 1200);
        // Fully remove loader after exit transition
        const doneTimer = setTimeout(() => setPhase('done'), 1900);

        return () => {
            clearTimeout(exitTimer);
            clearTimeout(doneTimer);
        };
    }, []);

    if (phase === 'done') return null;

    return (
        <div className={`page-loader ${phase === 'exiting' ? 'loader-exit' : ''}`}>
            <div className="loader-content">
                <div className="loader-logo">F1</div>
                <div className="loader-bar-track">
                    <div className="loader-bar-fill" />
                </div>
                <div className="loader-tagline">FORMULA 1®</div>
            </div>
        </div>
    );
}

export default PageLoader;
