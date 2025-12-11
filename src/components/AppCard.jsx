import React from 'react';

const AppCard = ({ title, description, icon, link }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`
        glass-panel block p-8 w-[220px] h-[340px] flex-shrink-0 
        transition-all duration-500 ease-out
        hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:bg-[rgba(255,255,255,0.08)] cursor-pointer
        flex flex-col justify-between group
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
                <div className="w-full py-3 text-center text-sm font-medium text-[var(--bg-dark)] bg-white rounded-full hover:bg-opacity-90 transition-colors">
                    Launch App
                </div>
            </div>
        </a>
    );
};

export default AppCard;
