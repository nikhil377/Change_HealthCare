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
           component:"patient",
           filteredData:[{
                firstName:"",
                lastname:"",
                patientId:"",
                Issuer:"Change Health-care",
                status: "On track",
                dateOfBirth:"12 Nov, 1997",
                gender:"Male"
           }]
        }  
    
    }
    enableFields=(e)=>{
        this.setState({
            value:e.target.value
        });
    }
    submitData=()=>{
        this.props.data(this.state.filteredData)
    }
    getInputFilteredData(value){
        if(value.includes("First Name")){
            value=value.split("First Name");
            const filteredData = this.state.filteredData.slice();
            filteredData[0].firstName = value[1];
            return()=>{
                this.setState({ filteredData });
        }
        }
        if(value.includes("Last Name")){
            value=value.split("Last Name");
            const filteredData = this.state.filteredData.slice();
            filteredData[0].lastname = value[1];
            return()=>{
                this.setState({ filteredData });
        }
        }
        if(value.includes("Patient Id")){
            value=value.split("Patient Id");
            const filteredData = this.state.filteredData.slice();
                filteredData[0].patientId = value[1];
            return()=>{
                this.setState({ filteredData });
        }
        }
    }
    render(){
        const {value,filteredData}=this.state;
        console.log("this filtered", filteredData);
        return (
        <div>  
            <form onSubmit={this.submitData()}>        
            <p className="select-category-text">Select one of the category below:</p>
            {this.props.activeComponent==="patient" ? 
            <div>
                <input 
                        type="radio" 
                        id="patient-name" 
                        name="patient-name"
                        value="Patient Name" 
                        checked={value==="Patient Name"} 
                        onChange={this.enableFields}/>
        
                <label for="patient-name">Patient Name</label>
                <InputBox name="Last Name" isMandatory="true" disabled={value!=="Patient Name"} data={this.getInputFilteredData.bind(this)}/>
                <InputBox name="First Name" disabled={value!=="Patient Name"} data={this.getInputFilteredData.bind(this)}/>
                <hr/>
    
                <input 
                    type="radio" 
                    id="patient-id" 
                    name="patient-id" 
                    value="Patient ID & Issuer"
                    checked={value==="Patient ID & Issuer"}  
                    onChange={this.enableFields} />
        
                <label for="patient-id">Patient ID & Issuer</label>
                <InputBox name="Patient Id" isMandatory="true"  disabled={value!=="Patient ID & Issuer"} data={this.getInputFilteredData.bind(this)}/>
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
                <InputBox name="Internal ID" isMandatory="true" disabled={value!=="Internal ID"}  data={this.getInputFilteredData.bind(this)}/>
                </div>
                :   <StudyComponent/>
                }
                <button type="submit" className="search-button" disabled>SEARCH</button>
                <button className="clear-all-button">CLEAR ALL</button>
                </form>    
            </div>
      
        )
    }

}