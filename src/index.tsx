import * as React from 'react'

import styles from './styles.css'
import { IAdkuSidebar } from './interfaces';

const AdkuSidebar: React.FC<IAdkuSidebar> = (props: IAdkuSidebar) =>  {    
  const { sidebarClassName = '', wrapperClassName = '', contentClassName = '', children, sidebar, show = false, over = true, wrapperHeight = -1 } = props;        

  let wrapperStyle;

  if (wrapperHeight > 0) {
    wrapperStyle = {
      height: wrapperHeight
    };
  }  
  
  const sbPositionStyle = over ? styles['sidebar-over'] : '';    
  const sbVisibilityStyle = show ? '' :  `${styles['sidebar-hidden_vertical']}`;
  const sbClassName = `${styles.sidebar} ${styles['sidebar-vertical']} ${sbPositionStyle} ${styles.tran} ${sidebarClassName} ${sbVisibilityStyle}`;

  const wrPositionStyle = over ? '' : styles['sidebar-nearby'];
  const wrClassName = `${styles['sidebar-wrapper']} ${wrapperClassName} ${wrPositionStyle}`;

  const mPositionStyle = !over && !show ? styles['sidebar-main-tran'] : '';  
  const mClassName = `${styles.tran} ${contentClassName} ${styles['sidebar-main']} ${mPositionStyle}`;

  return (
    <div className={wrClassName} style={wrapperStyle}>        
      <div className={sbClassName}>
        { sidebar }
      </div>
      <div className={mClassName}>
        { children }
      </div>
    </div>
  )
}


export * from './interfaces';

export default AdkuSidebar;