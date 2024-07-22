'use client'

import React, { useEffect, useState } from 'react'
import './App.css';
import ClientSideComponent from './david/client_side_component';
import ServerSideComponent from "@/app/lrud/david/server_side_component";
import { FocusNode, useFocusNodeById, useSetFocus } from '@please/lrud';

export default function ExampleComponent() {
    const rootNode = useFocusNodeById('root');
    const setFocus = useSetFocus();
    const [focusedClient, setFocusedClient] = useState(0);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case 'ArrowUp':
                    if (focusedClient > 0) {
                        setFocusedClient(prev => prev - 1);
                        setFocus(`client${focusedClient}`);
                    }
                    break;
                case 'ArrowDown':
                    if (focusedClient < 2) {
                        setFocusedClient(prev => prev + 1);
                        setFocus(`client${focusedClient + 2}`);
                    }
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [rootNode, focusedClient, setFocus]);

    return (
        <FocusNode orientation="vertical" focusId="root">
            <FocusNode focusId="client1">
                <ClientSideComponent message={"Hello World!"}/>
            </FocusNode>
            <FocusNode focusId="client2">
                <ClientSideComponent message={"Hello World!"}/>
            </FocusNode>
            <FocusNode focusId="client3">
                <ClientSideComponent message={"Hello World!"}/>
            </FocusNode>
        </FocusNode>
    )
}
