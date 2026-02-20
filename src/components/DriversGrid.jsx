import AnimatedSection from './AnimatedSection';

const drivers = [
    {
        name: 'Max Verstappen',
        photo:
            'https://media.formula1.com/image/upload/c_lfill,w_314/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000000/common/f1/2026/redbullracing/maxver01/2026redbullracingmaxver01right.webp',
    },
    {
        name: 'Lewis Hamilton',
        photo:
            'https://media.formula1.com/image/upload/c_lfill,w_314/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000000/common/f1/2026/ferrari/lewham01/2026ferrarilewham01right.webp',
    },
    {
        name: 'Lando Norris',
        photo:
            'https://media.formula1.com/image/upload/c_lfill,w_314/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000000/common/f1/2026/mclaren/lannor01/2026mclarenlannor01right.webp',
    },
    {
        name: 'Charles Leclerc',
        photo:
            'https://media.formula1.com/image/upload/c_lfill,w_314/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000000/common/f1/2026/ferrari/chalec01/2026ferrarichalec01right.webp',
    },
    {
        name: 'George Russell',
        photo:
            'https://media.formula1.com/image/upload/c_lfill,w_314/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000000/common/f1/2026/mercedes/georus01/2026mercedesgeorus01right.webp',
    },
    {
        name: 'Oscar Piastri',
        photo:
            'https://media.formula1.com/image/upload/c_lfill,w_314/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000000/common/f1/2026/mclaren/oscpia01/2026mclarenoscpia01right.webp',
    },
    {
        name: 'Carlos Sainz',
        photo:
            'https://media.formula1.com/image/upload/c_lfill,w_314/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000000/common/f1/2026/williams/carsai01/2026williamscarsai01right.webp',
    },
    {
        name: 'Fernando Alonso',
        photo:
            'https://media.formula1.com/image/upload/c_lfill,w_314/q_auto/d_common:f1:2026:fallback:driver:2026fallbackdriverright.webp/v1740000000/common/f1/2026/astonmartin/feralo01/2026astonmartinferalo01right.webp',
    },
];

function DriversGrid() {
    return (
        <section className="drivers-section">
            <AnimatedSection animation="fade-up">
                <div className="drivers-section-header">
                    <h2>DRIVERS</h2>
                    <a href="#" className="view-all">View all</a>
                </div>
            </AnimatedSection>
            <div className="drivers-grid">
                {drivers.map((driver, i) => (
                    <AnimatedSection key={driver.name} animation="fade-up" delay={i * 80}>
                        <div className="driver-card">
                            <div
                                className="driver-photo"
                                style={{ backgroundImage: `url('${driver.photo}')` }}
                            />
                            <div className="driver-name">{driver.name}</div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </section>
    );
}

export default DriversGrid;
