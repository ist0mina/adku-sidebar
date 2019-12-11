import React, { useState } from 'react';
import AdkuSidebar from 'adku-sidebar';

const SidebarContent = ({ onClose }) => (
  <div className="container">
    <div className="d-flex flex-row">       
      <button className="btn btn-primary" onClick={onClose}>Закрыть</button>      
    </div>
  </div>
);

const App = () => {  
  const [ show, setShow ] = useState(false);

  const onOpen = () => setShow(true);
  const onClose = () => setShow(false);      

  return (    
    <AdkuSidebar sidebarClassName="border-right bg-secondary" contentClassName="border" show={show} sidebar={<SidebarContent onClose={onClose}/>}>
      <div className="container">
        <div className="row m-3"> 
          <div className="col">
            <button className="btn btn-primary" onClick={onOpen}>Показать</button>
          </div>
        </div>
      </div>
    </AdkuSidebar>    
  )
}

export default App;