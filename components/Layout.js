import Meta from './Meta';
import NavBar from "./Nav";
const Layout = ({ children }) => {
  return (
    <div>
      <Meta/>
      <NavBar/>
      <main className="main">
        <section className="py-5 container text-center">
          {children} {/*_app*/}
        </section>
      </main>
    </div>
  );
};

export default Layout;