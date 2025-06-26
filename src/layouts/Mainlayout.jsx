import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Mainlayout() {
  return (
    <>
      <main className="max-w-5xl mx-auto px-4">
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}
