import { Outlet } from "react-router-dom";
import Header from "./Header";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="mx-auto max-w-screen-2xl p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
