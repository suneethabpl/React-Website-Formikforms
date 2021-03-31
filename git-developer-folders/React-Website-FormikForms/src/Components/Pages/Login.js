import React, { Component } from 'react';
import Field from '../Common/Field';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import * as AuthActions from '../../store/actions/authActions'
import * as Yup from 'yup';

const fields = [
    { name: 'email', elementName: 'input', type: 'email', placeholder: 'your email' },
    { name: 'password', elementName: 'input', type: 'password', placeholder: 'your password' }
]

class Login extends Component {
    render() {
        return (
            // <h1>Login</h1>
            <div className="login-page">
                <div className="container">
                    <div className="login-form">
                        <div className="row">
                            <h1>Login</h1>
                        </div>
                        <div className="row">
                            {/* <form onSubmit={this.props.handleSubmit}> */}
                            <form onSubmit={e => { 
                                e.preventDefault();
                                this.props.login(this.props.values.email,this.props.values.password);
                            }}>
                                {fields.map((f, i) => {
                                    return (
                                        <div className="col-md-12">
                                            <Field
                                                key={i}
                                                {...f}
                                                value={this.props.values[f.name]}
                                                name={f.name}
                                                onChange={this.props.handleChange}
                                                onBlur={this.props.handleBlur}
                                                touched={(this.props.touched[f.name])}
                                                errors={this.props.errors[f.name]}

                                            />
                                        </div>
                                    )
                                })}
                                <div className="col-md-12">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (email, pass) => {
            // console.log("Loging in user", email);
            dispatch(AuthActions.login(email,pass));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withFormik({
// export default connect(withFormik({
    mapPropsToValues: () => ({
        email: '',
        password: ''
    }),
    validationSchema: Yup.object().shape({
        email: Yup.string().email('email is invalid').required('you need to login with email address'),
        password: Yup.string().required('you need to enter your password.')
    }),
    handleSubmit: (values, { setSubmitting }, login) => {
        console.log("Login attempt", values);
        // this.props.login(values.email,values.password);
    //   login(values.email,values.password);
    }
// }))(Login);
})
// (connect(
//     mapStateToProps,
//     mapDispatchToProps
// )
(Login));