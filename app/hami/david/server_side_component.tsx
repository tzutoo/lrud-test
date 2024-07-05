import React, { useEffect, useState } from 'react';
import '../App.css';
import ClientSideComponent from "@/app/lrud/david/client_side_component";
import {fakeServerAction} from "@/app/action/fake_server_action";

export default function ServerSideComponent() {
    const [serverData, setServerData] = useState(null);

    useEffect(() => {
        const data = fakeServerAction();
        setServerData(data);
        console.log(data);
    }, []);

    return (
        <ClientSideComponent message={serverData}/>
    );
}
