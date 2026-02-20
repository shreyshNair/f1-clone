import { useInView } from '../hooks/useInView';

/**
 * Wrapper component that reveals its children with an animation
 * when they scroll into the viewport.
 *
 * @param {string} animation - CSS class for the animation type: 'fade-up', 'fade-in', 'fade-left', 'fade-right', 'scale-in'
 * @param {number} delay - delay in ms before animation starts
 * @param {string} className - additional class names
 */
function AnimatedSection({ children, animation = 'fade-up', delay = 0, className = '', ...props }) {
    const [ref, isInView] = useInView();

    return (
        <div
            ref={ref}
            className={`animated-section ${animation} ${isInView ? 'in-view' : ''} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
            {...props}
        >
            {children}
        </div>
    );
}

export default AnimatedSection;
