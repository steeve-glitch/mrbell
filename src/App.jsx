import React from 'react';
import Background from './components/Background';
import Carousel from './components/Carousel';

function App() {
  return (
    <Background>
      <div className="min-h-screen flex flex-col items-center justify-center p-4">

        {/* Header Section */}
        {/* Header Section - Removed */}
        <div className="mt-16"></div>

        {/* Main Content */}
        <main className="w-full max-w-7xl mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--accent-glow)] mb-8">
              Choose Your App
            </h2>
          </div>

          <Carousel />
        </main>

        {/* Footer */}
        <footer className="mt-16 text-[var(--text-secondary)] text-sm font-light">
          <p>&copy; {new Date().getFullYear()} Mr. Bell's Apps. All rights reserved.</p>
        </footer>

      </div>
    </Background>
  );
}

export default App;
