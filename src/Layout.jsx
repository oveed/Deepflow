import React from 'react'
import MainSection from "./MainPage";
import CardsSection from "./CardsSection";
import PlantSection from "./PlantSection";
import WaterSection from "./WaterSection";
import FireSection from "./FireSection";
export default function Layout() {
    return (
        <div className="App">
            <MainSection />
            <CardsSection />
            <PlantSection />
            <WaterSection />
            <FireSection />
        </div>
    )
}
