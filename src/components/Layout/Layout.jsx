import { Footer } from "../Footer";
import { Outlet } from "react-router";
import { Header } from "../Header";


export function Layout() {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}
