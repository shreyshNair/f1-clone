import AnimatedSection from './AnimatedSection';

const videos = [
    {
        id: 1,
        title: "First look at Ferrari's 2026 car",
        duration: '10:06',
        thumbnail:
            'https://d2n9h2wits23hf.cloudfront.net/image/v1/static/6057949432001/b662ec84-8df8-418c-a7a4-e3a43dc74ca0/329b6d4b-0007-4e9e-b7a2-3918ae5d88fa/864x486/match/image.jpg',
        featured: true,
    },
    {
        id: 2,
        title: "Komatsu pleased with 'lots of improvements' in Day 3",
        duration: '2:29',
        thumbnail:
            'https://d2n9h2wits23hf.cloudfront.net/image/v1/static/6057949432001/a60321b3-ab33-4f31-a98c-76ad46e521c0/06afd6a6-c166-4420-abe7-548624495620/864x486/match/image.jpg',
        featured: false,
    },
    {
        id: 3,
        title: "Bearman impressed with Haas' 'very clean running' in Barcelona",
        duration: '2:26',
        thumbnail:
            'https://d2n9h2wits23hf.cloudfront.net/image/v1/static/6057949432001/fa7a9005-8b50-4880-a7a1-51312dd1c76f/f0899df3-5125-4ef1-8176-37d1ca6ce7f3/864x486/match/image.jpg',
        featured: false,
    },
    {
        id: 4,
        title: 'F1 Barcelona Shakedown 2026: Day 2 Highlights',
        duration: '4:22',
        thumbnail:
            'https://images.unsplash.com/photo-1574768565039-b9a622b72bf8?q=80&w=1000&auto=format&fit=crop',
        featured: false,
    },
];

function FeaturedVideo() {
    return (
        <section className="featured-video">
            <AnimatedSection animation="fade-up">
                <div className="section-header">
                    <h2>FEATURED VIDEO</h2>
                    <a href="#" className="view-all">View all</a>
                </div>
            </AnimatedSection>
            <div className="video-grid">
                {videos.map((video, i) => (
                    <AnimatedSection key={video.id} animation="fade-up" delay={i * 120}>
                        <div className={`video-card ${video.featured ? 'featured' : ''}`}>
                            <div
                                className="video-thumbnail"
                                style={{ backgroundImage: `url('${video.thumbnail}')` }}
                            >
                                <div className="play-button">▶</div>
                                <span className="video-duration">{video.duration}</span>
                            </div>
                            <h3>{video.title}</h3>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </section>
    );
}

export default FeaturedVideo;
