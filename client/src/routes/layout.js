import React, {useState} from "react"

const Layout = () => { 

        function goToTheNext(){
           window.location =("/calc")
        }
        function goToThePriv(){
            window.location =("/")
         }
        return(
            <div>
                <div className='header'>
                    <div className='divClac'><button onClick={() => goToTheNext()} className="calculator">Open calculator</button></div>
                    <div className='divClac'><button onClick={() => goToThePriv()} className="calculator">Close calculator</button></div>
                </div>
            </div>
        );
    
}  
export default Layout;