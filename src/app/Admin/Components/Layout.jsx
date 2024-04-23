import Sidebar from "../Components/Sidebar";
const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div
        key={children}
        className="bg-white flex-1 p-4 text-black border-dashed"
      >
        {children}
      </div>
    </div>
  );
};
export default Layout;
