import "../styles/globals.scss";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "../src/components/layout";
import { PageProps } from "../src/models/PageProps";
import useTheme from "../src/hooks/useTheme";
import ThemeContext from "../src/context/ThemeContext";

const { Provider } = ThemeContext;

function MyApp({ Component, pageProps }: PageProps) {
    const { theme, changeTheme } = useTheme();

    return (
        <Provider
            value={{
                theme,
                changeTheme,
            }}
        >
            <div className={`${theme}`}>
                <Head>
                    <meta
                        property="og:url"
                        content="https://ig-clone-app.vercel.app/"
                    />
                    <meta property="og:title" content="Instagram Clone" />
                    <meta
                        property="og:image"
                        content="https://ig-clone-app.vercel.app/images/preview.png"
                    />
                    <meta
                        property="og:description"
                        content="I built this app just for personal practice reasons as part of my portfolio."
                    />

                    <meta
                        property="twitter:url"
                        content="https://ig-clone-app.vercel.app/"
                    />
                    <meta property="og:title" content="Instagram Clone" />
                    <meta
                        property="twitter:image"
                        content="https://ig-clone-app.vercel.app/images/preview.png"
                    />
                    <meta
                        property="twitter:description"
                        content="I built this app just for personal practice reasons as part of my portfolio."
                    />

                    <link rel="shortcut icon" href="/favicon.png" />
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                                page_path: window.location.pathname,
                                });
                            `,
                        }}
                    />
                </Head>

                <Navbar />

                <AnimatePresence exitBeforeEnter>
                    <main className="bg-nav-gray dark:bg-dar-nav-gray transition-colors">
                        <Component {...pageProps} />
                    </main>
                </AnimatePresence>
            </div>
        </Provider>
    );
}

export default MyApp;
