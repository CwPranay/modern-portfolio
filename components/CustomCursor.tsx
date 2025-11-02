'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [cursorVariant, setCursorVariant] = useState('default');
    const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 200 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleClick = (e: MouseEvent) => {
            const ripple = {
                id: Date.now(),
                x: e.clientX,
                y: e.clientY,
            };
            setRipples(prev => [...prev, ripple]);

            // Remove ripple after animation
            setTimeout(() => {
                setRipples(prev => prev.filter(r => r.id !== ripple.id));
            }, 600);
        };

        const handleMouseEnter = (e: Event) => {
            const target = e.target as HTMLElement;

            // Check for different element types
            if (target.tagName === 'A' || target.tagName === 'BUTTON') {
                setIsHovering(true);
                setCursorVariant('link');
            } else if (target.closest('a') || target.closest('button')) {
                setIsHovering(true);
                setCursorVariant('link');
            } else if (target.classList.contains('project-card') || target.closest('.group')) {
                setIsHovering(true);
                setCursorVariant('project');
            } else if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
                setIsHovering(true);
                setCursorVariant('input');
            }
        };

        const handleMouseLeave = () => {
            setIsHovering(false);
            setCursorVariant('default');
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('click', handleClick);

        // Add listeners to all interactive elements
        const interactiveElements = document.querySelectorAll('a, button, input, textarea, .group');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('click', handleClick);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, [cursorX, cursorY]);

    // Get colors based on variant and theme
    const getColors = () => {
        const isLight = document.documentElement.classList.contains('light');
        
        switch (cursorVariant) {
            case 'link':
                return {
                    dot: 'bg-blue-400',
                    ring: 'border-blue-400',
                    glow: 'bg-blue-400/30'
                };
            case 'project':
                return {
                    dot: 'bg-cyan-400',
                    ring: 'border-cyan-400',
                    glow: 'bg-cyan-400/30'
                };
            case 'input':
                return {
                    dot: 'bg-green-400',
                    ring: 'border-green-400',
                    glow: 'bg-green-400/30'
                };
            default:
                return {
                    dot: isLight ? 'bg-black' : 'bg-white',
                    ring: isLight ? 'border-black' : 'border-white',
                    glow: isLight ? 'bg-black/20' : 'bg-white/20'
                };
        }
    };

    const [theme, setTheme] = useState<'dark' | 'light'>('dark');
    
    useEffect(() => {
        const checkTheme = () => {
            setTheme(document.documentElement.classList.contains('light') ? 'light' : 'dark');
        };
        
        checkTheme();
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        
        return () => observer.disconnect();
    }, []);

    const colors = getColors();

    return (
        <>
            {/* Hide default cursor */}
            <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

            {/* Outer Ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <motion.div
                    animate={{
                        width: isHovering ? 0 : 40,
                        height: isHovering ? 0 : 40,
                        borderWidth: 2,
                        opacity: isHovering ? 0 : 1,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className={`rounded-full border ${colors.ring}`}
                    style={{
                        boxShadow: '0 0 0 1px rgba(0,0,0,0.1)'
                    }}
                />
            </motion.div>

            {/* Inner Dot */}
            <motion.div
                className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full ${colors.dot}`}
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                    boxShadow: '0 0 0 1px rgba(0,0,0,0.1)'
                }}
                animate={{
                    width: isHovering ? 12 : 8,
                    height: isHovering ? 12 : 8,
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 28 }}
            />

            {/* Glow Effect */}
            <motion.div
                className={`fixed top-0 left-0 pointer-events-none z-[9998] rounded-full blur-xl ${colors.glow}`}
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    width: isHovering ? 100 : 0,
                    height: isHovering ? 100 : 0,
                    opacity: isHovering ? 0.6 : 0,
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            />

            {/* Click Ripple Effects */}
            <AnimatePresence>
                {ripples.map((ripple) => (
                    <motion.div
                        key={ripple.id}
                        className={`fixed top-0 left-0 pointer-events-none z-[9997] rounded-full border-2 ${colors.ring}`}
                        style={{
                            left: ripple.x,
                            top: ripple.y,
                            translateX: '-50%',
                            translateY: '-50%',
                            boxShadow: '0 0 0 1px rgba(0,0,0,0.1)'
                        }}
                        initial={{ width: 0, height: 0, opacity: 1 }}
                        animate={{
                            width: 80,
                            height: 80,
                            opacity: 0,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    />
                ))}
            </AnimatePresence>
        </>
    );
}
