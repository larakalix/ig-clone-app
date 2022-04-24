import "../styles/globals.scss";
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
                <Navbar />

                <AnimatePresence exitBeforeEnter>
                    <main className="bg-nav-gray dark:bg-dar-nav-gray">
                        <Component {...pageProps} />
                    </main>
                </AnimatePresence>
            </div>
        </Provider>
    );
}

export default MyApp;
