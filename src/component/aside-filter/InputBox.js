import React,{ Component } from 'react';
import './InputBox.css'

export default class InputBox extends Component {
    constructor(props){
        super(props);
        this.state={
            inputBoxValue:"",
            startDate:"",
            endDate: ""
        }  
    }
    getChangedValue=(e)=>{
        if(e.target.name==="Start Date"){
            this.setState({
                startDate:e.target.value
            },()=>{
                this.props.data(this.props.name+this.state.startDate)
            })
        }
         if (e.target.name==="End Date"){
            this.setState({
                endDate:e.target.value
            },()=>{
                let startDate= document.getElementById('Start Date').value;
                let endDate =  this.state.endDate;
                var date1Updated = new Date(startDate.replace(/-/g,'/'));  
                var date2Updated = new Date(endDate.replace(/-/g,'/'));
                if(date1Updated < date2Updated){
                    this.props.data(this.props.name+this.state.endDate)
                }
                else{
                    this.setState({
                        endDate:""
                    });
                    alert("Please enter End Date greater than Start Date")
                }

            });
        }
        else{
            this.setState({
                inputBoxValue:e.target.value
            },()=>{
                this.props.data(this.props.name+this.state.inputBoxValue)
            })
        }
    }
    render(){
        const {inputBoxValue,endDate,startDate}=this.state;
        const {name}=this.props;
        let required= true;
        if(name==="First Name"){
            required=false;
        }
        return (
            <div className="input-box">
                <label className="input-label" for={this.props.name}>{this.props.name}</label>
                {this.props.isMandatory? <span>&#42;</span> :null}
                <br/>
                {this.props.type==="date" && this.props.name==="Start Date"?   
                <input id={this.props.name} name={this.props.name}  type="text"  className="date-input"
                onFocus={(e) => (e.currentTarget.type = "date")}
                onBlur={(e) => (e.currentTarget.type = "date")}
                placeholder="MM/DD/YYYY" disabled={this.props.disabled} value={startDate} onChange={this.getChangedValue} required={true}/>
                :
                this.props.name==="End Date" && this.props.type==="date" ?<input id={this.props.name} name={this.props.name}  type="text"  className="date-input"
                onFocus={(e) => (e.currentTarget.type = "date")}
                onBlur={(e) => (e.currentTarget.type = "date")}
                disabled={this.props.disabled} value={endDate}
                placeholder="MM/DD/YYYY"
                onChange={this.getChangedValue} required={true}/> 
                : 
                <input type="text" id={this.props.name} name={this.props.name} disabled={this.props.disabled} value={inputBoxValue} onChange={this.getChangedValue} required={required}/>}<br/>
            </div>
           
        )
    }
   
}
 