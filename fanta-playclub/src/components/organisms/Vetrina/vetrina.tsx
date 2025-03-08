import React, { useEffect, useRef } from "react";
import { HomePageVetrinaContent } from "../../../API/APIData";
import VetrinaImage from "../../atoms/VetrinaImage/vetrinaImage";
import VetrinaMap from "../../molecules/VetrinaMap/VetrinaMap";
import VetrinaMultiText from "../../molecules/VetrinaMultiText/VetrinaMultiText";
import VetrinaText from "../../molecules/VetrinaText/vetrinaText";
import "./style.scss";

const Vetrina: React.FC<HomePageVetrinaContent> = ({
    type,
    title,
    content,
    list,
    moreContent,
    image,
}) => {
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
                    {type.startsWith("vetrinaStandard") && (
                        <>
                            <div
                                ref={textRef}
                                className="col-12 col-md-5 col-lg-6 text-container vetrina-container justify-content-center"
                            >
                                <VetrinaText
                                    title={title}
                                    content={content}
                                    list={list}
                                    moreContent={moreContent}
                                />
                            </div>

                            <div className="col-12 col-md-7 col-lg-6 image-container vetrina-container justify-content-center">
                                <VetrinaImage imgSrc={image} alt={title} />
                            </div>
                        </>
                    )}

                    {type.includes("map") && (
                        <div
                            ref={textRef}
                            className="col-12 text-container vetrina-container justify-content-center"
                        >
                            <VetrinaMap />
                        </div>
                    )}

                    {type === "multiVetrina" && (
                        <>
                            <h2 style={{ textAlign: "center" }}>{title}</h2>
                            {list.map((item, index) => {
                                <div
                                    key={index}
                                    className="col-4 text-container vetrina-container justify-content-center bg-black"
                                >
                                    <VetrinaMultiText list={item} />
                                </div>;
                            })}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Vetrina;
