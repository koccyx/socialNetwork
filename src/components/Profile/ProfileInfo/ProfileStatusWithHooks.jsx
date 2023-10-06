import React, { useEffect, useState } from 'react';

function ProfileStatusWithHooks(props) {

  let [editMode, setEditmode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditmode(true);
  };

  const deActivateEditMode = () => {
    setEditmode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
      setStatus(e.currentTarget.value); 
  };

  return (
    <div> 
      {!editMode &&
      <div>
        <span onDoubleClick={ activateEditMode }> {props.status || '----'}</span>
      </div>
      }
      {editMode &&
      <div>
        <input onBlur={deActivateEditMode} autoFocus={true} 
          value={status}
          onChange={onStatusChange}/>jcccc
      </div>
      }
    </div>
  )
}


export default ProfileStatusWithHooks;