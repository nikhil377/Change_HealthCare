import './InputBox.css'
export default function InputBox(props) {
    return (
        <div className="input-box">
            <label className="input-label" for="fname">{props.name}</label>
            {props.isMandatory? <span>&#42;</span> :null}
            <br/>
            {props.type==="date"?  <input type="date"  id={props.name} name={props.name} disabled={props.disabled}/>:
            <input type="text" id={props.name} name={props.name} disabled={props.disabled}/>}<br/>
        </div>
       
    )
}
