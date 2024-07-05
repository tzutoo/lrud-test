'use client'

import React from 'react'
import './App.css';
import ClientSideComponent from './david/client_side_component';
import ServerSideComponent from "@/app/lrud/david/server_side_component";

export default function ExampleComponent() {
    return (
        // <ServerSideComponent/>
        <ClientSideComponent message={"Hello World!"}/>
    )
}
