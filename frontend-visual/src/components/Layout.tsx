import * as React from 'react';
import NavMenu from './NavMenu';

const Layout: React.FC<{ children: any }> = ({ children }) => {
    return (
      <div className="layout">
        <NavMenu />
        <div className="layout__main">{children}</div>
      </div>
    );
  };
  
export default Layout;