import React from 'react'

const Alert = (props) => {

    const capitalize = (word) => {
        let temp = word.toLowerCase();
        return temp[0].toUpperCase() + temp.slice(1);
    }

  return (
        props.alert && <div className={`alert alert-success alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.Type)}</strong> : {props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
  )
}

export default Alert
