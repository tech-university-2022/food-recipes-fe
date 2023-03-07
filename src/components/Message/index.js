import React from "react";
import "./style.css"

const Message = async ({ type, content }) => {
    const typeImg = await import(`../../assets/${type}.png`);

    return (
        <div className="message">
            <img 
                src={typeImg} 
                width="1rem" 
                height="1rem"
            />
            <div 
                className="text"
            >
                {content}
            </div>
        </div>
    )
}

export default Message;