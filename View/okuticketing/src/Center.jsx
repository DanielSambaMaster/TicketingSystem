import { useState } from "react"

export default function Center(){

    const [mode, setMode] =useState(true);
    return(
           <div>
             <Header mode={mode} setMode={setMode}/>
                    <Sidebar></Sidebar>
               </div>
    )
}


function Header({mode,setMode}) {
  return (
  
    <header className="App-header">
      
      <div>Oku TicketingSystem</div>
      <div><div><span>Mode: </span><button className={mode ? "btnmodeSecond" : "btnmodefirst"}>Viewer</button><button className={mode ?  "btnmodefirst": "btnmodeSecond"}>Sender</button></div></div>
      <div>Logged</div>
    </header>
  )
}

function Sidebar(){
    return(
        <>
        <div className="appsideBar">

            <div><button className="bnt-Ticket">New Ticket</button></div>
            <div><Form/></div>
            <div>fr</div>

        </div>
        </>
    )
}


function Form(){
    return(
        <div className="form-modal">
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <select></select>
        <select></select>
        <select></select>
        <select></select>
        <select></select>
        <select></select>
        <select></select>
        <select></select>

        </div>
    )
}