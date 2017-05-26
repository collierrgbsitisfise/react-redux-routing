import React from 'react';
import { connect } from 'react-redux';
import FlashMeassage from './FlashMeassage'
import { deleteFlashMessage } from './../../actions/flashMessages';

class FlashMeassagesList extends React.Component{
    render() {
        const messages = this.props.messages.map(message =>
            <FlashMeassage key={message.id} message={message}  deleteFlashMessage={this.props.deleteFlashMessage}/>
        );
        return (
            <div>{messages}</div>
        );
    }
};

FlashMeassagesList.propTypes = {
    messages: React.PropTypes.array.isRequired,
    deleteFlashMessage: React.PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    return {
        messages: state.flashMeassages
    }
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMeassagesList);
