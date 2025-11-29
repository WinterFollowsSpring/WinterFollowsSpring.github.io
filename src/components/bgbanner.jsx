import * as React from 'react';
import Row from 'react-bootstrap/Row';

const BGBanner = () => (
    <div className="d-flex flex-column justify-content-center text-center mb-3">
        <p className="fs-5 fst-italic">Follow us on FB or Instagram for Vendor Shows & Our Latest Products!</p>
        <div className="d-flex flex-row justify-content-center fs-3">
            <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/bonnieglen2021"
                className="text-decoration-none link-dark me-3"><i className="bi bi-facebook"></i></a>
            <a target="_blank" rel="noopener noreferrer"
                href="https://instagram.com/bonnieglenluxurycandles" className="link-dark text-decoration-none"><i
                    className="bi bi-instagram"></i></a>
        </div>
    </div >
);

export default BGBanner;