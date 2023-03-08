import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const ChatsPages = () => {
    const [datas, setData] = useState([]);

    const fetchChats = async () => {
        const data = await axios.get("/api/chat");
        setData(data);
    };
    useEffect(() => {
        fetchChats();
    }, []);

    const chats = datas?.data;
    console.log(chats);

    return (
        <div>
            {
                chats?.map((ch) => <li key={ch._id}>
                    {ch?.chatName}</li>
                )
            }

        </div>
    );
};

export default ChatsPages;