import React from 'react';

type Props = {};

const Footer = (props: Props) => {
    return <footer className="flex items-center justify-center w-full h-24 border-t border-background">
        <a
            className="flex items-center justify-center font-proxima"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
        >
            Powered by Christian Lance, a future Bambee developer!
        </a>
    </footer>;
};

export default Footer;
