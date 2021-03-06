import React from "react";
import User from "../images/user.png";

const CardContact = (props)=> {

    const {id, name, email} = props.contact;

    return(
        <div className="item">
            <img className="ui avatar image" src={User} alt="user" />
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i className="trash alternate outline icon"
            style={{color: "red",marginTop:"10px"}}></i>
        </div>
    );
};

export default CardContact;