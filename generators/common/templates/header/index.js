import React, { PureComponent } from 'react';
import {
	 <%=componentName.substring(0,1).toUpperCase()+componentName.substring(1).toLowerCase()%>Wrapper
} from './style';

class <%=componentName.substring(0,1).toUpperCase()+componentName.substring(1).toLowerCase()%> extends PureComponent {
  render() {
    return (
     <div> <%=componentName.substring(0,1).toUpperCase()+componentName.substring(1).toLowerCase()%>: 
      <i className='iconfont'>&#xe6cf;</i>
     </div>
    );
  }
}

export default  <%=componentName.substring(0,1).toUpperCase()+componentName.substring(1).toLowerCase()%>;