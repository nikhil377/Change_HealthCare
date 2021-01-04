import React, { Component } from 'react';
import MultiSelectAll from './MultiSelectAll.js'
import InputBox from './InputBox';
class StudyComponent extends Component {
    constructor(props){
        super(props);
        this.state={
           value:"Accession Number & Issuer"
        }  
    }
    enableFields=(e)=>{
        console.log(e.target.value);
        this.setState({
            value:e.target.value
        });
    }
    render() {
        const {value}=this.state;
        return (
            <div>
                   <input 
                        type="radio" 
                        id="accession-number" 
                        name="accession-number"
                        value="Accession Number & Issuer" 
                        checked={value==="Accession Number & Issuer"} 
                        onChange={this.enableFields}/>
        
                <label for="accession-number">Accession Number & Issuer</label>
                <InputBox name="Accession Number" isMandatory="true" disabled={value!=="Accession Number & Issuer"}/>
                <label className="issuer-label" for="issuer">Issuer</label>
                <MultiSelectAll />
                <hr/>
    
                <input 
                    type="radio" 
                    id="study-uid" 
                    name="study-uid" 
                    value="Study UID"
                    checked={value==="Study UID"}  
                    onChange={this.enableFields} />
        
                <label for="study-uid">Study UID</label>
                <InputBox name="Study UID" isMandatory="true"  disabled={value!=="Study UID"} />
                <hr/>
    
                <input 
                    type="radio" 
                    id="dicom-object" 
                    name="dicom-object" 
                    value="Diacom Object" 
                    checked={value==="Diacom Object"} 
                    onChange={this.enableFields}/>

                <label for="internal-id">DICOM Object</label>
                <InputBox name="SOP Instance UID" isMandatory="true" disabled={value!=="Diacom Object"}/>
                <hr/>
                <input 
                    type="radio" 
                    id="performed-date" 
                    name="performed-date" 
                    value="Performed Date Range" 
                    checked={value==="Performed Date Range"} 
                    onChange={this.enableFields}/>
                
                 <label for="performed-date">Performed Date Range</label>
                 <InputBox type="date" name="Start Date" isMandatory="true" disabled={value!=="Performed Date Range"}/>
                 <InputBox type="date" name="End Date" isMandatory="true" disabled={value!=="Performed Date Range"}/>
                 <button type="submit" className="search-button" disabled>SEARCH</button>
                 <button type="reset" value="reset" className="clear-all-button">CLEAR ALL</button>
            </div>
        );
    }
}

export default StudyComponent;