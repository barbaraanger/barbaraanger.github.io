import Header from "./Components/Header";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";

const Layout = () => {
    return (
        <main>
            <Header />
            <About />
            <Projects />
            <Contact />
        </main>
    );
};

export default Layout;
