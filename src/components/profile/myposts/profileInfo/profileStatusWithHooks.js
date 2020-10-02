import React, {useEffect, useState} from "react";


const ProfileStatusWithHooks = (props) => {


    let [editMode, SetEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activeMode = () => {
        SetEditMode(true);
    }

    const deactiveteEditMode = () => {
        SetEditMode(false)
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activeMode}>{status}</span>

            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactiveteEditMode}
                       value={status}></input>
                <button onClick={deactiveteEditMode}>Save</button>

            </div>

            }
        </div>
    )

}

export default ProfileStatusWithHooks;