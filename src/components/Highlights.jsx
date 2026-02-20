import AnimatedSection from './AnimatedSection';

const highlights = [
    {
        id: 1,
        title: 'F1 Barcelona Shakedown 2026: Day 2 Highlights',
        duration: '4:22',
        thumbnail:
            'https://d2n9h2wits23hf.cloudfront.net/image/v1/static/6057949432001/a71b9fa0-fdab-410e-860f-e02bf2ce9b9f/2f319163-a35a-4f26-9e6c-7c989e251367/864x486/match/image.jpg',
    },
    {
        id: 2,
        title: 'F1 Barcelona Shakedown 2026: Day 1 Highlights',
        duration: '8:57',
        thumbnail:
            'https://d2n9h2wits23hf.cloudfront.net/image/v1/static/6057949432001/36d64547-a01b-4225-bda4-74f61909e3d9/358691ba-cd9d-400b-9217-83fef9ba6f8c/864x486/match/image.jpg',
    },
    {
        id: 3,
        title: 'Race Highlights: 2025 Abu Dhabi Grand Prix',
        duration: '8:14',
        thumbnail:
            'https://d2n9h2wits23hf.cloudfront.net/image/v1/static/6057949432001/9be4dbc6-5a52-46b1-9103-dec7b7e81ae0/00eba1d0-2096-4389-b33d-9b66cac61293/864x486/match/image.jpg',
    },
    {
        id: 4,
        title: 'Formula 2 Highlights: 2025 Yas Island Feature Race',
        duration: '7:57',
        thumbnail:
            'https://d2n9h2wits23hf.cloudfront.net/image/v1/static/6057949432001/d09fe3a7-37fe-42e7-aa86-9aec946926fa/139ede2f-a352-4ceb-bed0-e84289902c51/864x486/match/image.jpg',
    },
    {
        id: 5,
        title: 'Qualifying Highlights: 2025 Abu Dhabi Grand Prix',
        duration: '7:21',
        thumbnail:
            'https://d2n9h2wits23hf.cloudfront.net/image/v1/static/6057949432001/c43abfd1-0d2f-40e8-bb74-d405174f7d6c/5705347a-4b6c-40c9-842c-84ffadf95002/864x486/match/image.jpg',
    },
    {
        id: 6,
        title: 'Formula 2 Highlights: 2025 Yas Island Sprint Race',
        duration: '7:49',
        thumbnail:
            'https://d2n9h2wits23hf.cloudfront.net/image/v1/static/6057949432001/69a6236b-49fc-4e58-af29-b494619fe593/3b18dde3-ac78-43b5-b5ba-f2af2d647057/864x486/match/image.jpg',
    },
];

function Highlights() {
    return (
        <section className="highlights">
            <AnimatedSection animation="fade-up">
                <div className="section-header">
                    <h2>HIGHLIGHTS</h2>
                    <a href="#" className="view-all">View All</a>
                </div>
            </AnimatedSection>
            <div className="highlights-grid">
                {highlights.map((item, i) => (
                    <AnimatedSection key={item.id} animation="fade-up" delay={i * 100}>
                        <div className="highlight-card">
                            <div
                                className="highlight-thumbnail"
                                style={{ backgroundImage: `url('${item.thumbnail}')` }}
                            >
                                <div className="play-button">▶</div>
                                <span className="video-duration">{item.duration}</span>
                            </div>
                            <h3>{item.title}</h3>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </section>
    );
}

export default Highlights;
