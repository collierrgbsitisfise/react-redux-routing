import React from 'react';
import timezones from './../data/timezone';
import classnames from 'classnames'
import _ from 'lodash';

class SignupForm extends React.Component {

    constructor(props){
    	super(props);
    	this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: '',
            errors: {},
            isLoading: false
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
        this.setState({errors:{}, isLoading: true})
        this.props.userSignupRequest(this.state)
            .then(respone => {
                console.log(respone);
            })
            .catch(err => {
                this.setState({
                    errors: err.response.data.data,
                    isLoading: false
                });
            });
    }

    render() {

        const { errors } = this.state;
        const options = _.map(timezones, (key, val) => <option key={key} value={val}>{key}</option>)

        return (
            <form onSubmit={this.onSubmit}>
                <h1>join our community!</h1>

                <div className={classnames("form-group", {'has-error': errors.username})}>
                    <lable className="control-lable">Username</lable>
                    <input type="text" name="username" className="form-control"
                           value={this.state.username}
                           onChange={this.onChange}/>
                       {errors.username && <span className="help-block">{errors.username}</span>}
                </div>

                <div className={classnames("form-group", {'has-error': errors.email})}>
                    <lable className="control-lable">Email</lable>
                    <input type="email" name="email" className="form-control"
                           value={this.state.email}
                           onChange={this.onChange}/>
                    {errors.email && <span className="help-block">{errors.email}</span>}
                </div>

                <div className={classnames("form-group", {'has-error': errors.password})}>
                    <lable className="control-lable">Password</lable>
                    <input type="password" name="password" className="form-control"
                           value={this.state.password}
                           onChange={this.onChange}/>
                    {errors.password && <span className="help-block">{errors.password}</span>}
                </div>

                <div className={classnames("form-group", {'has-error': errors.passwordConfirmation})}>
                    <lable className="control-lable">Repeat Password</lable>
                    <input type="password" name="passwordConfirmation" className="form-control"
                           value={this.state.passwordConfirmation}
                           onChange={this.onChange}/>
                    {errors.passwordConfirmation && <span className="help-block">{errors.passwordConfirmation}</span>}
                </div>

                <div className={classnames("form-group", {'has-error': errors.timezone})}>
                    <lable className="control-lable">Timezone</lable>
                    <select name="timezone" className="form-control"
                        value={this.state.timezone}
                        onChange={this.onChange}>

                        <option value="" disabled>Choose you'r Timezone</option>
                        {options}
                </select>
                {errors.timezone && <span className="help-block">{errors.timezone}</span>}
                </div>

                <div className="form-group">
                    <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">Sign Up</button>
                </div>
            </form>
        );
    }

}
SignupForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}
export default SignupForm;
