import * as React from 'react'

import styles from './styles.css'
import { IAdkuSidebar } from './interfaces';

const AdkuSidebar: React.FC<IAdkuSidebar> = (props: IAdkuSidebar) =>  {    
  const { sidebarClassName = '', wrapperClassName = '', contentClassName = '', children, sidebar, show = false } = props;        

  return (
    <div className={`${styles['sidebar-wrapper']} ${wrapperClassName}`}>        
      <div className={`${styles.sidebar} ${styles.tran} ${sidebarClassName} ${show ? '' :  styles['sidebar-hidden']}`}>
        { sidebar }
      </div>
      <div className={`${styles.tran} ${contentClassName}`}>
        { children }
      </div>
    </div>
  )
}


export * from './interfaces';
export default AdkuSidebar;