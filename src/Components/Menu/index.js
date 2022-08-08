import * as C from './styles';
import { Link, useLocation } from 'react-router-dom';

export default () => {
  const location = useLocation();
  const pathname = location.pathname;
  
  return (
    <C.Container>
      <ul className="menu">
        <li><Link to="/recent" className={(pathname === '/recent' || pathname === '/') ? 'active' : ''}>Recent</Link></li>
        <li><Link to="/c/sports-fitness" className={pathname === '/c/sports-fitness' ? 'active' : ''}>SPORT & FITNESS</Link></li>
        <li><Link to="/c/lifestyle" className={pathname === '/c/lifestyle' ? 'active' : ''}>LIFESTYLE</Link></li>
        <li><Link to="/motion" className={pathname === '/motion' ? 'active' : ''}>MOTION</Link></li>
        <li><Link to="/c/personal" className={pathname === '/c/personal' ? 'active' : ''}>PERSONAL</Link></li>
        <li><Link to="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
      </ul>
    </C.Container>
  )
}