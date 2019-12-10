import * as React from 'react'

import styles from './styles.css'
import { IAdkuSidebar } from './interfaces';

const AdkuSidebar: React.FC<IAdkuSidebar> = (props: IAdkuSidebar) =>  {    
  const { className, children, sidebar, show = false } = props;        

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


export * from './interfaces';
export default AdkuSidebar;