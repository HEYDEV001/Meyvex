'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function FluidFlowGrid() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: false });
        if (!ctx) return;

        let animationFrameId: number;
        let width = 0;
        let height = 0;

        const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };

        const handleResize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.scale(dpr, dpr);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.targetX = e.clientX;
            mouse.targetY = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.targetX = -1000;
            mouse.targetY = -1000;
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        let time = 0;

        const render = () => {
            time += 0.008;

            // Mouse smooth interpolation
            mouse.x += (mouse.targetX - mouse.x) * 0.08;
            mouse.y += (mouse.targetY - mouse.y) * 0.08;

            const bgColor = '#f0f7ff';
            const lineBaseColor = '30, 64, 175'; // Neutral Slate-Blue
            const accentBlue = '29, 78, 216';

            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, width, height);

            const spacing = 35;
            const cols = Math.ceil(width / spacing) + 1;
            const rows = Math.ceil(height / spacing) + 1;

            ctx.lineWidth = 1.2;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * spacing;
                    const y = j * spacing;

                    // Trigonometric fluid turbulence angle
                    let angle = Math.sin(x * 0.003 + time) + Math.cos(y * 0.003 + time);

                    // Distance to mouse force field
                    const dx = mouse.x - x;
                    const dy = mouse.y - y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    let isNear = false;
                    if (dist < 220 && dist > 0) {
                        isNear = true;
                        const pushAngle = Math.atan2(dy, dx) + Math.PI;
                        const force = (1 - dist / 220);
                        angle = angle * (1 - force) + pushAngle * force;
                    }

                    const lineLen = isNear ? 22 : 14;
                    const x2 = x + Math.cos(angle) * lineLen;
                    const y2 = y + Math.sin(angle) * lineLen;

                    const alpha = isNear
                        ? 0.8
                        : (0.15 + Math.sin(x * 0.01 + y * 0.01 + time) * 0.1);

                    ctx.strokeStyle = isNear
                        ? `rgba(${accentBlue}, ${alpha})`
                        : `rgba(${lineBaseColor}, ${alpha})`;

                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(x2, y2);
                    ctx.stroke();
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden select-none bg-[#f0f7ff]">
            <canvas ref={canvasRef} className="absolute inset-0 block cursor-default" />

            <Link href="/" className="absolute top-6 left-6 z-20 md:top-8 md:left-8">
                <img
                    src="/logo.png"
                    alt="Meyvex"
                    className="h-9 w-auto md:h-11"
                />
            </Link>

            <Link
                href="/contact"
                className="absolute top-6 right-6 z-20 rounded-full bg-[#FFE862] px-5 py-2 text-sm font-medium uppercase tracking-tight text-[#242424] transition-transform hover:scale-105 md:top-8 md:right-8"
                style={{ letterSpacing: "-0.02em" }}
            >
                Contact
            </Link>

            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 pointer-events-none mix-blend-difference text-white">
                <span className="font-mono text-xs tracking-widest uppercase mb-3 text-blue-400">
          {/* // FLUID_VECTOR_STREAM */}
                </span>
                <h1 className="font-mono text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none">
                    CURRENT
                </h1>
                <p className="mt-4 font-mono text-xs md:text-sm max-w-lg opacity-70">
                    Smooth directional flow field rendered in calm, neutral blue tones.
                </p>
            </div>
        </div>
    );
}
