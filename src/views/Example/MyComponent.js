import React from 'react'
import ChildComponent from './ChildComponent'

class MyComponent extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            {id: 'jobID1', title: 'developer', salary: '500 $'},
            {id: 'jobID2', title: 'tester', salary: '300 $'},
            {id: 'jobID3', title: 'project manager', salary: '2000 $'}
        ]
    }

    handleChangeFirstName = (event)=> {
        this.setState ({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event)=> {
        this.setState ({
            lastName: event.target.value
        })
    }

    handleSubmit = (event)=> {
        event.preventDefault()
        console.log('check data input ', this.state)
    }

    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
                <form action="/action_page.php">
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event)=> this.handleChangeFirstName(event)}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(event)=> this.handleChangeLastName(event)}
                    />
                    <br /><br />
                    <input
                        type="submit"
                        value="Submit"
                        onClick={(event)=> this.handleSubmit(event)}
                    />
                </form>

                <ChildComponent
                name = {this.state.firstName}
                age = {'25'}
                address = {'Saigon'}
                jobs = {this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent;