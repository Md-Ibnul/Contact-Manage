import { Link } from "react-router-dom";
import logo from '../assets/contact-logo-1.png'

const Sidebar = () => {
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full items-center bg-white border border-solid border-gray-800">
      {/* Sidebar content here */}
      <li className="w-full pt-4 pb-6"><Link><img src={logo} alt="Logo" /></Link></li>
      <li className="text-black text-2xl font-bold"><Link to='/'>Contacts</Link></li>
      <li className="text-black text-2xl font-bold"><Link to='/graph&map'>Graph and Map</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default Sidebar;