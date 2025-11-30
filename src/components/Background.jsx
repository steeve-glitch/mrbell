import React from 'react';

const Background = ({ children }) => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-[var(--bg-dark)]">
            {/* Gradient Orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[var(--bg-gradient-mid)] opacity-40 blur-[100px] animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[var(--bg-gradient-end)] opacity-40 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute top-[20%] right-[20%] w-[30vw] h-[30vw] rounded-full bg-[var(--accent-glow)] opacity-20 blur-[80px] animate-pulse" style={{ animationDelay: '4s' }} />

            {/* Content Layer */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
};

export default Background;
