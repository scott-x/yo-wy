import React, { PureComponent } from 'react';
import {
	 <%=componentName.substring(0,1).toUpperCase()+componentName.substring(1).toLowerCase()%>Wrapper
} from './style';

class  <%=componentName.substring(0,1).toUpperCase()+componentName.substring(1).toLowerCase()%> extends PureComponent {
  render() {
    return (
     <<%=componentName.substring(0,1).toUpperCase()+componentName.substring(1).toLowerCase()%>Wrapper> <%=componentName.substring(0,1).toUpperCase()+componentName.substring(1).toLowerCase()%></<%=componentName.substring(0,1).toUpperCase()+componentName.substring(1).toLowerCase()%>Wrapper>
    );
  }
}

export default  <%=componentName.substring(0,1).toUpperCase()+componentName.substring(1).toLowerCase()%>;