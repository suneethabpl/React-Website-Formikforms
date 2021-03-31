import React, {Component} from 'react';
class SingleService extends Component{
render(){
    return(
        <div className="col-md-4">
        <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary"></i>
            {/* <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i> */}
            <i className={`fas ${this.props.icon} fa-stack-1x fa-inverse`}></i>
        </span>
        {/* <h4 className="my-3">E-Commerce</h4> */}
        <h4 className="my-3">{this.props.title}</h4>
        {/* <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p> */}
        <p className="text-muted">{this.props.description}</p>
    </div>
    )
}
}
export default SingleService;