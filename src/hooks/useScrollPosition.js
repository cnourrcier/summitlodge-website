import { useEffect, useState } from "react";

/**
 * Custom hook to track scroll position and provide scroll-based states
 * @param {Object} options Configuration options 
 * @param {number} options.threshold Scroll position threshold in pixels
 * @param {boolean} options.mobileOnly Only track scrolling on mobile devices
 * @param {number} options.mobileBreakpoint Width in pixels below which is considered mobile
 * @returns {Object} Scroll position state object
 */
const useScrollPosition = ({
    threshold = 100,
    mobileOnly = false,
    mobileBreakpoint = 768
} = {}) => {
    const [scrollY, setScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [direction, setDirection] = useState('none'); // 'up', 'down', or 'none'
    const [prevScrollY, setPrevScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Skip if mobileOnly is true and screen width is greater than mobileBreakpoint
            if (mobileOnly && window.innerWidth > mobileBreakpoint) {
                setIsScrolled(false);
                setDirection('none');
                return;
            }

            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);
            setIsScrolled(currentScrollY > threshold);

            if (currentScrollY > prevScrollY) {
                setDirection('down');
            } else if (currentScrollY < prevScrollY) {
                setDirection('up');
            }

            setPrevScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // Run once on mount to set initial values
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [threshold, mobileOnly, mobileBreakpoint, prevScrollY]);

    return { scrollY, isScrolled, direction };
};

export default useScrollPosition;