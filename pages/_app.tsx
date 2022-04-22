import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Navbar, Footer } from "../src/components/layout";

interface PageProps extends AppProps {
    headerTitle: string;
}

function MyApp({ Component, pageProps }: PageProps) {
    return (
        <div className="bg-white">
            <Navbar />

            <main>
                <Component {...pageProps} />
            </main>

            <Footer />
        </div>
    );
}

export default MyApp;
