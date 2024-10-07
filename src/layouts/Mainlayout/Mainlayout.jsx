import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Mainlayout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}
