import _Navbar from "./_Navbar";
import _Footer from "./_Footer";
import _AdminNavbar from "./_AdminNavbar";

export function Layout({ children }) {
  return (
    <div>
      <_Navbar />
      <div>{children}</div>
      <_Footer />
    </div>
  );
}

export function AdminLayout({ children }) {
  return (
    <div>
      <_AdminNavbar />
      <div>{children}</div>
    </div>
  );
}
