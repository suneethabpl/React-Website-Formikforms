import React, { Component } from 'react';
import Field from '../Common/Field';
import { withFormik } from 'formik';
import * as Yup from 'yup';



const fields = {
    sections: [

        [
            { name: 'name', elementName: 'input', type: 'text', placeholder: 'your name*' },
            { name: 'email', elementName: 'input', type: 'email', placeholder: 'your email*' },
            { name: 'phone', elementName: 'input', type: 'text', placeholder: 'your phone number*' }
        ],
        [
            { name: 'message', elementName: 'textarea', type: 'text', placeholder: 'type your message*' }
        ]
    ]
}






class Contact extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         name: '',
    //         email: '',
    //         phone: '',
    //         message: ''
    //     }
    // }

    // submitForm = (e) => {
    //     console.log(e);
    //     e.preventDefault();
    //     alert("Form submitted. Thank you very much!");
    // }

    render() {
        return (
            // <!-- Contact-->
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Contact Us</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">

                            {/* <form id="contactForm" name="sentMessage" noValidate="novalidate" onSubmit={e => this.submitForm(e)}> */}
                            <form id="contactForm" name="sentMessage" noValidate="novalidate" onSubmit={this.props.handleSubmit}>
                                <div className="row align-items-stretch mb-5">
                                    {fields.sections.map((section, sectionIndex) => {
                                        console.log("Rendering section", sectionIndex, "with", section);
                                        return (
                                            <div className="col-md-6">
                                                {section.map((field, i) => {
                                                    return <Field
                                                        {...field}
                                                        key={i}
                                                        // value={this.state[field.name]}
                                                        // onChange={e => this.setState({
                                                        //     [field.name]: e.target.value

                                                        // })}
                                                        value={this.props.values[field.name]}
                                                        name={field.name}
                                                        onChange={this.props.handleChange}
                                                        onBlur={this.props.handleBlur}
                                                        touched={(this.props.touched[field.name])}
                                                        errors={this.props.errors[field.name]}
                                                    />
                                                })}
                                            </div>
                                        )
                                    })}

                                    {/* <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                id="name"
                                                type="text"
                                                placeholder="Your Name *"
                                                required="required"
                                                data-validation-required-message="Please enter your name."
                                                value={this.state.name}
                                                onChange={e => this.setState({ name: e.target.value })}
                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                id="email"
                                                type="email"
                                                placeholder="Your Email *"
                                                required="required"
                                                data-validation-required-message="Please enter your email address."
                                                value={this.state.email}
                                                onChange={e => this.setState({ email: e.target.value })}
                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <div className="form-group mb-md-0">
                                            <input
                                                className="form-control"
                                                id="phone"
                                                type="tel"
                                                placeholder="Your Phone *"
                                                required="required"
                                                data-validation-required-message="Please enter your phone number."
                                                value={this.state.phone}
                                                onChange={e => this.setState({ phone: e.target.value })}
                                            />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div> */}
                                    {/* <div className="col-md-6">
                                        <div className="form-group form-group-textarea mb-md-0"> 
                                     <textarea
                                                className="form-control"
                                                id="message"
                                                placeholder="Your Message *"
                                                required="required"
                                                data-validation-required-message="Please enter a message."
                                                value={this.state.message}
                                                onChange={e => this.setState({ message: e.target.value })}
                                            />

                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div> */}



                                    <div className="clearfix"></div>
                                    <div className="col-lg-12 text-center">
                                        <div id="success"></div>
                                        <button className="btn btn-primary btn-xl text-uppercase"
                                            // id="sendMessageButton" 
                                            type="submit"
                                        // onClick={e => this.submitForm(e)}
                                        >Send
                                Message</button>
                                    </div>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

// export default Contact;
export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: '',
    }),
    // validate: values => {
    //     const errors = {};
    //     Object.keys(values).map(v => {
    //         if (!values[v]) {
    //             errors[v] = "Required";
    //         }
    //     })
    //     return errors;
    // },

    validationSchema: Yup.object().shape({
        // name: Yup.string().required('You must give us your name ')
        name: Yup.string().min(3, 'Come on bro, your name is longer than that').required('You must give us your name '),
        email: Yup.string().email('you need to give us a valid email').required('we need your email'),
        phone: Yup.string()
            .min(10, 'please provide your 10 digit phone number')
            .max(15, 'your phone number is too long')
            .required('we need a phone number to reach you'),
        message: Yup.string().min(500, 'You need to provide us more detailed information')
            .required('Message is required.')
    }),
    handleSubmit: (values, { setSubmitting }) => {
        console.log("values", values);
        alert("you've submitted the form", JSON.stringify(values));
    }
})(Contact);