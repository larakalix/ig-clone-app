import "../styles/globals.scss";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "../src/components/layout";
import { PageProps } from "../src/models/PageProps";

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
