import { useNavigate } from 'react-router-dom';

import '../styles/elements.css'

const Navbar = () => {

    const navigate = useNavigate()

    return ( 
        <div className="navbar">
            <div className="log">LOGO</div>
            <div className="homeBtn" onClick={() => navigate('/')}>HOME</div>
        </div>
     );
}
 
export default Navbar;