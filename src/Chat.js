import React, { useEffect, useState } from 'react';
import './Chat.css';
import { useParams } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import db from './firebase';


function Chat() {

    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null)
    const [roomMessages, setRoomMessages] = useState()

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomDetails(snapshot.data())
            ))
        }
        db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc').onSnapshot(
            snapshot => setRoomMessages(
                snapshot.docs.map(doc => doc.data())
            )
        )
    }, [roomId]);

    console.log(roomDetails);
    console.log('messayges', roomMessages);

    return (
        <div className='chat'>
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className='chat__channelName'>
                        <strong># {roomDetails?.name} </strong> <ExpandMoreIcon />
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
