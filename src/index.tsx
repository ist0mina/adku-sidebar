/**
 * @class ExampleComponent
 */

import * as React from 'react'

import styles from './styles.css'

interface IProps {
  className?: string;
  show?: boolean;
  children: React.ReactChildren,
  sidebar: React.ReactNode
};

export default class AdkuSidebar extends React.Component<IProps> {  

  render() {    
    const { className, children, show, sidebar } = this.props;    

    return (
      <div>        
        <div className={`${styles.sidebar} ${styles.tran} ${className ? className : ''} ${show ? '' :  styles['sidebar-hidden']}`}>
          { sidebar }
        </div>
        <div className={`${styles.tran}`}>
          { children }
        </div>
      </div>
    )
  }
}
