import home from '../header/home.png'
import './header.css'
export default function Header() {
    return (
        <div className="header-box">
            <img src={home} alt="Home button" width="30" height="40"/>
            <div>Select a tenant:</div>
            <select className="company-dropdown">
                    <option value="volvo">EIN public org</option>
                    <option value="saab">ABC</option>
                    <option value="mercedes">Impetus</option>
                    <option value="audi">Intellicus</option>
             </select>
        </div>
       
    )
}
