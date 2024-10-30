import { Outlet } from 'react-router-dom';
import Footer from "./shared/Footer";
import {Navbar} from "./shared/Navbar/Index";

export default function Layout(){
    const labels = [
      { name: "Inicio", router: "/sescomp" },
      { name: "Programação", router: "/sescomp/#/programacao" },
      { name: "Manual", router: "/sescomp/#/manual" },
      { name: "Patrocinadores", router: "/sescomp/#/patrocinadores" },
    ];
    return (
        <>
            <Navbar.Root>
                {labels.map((item) => (
                    <Navbar.Item
                        key={item.name}
                        href={item.router}
                        label={item.name}
                    />
                ))}
            </Navbar.Root>
            <Outlet />
            <Footer />
        </>
    );
}
