import React from 'react';
import AppCard from './AppCard';

const apps = [
    {
        id: 1,
        title: 'Theme Clock',
        description: 'A customizable digital clock with beautiful themes for your workspace.',
        icon: '⏰',
        link: 'https://themeclock.app',
        isComingSoon: false
    },
    {
        id: 2,
        title: 'Exam Timer',
        description: 'Professional exam proctoring timer with customizable alerts and intervals.',
        icon: '⏳',
        link: 'https://examtimer.app', // Placeholder
        isComingSoon: true
    },
    {
        id: 3,
        title: 'Flash Cards',
        description: 'Master any subject with our intelligent spaced-repetition flash cards.',
        icon: '🎴',
        link: '#',
        isComingSoon: true
    },
    {
        id: 4,
        title: 'Notes',
        description: 'A minimal, distraction-free note taking app for deep work.',
        icon: '📝',
        link: '#',
        isComingSoon: true
    }
];

const Carousel = () => {
    return (
        <div className="w-full overflow-x-auto pb-16 pt-8 px-4 md:px-0 hide-scrollbar flex justify-center">
            <div className="flex space-x-12 px-8">
                {apps.map((app) => (
                    <AppCard key={app.id} {...app} />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
