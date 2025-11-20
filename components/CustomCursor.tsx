'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 20, stiffness: 300 }; // faster & visible
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const checkMobile = () => {
            const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            setIsMobile(touch || window.innerWidth <= 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        window.addEventListener('mousemove', moveCursor);

        const interactive = document.querySelectorAll('a, button, .cursor-hover');

        interactive.forEach((el) =>
            el.addEventListener('mouseenter', () => setIsHovering(true))
        );
        interactive.forEach((el) =>
            el.addEventListener('mouseleave', () => setIsHovering(false))
        );

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    if (isMobile) return null;

    return (
        <>
            {/* REMOVE the “cursor:none” except for the ring element */}
            <style jsx global>{`
                body {
                    cursor: pointer;
                }
                a, button {
                    cursor: pointer;
                }
            `}</style>

            {/* Cursor Ring */}
            <motion.div
                className="fixed pointer-events-none z-[9999] rounded-full"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <motion.div
                    className="rounded-full border border-[#3B82F6]"
                    animate={{
                        width: isHovering ? 28 : 14,
                        height: isHovering ? 28 : 14,
                        boxShadow: isHovering
                            ? '0 0 20px rgba(164, 197, 252, 0.5)'
                            : '0 0 10px rgba(62, 129, 236, 0.3)',
                        backgroundColor: 'rgba(59,130,246,0.15)',
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 28,
                    }}
                />
            </motion.div>
        </>
    );
}
