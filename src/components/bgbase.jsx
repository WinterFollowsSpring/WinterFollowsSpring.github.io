import * as React from 'react';
import BGNavbar from './bgnavbar';
import BGFooter from './bgfooter';
import BGBanner from './bgbanner';
import Container from 'react-bootstrap/Container';

const containerLight = "bg-light";
const containerCenter = "d-flex justify-content-center"

export default function BGBase(props) {
    const { pageName, light = false, center = false } = props;
    const containerClassList = ["p-3", "space-grotesk-font"];
    if (light) { containerClassList.push(containerLight); }
    if (center) { containerClassList.push(containerCenter); }
    const containerClass = containerClassList.join(" ");
    
    return (
        <main>
            <BGNavbar pageName={pageName} />
            <BGBanner />
                <Container className={containerClass}>
                    {props.children}
                </Container>
            <BGFooter pageName={pageName} />
        </main>
    );
}