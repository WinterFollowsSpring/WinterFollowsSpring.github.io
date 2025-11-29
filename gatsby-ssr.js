import * as React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <link
            key="loftygoals"
            rel="preload"
            href="/fonts/LoftygoalsRegular-9Y5Xy.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
        />,
        <link
            key="lulo-clean-w01-one-bold"
            rel="preload"
            href="/fonts/Lulo Clean W01 One Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
        />,
        <link
            key="spacegrotesk"
            rel="preload"
            href="/fonts/SpaceGrotesk-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
        />
    ]);
}