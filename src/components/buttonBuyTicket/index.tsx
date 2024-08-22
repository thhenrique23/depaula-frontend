import Script from 'next/script';
import React from 'react';

// import { Container } from './styles';

const ButtonBuyTicket: React.FC = () => {
    return <>
        <div className="mt-4 flex justify-center">
            <button
                style={{ height: '45px' }}
                className="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true"
            >
                Quero participar
            </button>
        </div>
        <Script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></Script>
    </>
}

export default ButtonBuyTicket;