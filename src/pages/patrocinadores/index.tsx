import { SponsorComponent } from "../../components/Sponsors/SponsorComponent";
import { Header } from "../../shared/header";
import { Ticket } from "../../shared/Ticket";

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
            <Header title="Patrocinadores" />
            <SponsorComponent types={sponsorTypes} />
            <Ticket />
        </>
    );
}
