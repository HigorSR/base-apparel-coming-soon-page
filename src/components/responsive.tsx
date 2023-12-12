import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const MobileComponent = dynamic(() => import('./mobile/mobile'));
const DesktopComponent = dynamic(() => import('./desktop/desktop'));

const ResponsiveComponent: React.FC = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Verifica se o código está sendo executado no lado do cliente antes de usar window
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []); // O segundo argumento vazio garante que o efeito ocorra apenas uma vez durante a montagem do componente

    if (windowWidth === 0) {
        // Aguarde o valor inicial ser definido antes de renderizar
        return null;
    }

    return (
        <div>
            {windowWidth < 1280 ? <MobileComponent /> : <DesktopComponent />}
        </div>
    );
};

export default ResponsiveComponent;
