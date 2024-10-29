import BigNumbers from "../../components/BigNumber/index.tsx";
import { About } from "../../components/About";
import { AboutEvent } from "../../components/AboutEvent/intex";
import { Banner } from "../../components/Banner";
import { Schedule } from "../../components/Schedule";
import { Slider } from "../../components/Slider";
import { Speakers } from "../../components/Speakers";
import { Strip } from "../../components/Strip";
import { Ticket } from "../../shared/Ticket";
import { SponsorComponent } from "../../components/Sponsors/SponsorComponent.tsx";
import { Organization } from "../../components/Organization/index.tsx";
// import { Shop } from "../../components/Shop/index.tsx";
import { SponsorsBanner } from "../../components/Sponsors/SponsorsBanner.tsx";

export function Home() {
    const sponsorTypes = [
        "terabyte",
        "gigabyte",
        "megabyte",
        "parceiros",
    ];

    return (
        <>
            <Slider />
            <Strip.Root>
            <Strip.Content />
            </Strip.Root>
            <About />
            <BigNumbers />
            <Banner />
            <AboutEvent />
            <Speakers />
            <Schedule />
            <Ticket />
            <SponsorsBanner />
            <SponsorComponent types={sponsorTypes} />
            {/* <Shop /> */}
            <Organization />
        </>
    );
}
