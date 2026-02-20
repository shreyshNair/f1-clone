import { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const podiumDrivers = [
    {
        position: 2,
        name: 'Max Verstappen',
        team: 'Red Bull Racing',
        points: '421 PTS',
        flag: '🇳🇱',
        image:
            'https://media.formula1.com/image/upload/c_lfill,w_300/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/redbullracing/maxver01/2025redbullracingmaxver01right.webp',
        className: 'second',
    },
    {
        position: 1,
        name: 'Lando Norris',
        team: 'McLaren',
        points: '423 PTS',
        flag: '🇬🇧',
        image:
            'https://media.formula1.com/image/upload/c_lfill,w_300/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/mclaren/lannor01/2025mclarenlannor01right.webp',
        className: 'first',
    },
    {
        position: 3,
        name: 'Oscar Piastri',
        team: 'McLaren',
        points: '410 PTS',
        flag: '🇦🇺',
        image:
            'https://media.formula1.com/image/upload/c_lfill,w_300/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/mclaren/oscpia01/2025mclarenoscpia01right.webp',
        className: 'third',
    },
];

const tableDrivers = [
    {
        pos: 1,
        name: 'Lando Norris',
        code: 'NOR',
        countryCode: 'GB',
        country: 'United Kingdom',
        team: 'McLaren',
        pts: 423,
        avatar:
            'https://media.formula1.com/image/upload/c_lfill,w_64/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/mclaren/lannor01/2025mclarenlannor01right.webp',
    },
    {
        pos: 2,
        name: 'Max Verstappen',
        code: 'VER',
        countryCode: 'NL',
        country: 'Netherlands',
        team: 'Red Bull Racing',
        pts: 421,
        avatar:
            'https://media.formula1.com/image/upload/c_lfill,w_64/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/redbullracing/maxver01/2025redbullracingmaxver01right.webp',
    },
    {
        pos: 3,
        name: 'Oscar Piastri',
        code: 'PIA',
        countryCode: 'AU',
        country: 'Australia',
        team: 'McLaren',
        pts: 410,
        avatar:
            'https://media.formula1.com/image/upload/c_lfill,w_64/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/mclaren/oscpia01/2025mclarenoscpia01right.webp',
    },
    {
        pos: 4,
        name: 'George Russell',
        code: 'RUS',
        countryCode: 'GB',
        country: 'United Kingdom',
        team: 'Mercedes',
        pts: 319,
        avatar:
            'https://media.formula1.com/image/upload/c_lfill,w_64/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/mercedes/georus01/2025mercedesgeorus01right.webp',
    },
    {
        pos: 5,
        name: 'Charles Leclerc',
        code: 'LEC',
        countryCode: 'MC',
        country: 'Monaco',
        team: 'Ferrari',
        pts: 242,
        avatar:
            'https://media.formula1.com/image/upload/c_lfill,w_64/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/ferrari/chalec01/2025ferrarichalec01right.webp',
    },
    {
        pos: 6,
        name: 'Lewis Hamilton',
        code: 'HAM',
        countryCode: 'GB',
        country: 'United Kingdom',
        team: 'Ferrari',
        pts: 156,
        avatar:
            'https://media.formula1.com/image/upload/c_lfill,w_64/q_auto/d_common:f1:2025:fallback:driver:2025fallbackdriverright.webp/v1740000000/common/f1/2025/ferrari/lewham01/2025ferrarilewham01right.webp',
    },
];

function Standings() {
    const [activeTab, setActiveTab] = useState('drivers');

    return (
        <AnimatedSection animation="fade-up">
            <section className="standings">
                <div className="standings-header">
                    <h2>2025 Season</h2>
                    <div className="standings-tabs">
                        <button
                            className={`tab-label ${activeTab === 'drivers' ? 'active' : ''}`}
                            onClick={() => setActiveTab('drivers')}
                        >
                            DRIVERS
                        </button>
                        <button
                            className={`tab-label ${activeTab === 'teams' ? 'active' : ''}`}
                            onClick={() => setActiveTab('teams')}
                        >
                            TEAMS
                        </button>
                    </div>
                </div>

                {activeTab === 'drivers' && (
                    <div className="tab-content" key="drivers">
                        <div className="standings-top">
                            <div className="standings-podium">
                                {podiumDrivers.map((driver, i) => (
                                    <AnimatedSection key={driver.position} animation="scale-in" delay={200 + i * 150}>
                                        <div className={`podium-card ${driver.className}`}>
                                            <div className="podium-number">{driver.position}</div>
                                            <div className="podium-driver">
                                                <div
                                                    className="podium-driver-img"
                                                    style={{ backgroundImage: `url('${driver.image}')` }}
                                                />
                                                <div className="driver-flag">{driver.flag}</div>
                                                <div className="driver-info">
                                                    <div className="driver-name">{driver.name}</div>
                                                    <div className="driver-team">{driver.team}</div>
                                                </div>
                                            </div>
                                            <div className="podium-points">{driver.points}</div>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </div>
                        <div className="standings-table-container">
                            <table className="standings-table">
                                <thead>
                                    <tr>
                                        <th className="col-pos">POS.</th>
                                        <th className="col-driver">DRIVER</th>
                                        <th className="col-nationality">NATIONALITY</th>
                                        <th className="col-team">TEAM</th>
                                        <th className="col-pts">PTS.</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableDrivers.map((driver, i) => (
                                        <tr key={driver.pos} className="table-row-animated" style={{ animationDelay: `${0.3 + i * 0.08}s` }}>
                                            <td className="col-pos">{driver.pos}</td>
                                            <td className="col-driver">
                                                <div className="table-driver">
                                                    <div
                                                        className="driver-avatar"
                                                        style={{ backgroundImage: `url('${driver.avatar}')` }}
                                                    />
                                                    <div className="driver-name-cell">
                                                        <span className="driver-name-bold">{driver.name}</span>
                                                        <span className="driver-code">{driver.code}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="col-nationality">
                                                <span className="country-code">{driver.countryCode}</span> {driver.country}
                                            </td>
                                            <td className="col-team">{driver.team}</td>
                                            <td className="col-pts">{driver.pts}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <a href="#" className="view-full-standings">View full standings</a>
                        </div>
                    </div>
                )}

                {activeTab === 'teams' && (
                    <div className="tab-content" key="teams">
                        <div className="standings-top">
                            <div style={{ textAlign: 'center', color: 'white', padding: '2rem' }}>
                                <h3>Teams Standings Placeholder</h3>
                                <p>McLaren - 423 PTS</p>
                                <p>Ferrari - 398 PTS</p>
                                <p>Red Bull - 389 PTS</p>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </AnimatedSection>
    );
}

export default Standings;
