import React, { useEffect, useState } from "react";
import { Time, Mess } from '../../../assets'
import './style.css'
import moment from 'moment'

const RecipeItem = ({ name, authorName, createdAt, numfeed}) => {
    let time = moment(createdAt).fromNow();

    return (
        <div id='recipe-item' className="box">
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
            <div className="information">
                <div className="name">{name}</div>
                <div className="author">by {authorName}</div>
                <div className="icon">
                    <div className="item">
                        <img src={Time}/>
                        <div className="text">{time}</div>
                    </div>
                    <div className="item">
                        <img src={Mess}/>
                        <div className="text">{numfeed}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeItem