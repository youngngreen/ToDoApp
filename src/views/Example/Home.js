import React from 'react';
import { withRouter } from "react-router";
import Color from '../HOC/Color';
import logo from '../../assets/images/hcmut.png'

import {connect} from 'react-redux';

class Home extends React.Component {
    componentDidMount () {
        // setTimeout(() => {
        //     this.props.history.push('todo'); // sau 3s chuyen sang trang /todo.
        // }, 3000); // 3000 ms = 3s
    }
    render () {
        console.log('>>> check props redux: ', this.props.dataRedux);
        return (
            <>
            <div>
                Welcome to Homepage
            </div>
            <div>
                <img src={logo} style={{ width: '200px', height: '200px', marginTop: '20px' }}/>
            </div>
            </>
        )
    }
}

// export default withRouter(Home);

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }  
}

export default connect(mapStateToProps)(Color(Home));