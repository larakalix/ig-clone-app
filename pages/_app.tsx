import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { Navbar, Footer } from "../src/components/layout";

interface PageProps extends AppProps {
    headerTitle: string;
}

function MyApp({ Component, pageProps }: PageProps) {
    return (
        <div className="bg-white">
            <Navbar />

            <AnimatePresence exitBeforeEnter>
                <main className="bg-nav-gray">
                    <Component {...pageProps} />
                </main>
            </AnimatePresence>
        </div>
    );
}

export default MyApp;
