import { Component } from 'react';
import React from 'react';
import  './aside.css'
import InputBox from './InputBox';
import MultiSelectAll from './MultiSelectAll.js'
import StudyComponent from './StudyComponent';

export default class AsideFilter extends Component {
    constructor(props){
        super(props);
        this.state={
           value:"Patient Name",
           component:"patient"
        }  
    
    }
    enableFields=(e)=>{
        console.log(e.target.value);
        this.setState({
            value:e.target.value
        });
    }
    changeComponentView=(e)=>{
        console.log(e.target.value);
        this.setState({
            component:e.target.value
        });
    }
    render(){
        const {value,component}=this.state;
        return (
            <div className="aside-filter-box">
                <div className="search-text">Search</div>
                <button className="dark-grey-button" value="patient" onClick={this.changeComponentView}>PATIENT</button>
                <button className="light-grey-button" value="study" onClick={this.changeComponentView}>STUDY</button>
                <p className="select-category-text">Select one of the category below:</p>
            {component==="patient" ? 
            <div>
                <input 
                        type="radio" 
                        id="patient-name" 
                        name="patient-name"
                        value="Patient Name" 
                        checked={value==="Patient Name"} 
                        onChange={this.enableFields}/>
        
                <label for="patient-name">Patient Name</label>
                <InputBox name="Last Name" isMandatory="true" disabled={value!=="Patient Name"}/>
                <InputBox name="First Name" disabled={value!=="Patient Name"}/>
                <hr/>
    
                <input 
                    type="radio" 
                    id="patient-id" 
                    name="patient-id" 
                    value="Patient ID & Issuer"
                    checked={value==="Patient ID & Issuer"}  
                    onChange={this.enableFields} />
        
                <label for="patient-id">Patient ID & Issuer</label>
                <InputBox name="Patient Id" isMandatory="true"  disabled={value!=="Patient ID & Issuer"} />
                <label className="issuer-label" for="issuer">Issuer</label>
                <MultiSelectAll />
                <hr/>
    
                <input 
                    type="radio" 
                    id="internal-id" 
                    name="internal-id" 
                    value="Internal ID" 
                    checked={value==="Internal ID"} 
                    onChange={this.enableFields}/>

                <label for="internal-id">Internal ID</label>
                <InputBox name="Internal ID" isMandatory="true" disabled={value!=="Internal ID"}/>
                </div>
                :   <StudyComponent/>
                }
                <button type="submit"className="search-button">SEARCH</button>
                <button className="clear-all-button">CLEAR ALL</button>
            
            </div>
      
        )
    }

}