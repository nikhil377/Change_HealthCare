import  './aside.css'
import InputBox from './InputBox';
import MultiSelectAll from './MultiSelectAll.js'

export default function AsideFilter() {
    return (
        <div className="aside-filter-box">
            <div className="search-text">Search</div>
            <button className="dark-grey-button">PATIENT</button>
            <button className="light-grey-button">STUDY</button>
            <p className="select-category-text">Select one of the category below:</p>

            <input type="radio" id="patient-name" name="patient-name" value="Patient Name" checked></input>
            <label for="patient-name">Patient Name</label>
            <InputBox name="Last Name" isMandatory="true"/>
            <InputBox name="First Name"/>
            <hr/>

            <input type="radio" id="patient-id" name="patient-id" value="Patient ID & Issuer"></input>
            <label for="patient-id">Patient ID & Issuer</label>
            <InputBox name="Patient Id" isMandatory="true"/>
            <label className="issuer-label" for="issuer">Issuer</label>
            <MultiSelectAll />

            <hr/>

            <input type="radio" id="internal-id" name="internal-id" value="Internal ID"></input>
            <label for="internal-id">Internal ID</label>
            <InputBox name="Patient Id" isMandatory="true"/>

            <button type="submit"className="search-button">SEARCH</button>
            <button className="clear-all-button">CLEAR ALL</button>

        </div>
  
    )
}
