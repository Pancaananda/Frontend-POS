import React from 'react';

const Layout: React.FC = ({ children }) => {
    return (
        <div>
            <header>
                {/* Header component can be included here */}
            </header>
            <main>
                {children}
            </main>
            <footer>
                {/* Footer content can be added here */}
            </footer>
        </div>
    );
};

export default Layout;