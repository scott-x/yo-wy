import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { <%=componentName.substring(0,1).toUpperCase()+componentName.substring(1).toLowerCase()%>Wrapper, Header, Content } from './style';
import { actionCreators } from './store';

class <%=componentName.substring(0,1).toUpperCase()+componentName.substring(1).toLowerCase()%> extends PureComponent {
	render() {
		return (
			<<%=componentName.substring(0,1).toUpperCase()+componentName.substring(1).toLowerCase()%>Wrapper>
				<Header>{this.props.title}</Header>
				<Content 
					dangerouslySetInnerHTML={{__html: this.props.content}}
				/>
			</<%=componentName.substring(0,1).toUpperCase()+componentName.substring(1).toLowerCase()%>Wrapper>
		)
	}

	componentDidMount() {
		this.props.getDetail(this.props.match.params.id);
	}
}

const mapState = (state) => ({
	title: state.getIn(['detail', 'title']),
	content: state.getIn(['detail', 'content'])
});

const mapDispatch = (dispatch) => ({
	getDetail(id) {
		dispatch(actionCreators.getDetail(id));
	}
});

export default connect(mapState, mapDispatch)(withRouter(<%=componentName.substring(0,1).toUpperCase()+componentName.substring(1).toLowerCase()%>));