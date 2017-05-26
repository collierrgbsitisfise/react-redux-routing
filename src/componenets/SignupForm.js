import React from 'react';
import timezones from './../data/timezone';
import _ from 'lodash';

class SignupForm extends React.Component {

    constructor(props){
    	super(props);
    	this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            'timezone': ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.userSignupRequest(this.state);
    }

    render() {

        const options = _.map(timezones, (key, val) => <option key={key} value={val}>{key}</option>)

        return (
            <form onSubmit={this.onSubmit}>
                <h1>join our community!</h1>

                <div className="form-group">
                    <lable className="control-lable">Username</lable>
                    <input type="text" name="username" className="form-control"
                           value={this.state.username}
                           onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <lable className="control-lable">Email</lable>
                    <input type="email" name="email" className="form-control"
                           value={this.state.email}
                           onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <lable className="control-lable">Password</lable>
                    <input type="password" name="password" className="form-control"
                           value={this.state.password}
                           onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <lable className="control-lable">Repeat Password</lable>
                    <input type="password" name="passwordConfirmation" className="form-control"
                           value={this.state.passwordConfirmation}
                           onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <lable className="control-lable">Timezone</lable>
                    <select name="timezone" className="form-control"
                        value={this.state.timezone}
                        onChange={this.onChange}>

                        <option value="" disabled>Choose you'r Timezone</option>
                        {options}
                </select>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-lg">Sign Up</button>
                </div>
            </form>
        );
    }

}
SignupForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}
export default SignupForm;
