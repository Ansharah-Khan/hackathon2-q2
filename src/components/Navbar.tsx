import Icon from '@mdi/react';
import { mdiAccountAlertOutline } from '@mdi/js';
import { Search } from "akar-icons";
import { Heart } from "akar-icons";
import { ShoppingCartOutlined } from '@ant-design/icons';

const Navbar = () => {
  return (
    <nav className="py-4 bg-white flex items-center justify-between px-6 lg:px-12 mx-auto ">
      {/* Logo and Title */}
      <div  className="flex items-center space-x-0 ">
        <img src="/logo.png" alt="logo" width={50} height={32} />
        <h2 className="text-2xl lg:text-4xl font-bold">Furniro</h2>
      </div>


      {/* Navigation Links */}
      <div className="hidden md:flex">
        <ul className="flex gap-6 lg:gap-14 text-sm lg:text-base font-medium">
          <li>Home</li>
          <li>Shop</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Icons Section */}
      <div>
        <ul className="flex gap-6 lg:gap-11 items-center">
          <li>
            <Icon path={mdiAccountAlertOutline} size={1.3}/>
          </li>
          <li>
            <Search size={24} strokeWidth={2} />
          </li>
          <li>
            <Heart size={24} strokeWidth={2} />
          </li>
          <li>
            <ShoppingCartOutlined className="text-2xl" />
          </li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="text-gray-500 text-2xl">
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
