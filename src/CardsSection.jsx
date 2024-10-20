import React from 'react'
import "./MainSection.css"
import "./CardsSection.css"
export default function CardsSection() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const cardsData = [
        {
            iconClass: "fa-solid fa-fire",
            gradient: "linear-gradient(to right, #ff7e5f, #feb47b)",
            id: '3'
        },
        {
            iconClass: "fas fa-tint", // Corrected the "drop" icon to "tint"
            gradient: "linear-gradient(to right, #6a11cb, #2575fc)",
            id: '2'

        },
        {
            iconClass: "fas fa-leaf", // Corrected "plant" icon to "leaf"
            gradient: "linear-gradient(to right, #43cea2, #185a9d)",
            id: '1'

        },
    ];
    return (
        <section className='cards-section'>
            <div className="cards-container ">
                {cardsData.map((card, index) => (
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={index}>
                        <div
                            className="card"
                            style={{
                                background: card.gradient,
                                color: "#fff",
                                height: "200px",
                                borderRadius: "10px",
                                textAlign: "center",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            onClick={() => scrollToSection(card.id)}
                        >
                            <i className={`${card.iconClass}`} style={{ fontSize: "6rem" }}></i>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
