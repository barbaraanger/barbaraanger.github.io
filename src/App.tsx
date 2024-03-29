import { Layout } from "./Layout";
import AboutPage from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";

function App() {
  return (
    <Layout>
      <AboutPage />
      <Contact />
      <Projects />
    </Layout>
  );
}

export default App;
