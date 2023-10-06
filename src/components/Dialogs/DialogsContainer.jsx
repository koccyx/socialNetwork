import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer.js';
import Dialogs from './Dialogs.jsx';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.jsx'
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.messagePage,
        isAuth: state.auth.isAuth,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (text) => {
            let action = updateNewMessageTextActionCreator(text);
            dispatch(action);
        },
        sendMessage: () => {
            let action = sendMessageActionCreator();
            dispatch(action)
        },
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs);;