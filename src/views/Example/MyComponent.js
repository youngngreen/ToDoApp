import React from 'react'
import ChildComponent from './ChildComponent'
import AddComponent from './AddComponent'

class MyComponent extends React.Component {
    state = {
        arrJobs: [
            {id: 'jobID1', title: 'developer', salary: '500'},
            {id: 'jobID2', title: 'tester', salary: '300'},
            {id: 'jobID3', title: 'project manager', salary: '2000'}
        ]
    }

    // addNewJob = (job) => {
    //     console.log('check job from parent: ', job);
    //     this.setState({
    //         arrJobs: [...this.state.arrJobs, job]
    //     })
    // }

    addNewJob = (job) => {
        console.log('check job from parent: ', job);
        let currentJobs = this.state.arrJobs;
        currentJobs.push(job);
        this.setState({
            arrJobs: currentJobs
        })
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState ({
            arrJobs: currentJobs
        })
    }

    render() {
        console.log('>>> call render: ', this.state);
        return (
            <>
                <AddComponent
                    addNewJob = {this.addNewJob}
                />
            
                <ChildComponent
                arrJobs = {this.state.arrJobs}
                deleteAJob = {this.deleteAJob}
                />
            </>
        )
    }
}

export default MyComponent;