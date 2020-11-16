import React from 'react';
import { useHistory } from 'react-router-dom';
import './SidebarOption.css';
import db from './firebase.js'

function SidebarOption({Icon, title, id, addChannelOption}) {

    const history = useHistory();

    const selectChannel = () => {
        if (id)
        {
            history.push(`/room/${id}`);
        }
        else
        {
            history.push(title);
        }
    };

    const addChannel = () => {
        const channelName = prompt('Pleaase enter the channel Name');

        if (channelName)
        {
            db.collection('ROOM').add(
                {
                    NAME: channelName.toLowerCase()
                }
            )
        }
    };


	return (
		<div className = "sidebarOption" onClick = {addChannelOption ? addChannel : selectChannel}>
            {
                Icon &&
                <Icon className = 'sidebarOption__icon' />
            }
            {
                Icon ?
                (
                    <h3 className = 'sidebarOption__thread'>{title}</h3>
                ) :
                (
                    <h3 className = 'sidebarOption__channel'>
                        <span className = 'sidebarOption__hash'>#</span> {title}
                    </h3>
                )
            }
		</div>
	);
}

export default SidebarOption;
