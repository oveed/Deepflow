import React from "react";
import "./MainSection.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const MainSection = () => {


    return (
        <div className="header">
            {/* Content before waves */}
            <div className="inner-header flex">

                <h1 style={{marginBottom: "5rem "}}>Simple CSS Waves</h1>
                
            </div>

            <div style={{
                background: 'linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%)'
            }}>
                <svg
                    className="waves"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28"
                    preserveAspectRatio="none"
                    shapeRendering="auto"
                >
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className="parallax">
                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default MainSection;
