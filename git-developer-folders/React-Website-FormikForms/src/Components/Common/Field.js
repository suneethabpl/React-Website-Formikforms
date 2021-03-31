import React, { Component } from 'react';

class Field extends Component {
    render() {
        // return (
        //     <div className="form-group">
        //         {this.props.elementName === 'input' ? 
        //         <input
        //             className="form-control"
        //             id="name"
        //             type="text"
        //             placeholder="Your Name *"
        //             required="required"
        //             data-validation-required-message="Please enter your name."
        //             value={this.state.name}
        //             onChange={e => this.setState({ name: e.target.value })}
        //         />
        //         :
        //         <textarea
        //             className="form-control"
        //             id="message"
        //             placeholder="Your Message *"
        //             required="required"
        //             data-validation-required-message="Please enter a message."
        //             value={this.state.message}
        //             onChange={e => this.setState({ message: e.target.value })}
        //         />
        //         }
        //         {/* </textarea> */}
        //         <p className="help-block text-danger"></p>
        //     </div>
        // )

        return (
            <div className="form-group">
                {this.props.elementName === 'input' ?
                    <input
                        className="form-control"
                        id={this.props.name}
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                        required="required"
                        data-validation-required-message="Please enter your name."
                        // value={this.props.value}
                        // onChange={e => this.props.onChange(e)}
                        name={this.props.name}
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                    />
                    :
                    <textarea
                        className="form-control"
                        id={this.props.name}
                        placeholder={this.props.placeholder}
                        required="required"
                        data-validation-required-message="Please enter a message."
                        // value={this.props.value}
                        // onChange={e => this.props.onChange(e)}
                        name={this.props.name}
                        onChange={this.props.onChange}
                    />
                }
                {/* </textarea> */}
                <p className="help-block text-danger">
                {/* {(this.props.touched && this.props.errors) && <span>This field is required!</span>} */}
                               {(this.props.touched && this.props.errors) && <span>{this.props.errors}</span>}
                </p>
            </div>
        )
    }
}
export default Field;