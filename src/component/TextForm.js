import React,{useState} from 'react';



export default function TextForm(props) {
  const [text, setText] = useState();

  const upClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to upper case","success")
  }

  const loClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to lower case","success")
}

 const handelUnchange = (event) => {
        setText(event.target.value)
 };

 
  return (
  <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label className="form-label">TextArea</label>
          <textarea className="form-control" value={text} onChange={handelUnchange} style={{backgroundColor: props.mode==='dark'?'gray':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={upClick}>Upper Case</button>
        <button className='btn btn-primary mx-1' onClick={loClick}>Lower Case</button>
        
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1 className='my-3'>Preview</h1>
      <p className="my-3">{text}</p>
    </div>
  </>
  )
}
