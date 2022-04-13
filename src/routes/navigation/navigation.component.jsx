import { Outlet } from 'react-router-dom';
import './navigation.scss';

const Navigation = () => {
  return(
    <div>
      <div>
        <h1>I am Navbar</h1>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;