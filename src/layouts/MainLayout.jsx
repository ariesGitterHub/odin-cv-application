import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
