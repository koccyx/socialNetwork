import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import { Navigate } from 'react-router-dom';

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let messageElements = state.messages.map((elem) => <Message message={elem.message} key={elem.id}/>);
    
    let dialogsElements = state.dialogs.map((elem) => <DialogItem id={elem.id} name={elem.name} key={elem.id}/>);

    let newMessageElement = React.createRef();
    
    let sendMessage = () => {
        props.sendMessage();
    };


    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessage(text)
    };

    if (props.isAuth == false) return <Navigate to='/login' />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsOutput}>
                <div className={s.dialogItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messageElements}
                </div>
            </div>
            <div className={s.dialogsInput}>
                <textarea ref={newMessageElement} value={state.newMessageText} onChange={onMessageChange}></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;