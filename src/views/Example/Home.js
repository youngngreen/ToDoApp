import React from 'react';
import { withRouter } from "react-router";
import Color from '../HOC/Color';

class Home extends React.Component {
    componentDidMount () {
        // setTimeout(() => {
        //     this.props.history.push('todo'); // sau 3s chuyen sang trang /todo.
        // }, 3000); // 3000 ms = 3s
    }
    render () {
        console.log('>>> check props: ', this.props);
        return (
            <div>
                Welcome to Homepage
            </div>
        )
    }
}

// export default withRouter(Home);
export default Color(Home);