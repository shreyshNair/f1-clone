import AnimatedSection from './AnimatedSection';

const picks = [
    {
        id: 1,
        title: 'How the Barcelona Shakedown will work',
        tag: 'Explained',
        image:
            'https://media.formula1.com/image/upload/c_fit,w_1584/q_auto/v1740000000/fom-website/2026/Barcelona%20Shakedown/16x9%20single%20image%20(51).webp',
        large: true,
    },
    {
        id: 2,
        title: 'The best social media from Day 2 in Barcelona',
        image:
            'https://media.formula1.com/image/upload/c_fit,w_1584/q_auto/v1740000000/fom-website/2026/Barcelona%20Shakedown/16x9%20single%20image%20(60).webp',
    },
    {
        id: 3,
        title: 'What happened on Day 1 of the Barcelona Shakedown?',
        image:
            'https://media.formula1.com/image/upload/c_fit,w_1584/q_auto/v1740000000/fom-website/2026/Barcelona%20Shakedown/16x9%20single%20image%20(56).webp',
    },
    {
        id: 4,
        title: 'Why is the Barcelona Shakedown being held in private?',
        image:
            'https://media.formula1.com/image/upload/t_16by9North/c_fit,w_1584/q_auto/v1740000000/fom-website/2026/Barcelona%20Shakedown/AOC-41.webp',
    },
    {
        id: 5,
        title: 'Alpine clarify rumours over Horner interest',
        image:
            'https://media.formula1.com/image/upload/t_16by9North/c_fit,w_1584/q_auto/v1740000000/fom-website/2026/Alpine/GettyImages-2220149247.webp',
    },
    {
        id: 6,
        title: "Everything you need to know about F1's new rules for 2026",
        image:
            'https://media.formula1.com/image/upload/t_16by9Centre/c_fit,w_1584/q_auto/v1740000000/fom-website/2026%20regulations/2026_Explainer_FIA_Above_1920x1080.webp',
    },
];

function EditorsPicks() {
    return (
        <section className="editors-picks">
            <AnimatedSection animation="fade-up">
                <div className="section-header">
                    <h2>EDITOR&apos;S PICKS</h2>
                </div>
            </AnimatedSection>
            <div className="picks-grid">
                {picks.map((pick, i) => (
                    <AnimatedSection key={pick.id} animation="scale-in" delay={i * 100}>
                        <div className={`pick-card ${pick.large ? 'large' : ''}`}>
                            <div
                                className="pick-image"
                                style={{ backgroundImage: `url('${pick.image}')` }}
                            />
                            <div className="pick-content">
                                {pick.tag && <span className="pick-tag">{pick.tag}</span>}
                                <h3>{pick.title}</h3>
                            </div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </section>
    );
}

export default EditorsPicks;
