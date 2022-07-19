import React, { useEffect, useState } from 'react';
import './Chat.css';
import { useParams } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import db from './firebase';


function Chat() {

    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null)

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomDetails(snapshot.data())
            ))
        }
    }, [roomId]);

    console.log(roomDetails);

    return (
        <div className='chat'>
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className='chat__channelName'>
                        <strong>#general</strong> <ExpandMoreIcon />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <PersonAddIcon />
                </div>
            </div>
        </div>
    )
}

export default Chat
