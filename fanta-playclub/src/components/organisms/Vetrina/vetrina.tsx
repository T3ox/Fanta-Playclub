import React, { useEffect, useRef } from "react";
import VetrinaImage from "../../atoms/VetrinaImage/vetrinaImage";
import VetrinaText from "../../molecules/VetrinaText/vetrinaText";
import  VetrinaProps  from "./types";
import "./style.scss"

const Vetrina: React.FC<VetrinaProps> = ({ type, text, description, image }) => {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    textRef.current?.classList.add("fade-in");
                }
            });
        }, options);

        const currentTextRef = textRef.current;

        if (currentTextRef) {
            observer.observe(currentTextRef);
        }

        // Pulizia dell'Observer quando il componente si smonta
        return () => {
            if (currentTextRef) {
                observer.unobserve(currentTextRef);
            }
        };
    }, []);

    return (
        <section className="dynamic-container" id={type}>
            <div className="container container-vetrina">
                <div className="row justify-content-center">
                    <div
                        ref={textRef}
                        className="col-12 col-md-5 col-lg-6 text-container vetrina-container justify-content-center"
                    >
                        <VetrinaText text={text} description={description} />
                    </div>
                    <div className="col-12 col-md-7 col-lg-6 image-container vetrina-container justify-content-center">
                        <VetrinaImage imgSrc={image} alt={text} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vetrina;