import { useState } from "react"

export default function Center(){

    const [mode, setMode] =useState(true);
    return(
           <div>
             <Header mode={mode} setMode={setMode}/>
            <sideBar/>
           </div>
    )
}


function Header({mode,setMode}) {
  return (
  
    <header className="App-header">
      
      <div>r</div>
      <div><div><span>Mode: </span><button className={mode ? "btnmodeSecond" : "btnmodefirst"}>Viewer</button><button className={mode ?  "btnmodefirst": "btnmodeSecond"}>Sender</button></div></div>
      <div>r</div>
    </header>
  )
}

function sideBar(){
    return(
        <>
        <div className="app-sideBar">
qjhwdwqsd

        </div>
        </>
    )
}


