import home from '../header/home.png'
import './header.css'
export default function Header(props) {
    return (
        <div className={props.className? 'show-banner-header': 'header-box'}>
            <img src={home} alt="Home button" width="30" height="40"/>
            <div>Select a tenant:</div>
            <select className="company-dropdown">
                    <option value="EIN public org">EIN public org</option>
                    <option value="ABC">ABC</option>
                    <option value="Impetus">Impetus</option>
                    <option value="Intellicus">Intellicus</option>
             </select>
        </div>
       
    )
}
