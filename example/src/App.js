import React, { useState } from 'react';
import AdkuSidebar from 'adku-sidebar';

const SidebarContent = ({ onClose }) => (
  <div className="container">
    <div className="d-flex flex-row">       
      <button className="btn btn-primary" onClick={onClose}>Close</button>      
    </div>
  </div>
);

const App = () => {  
  const [ show, setShow ] = useState(false);
  const [ over, setOver ] = useState(true);

  const onOpen = () => setShow(true);
  const onClose = () => setShow(false);      

  const onToggleOver = () => setOver(!over);

  return (    
    <AdkuSidebar 
      sidebarClassName="border-right bg-secondary" 
      contentClassName="border" 
      show={show} 
      over={over} 
      sidebar={<SidebarContent onClose={onClose}/>}
    >
      <div className="container">
        <div className="row m-3"> 
          <div className="col">
            <div className="d-flex">          
              <button className="btn btn-primary m-1" onClick={onOpen}>Show</button>
              <button className="btn btn-primary m-1" onClick={onToggleOver}>Toogle over</button>
            </div>          
          </div>
        </div>
      </div>
    </AdkuSidebar>    
  )
}

export default App;