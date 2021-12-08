import _Navbar from "./_Navbar";
import _Footer from "./_Footer";
import _AdminNavbar from "./_AdminNavbar";
import { ReactNode } from "react-transition-group/node_modules/@types/react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <_Navbar />
      <div>{children}</div>
      <_Footer />
    </div>
  );
}

export function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <_AdminNavbar />
      <div>{children}</div>
    </div>
  );
}
