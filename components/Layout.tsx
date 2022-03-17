import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: any) {
  return (
    <>
      <div className="bg-slate-400">
        <Header />

        <main>{children}</main>

        <Footer />
      </div>
    </>
  );
}
