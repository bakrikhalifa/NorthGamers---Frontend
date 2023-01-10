import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <header className='Heading'>
      <Link to="/"><h1>Northgamers</h1></Link>
      <p>Take it to the next level</p>
    </header>
  );
}

export default Header;