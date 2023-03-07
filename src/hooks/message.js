import React from 'react';
import Message from "../components/Message";

const useMessage = () => {
    const open = ({ type, content, duration = 5 }) => {
        const root = document.getElementById('root');
        
        const message = React.createElement(Message, { content: content, type: type });
        root.appendChild(message);

        setTimeout(() => {
            root.removeChild(message)
        }, [duration * 1000]);
    }

    return {
        message: {
            open: open
        }
    }
}

export default useMessage;