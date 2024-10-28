import { SponsorComponent } from "../../components/Sponsors/SponsorComponent";
import { Header } from "../../shared/header";

export function Sponsors() {
    const sponsorTypes = [
        "terabyte",
        "gigabyte",
        "megabyte",
        "kilobyte",
        "byte",
        "parceiros",
    ];

    return (
        <>
            <Header title="Patrocinadores" bgColor="pink" />
            <SponsorComponent types={sponsorTypes} />
        </>
    );
}
