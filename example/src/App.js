import React, { Component } from 'react';
import AdkuSidebar from 'adku-sidebar';

const SidebarContent = () => (
  <div className="container">
    <div className="d-flex flex-row">       
      <button className="btn btn-primary">Закрыть</button>      
    </div>
  </div>
);

export default class App extends Component {
  state = { show: false };

  onOpen = () => {
    this.setState({ show: true });
  }

  render () {
    const { show } = this.state;

    return (
      <div>
        <AdkuSidebar className="border-right bg-secondary" show={show} sidebar={<SidebarContent/>}>
          <div className="container">
            <div className="row m-3"> 
              <div className="col">
                <button className="btn btn-primary" onClick={this.onOpen}>Показать</button>
              </div>
            </div>
          </div>
        </AdkuSidebar>
      </div>
    )
  }
}
