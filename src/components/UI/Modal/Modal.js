import React, {Component } from 'react';

import './Modal.css';
import Aux from '../../../hoc/Auxx/Aux';
import BackDrop from '../Backdrop/Backdrop';


class Modal extends Component { 
    shouldComponentUpdate(nextProps, nextState) {
            return nextProps.show !== this.props.show;
    }

    componentWillUpdate() {
        console.log('Modal will Update');
    }

    render() {
        return( 
            <Aux>
                <BackDrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div 
                    className="Modal"
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1': '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;