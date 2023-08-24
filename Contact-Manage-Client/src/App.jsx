import { Outlet } from "react-router-dom";
import Sidebar from "./Home/Sidebar";


const App = () => {
  return (
    <div className="flex">
      <div className='relative min-h-screen md:flex'>
        <Sidebar />
      </div>
      <div className='flex-1  md:ml-50'>
      <div className='p-5'>
      <Outlet />
      </div>
      </div>
    </div>
  );
};

export default App;
