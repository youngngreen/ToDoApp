import React from 'react'
import ChildComponent from './ChildComponent'
import AddComponent from './AddComponent'

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            {id: 'jobID1', title: 'developer', salary: '500 $'},
            {id: 'jobID2', title: 'tester', salary: '300 $'},
            {id: 'jobID3', title: 'project manager', salary: '2000 $'}
        ]
    }

    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <AddComponent />
            
                <ChildComponent
                arrJobs = {this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent;