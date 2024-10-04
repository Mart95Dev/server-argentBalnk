import Navbar from "../components/Navbar/Navbar";
import Error from "../components/Error/Error";
import Footer from "../components/Footer/Footer";

function Error404() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Error />
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default Error404;
