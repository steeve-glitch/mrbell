import React from 'react';

const AppCard = ({ title, description, icon, link, isComingSoon }) => {
    return (
        <a
            href={isComingSoon ? '#' : link}
            className={`
        glass-panel block p-8 w-[300px] h-[400px] flex-shrink-0 
        transition-all duration-300 ease-out
        ${!isComingSoon && 'hover:transform hover:-translate-y-2 hover:bg-[rgba(255,255,255,0.08)] cursor-pointer'}
        ${isComingSoon && 'opacity-60 cursor-default'}
        flex flex-col justify-between
      `}
        >
            <div className="flex flex-col items-center text-center space-y-6 mt-8">
                <div className="text-6xl filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                    {icon}
                </div>
                <h3 className="text-2xl font-semibold tracking-wide text-[var(--text-primary)]">
                    {title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed px-2">
                    {description}
                </p>
            </div>

            <div className="w-full">
                {isComingSoon ? (
                    <div className="w-full py-3 text-center text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] border border-[var(--glass-border)] rounded-full">
                        Coming Soon
                    </div>
                ) : (
                    <div className="w-full py-3 text-center text-sm font-medium text-[var(--bg-dark)] bg-white rounded-full hover:bg-opacity-90 transition-colors">
                        Launch App
                    </div>
                )}
            </div>
        </a>
    );
};

export default AppCard;
