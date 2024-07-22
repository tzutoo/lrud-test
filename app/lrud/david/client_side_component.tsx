'use client';

import {FocusNode} from "@please/lrud";
import React from "react";

export default function ClientSideComponent({message}: { message: string }) {

    return (
        <FocusNode className="app1"
                   onFocused={(e) => {
                       console.log("ROOT");
                   }}>

            <FocusNode
                onSelected={(e) => {
                    console.log("01");
                }}
                onFocused={(e) => {
                    console.log("focus 01");
                }}
                onBlurred={(e) => {
                    console.log("onBlurred 01");
                }}

                className="block-container1 block-container1-horizontal">
                <FocusNode

                    className="block1"
                    onSelected={(e) => {
                        console.log("11");
                    }}>One</FocusNode>
                <FocusNode className="block1"
                           onSelected={(e) => {
                               console.log("12");
                           }}>Two</FocusNode>
                <FocusNode className="block1"
                           onSelected={(e) => {
                               console.log("13");
                           }}>Three</FocusNode>
            </FocusNode>

            <FocusNode
                className="block-container1 block-container1-horizontal"
                onSelected={(e) => {
                    console.log("02");
                }}
                onFocused={(e) => {
                    console.log("focus 02");
                }}
                onBlurred={(e) => {
                    console.log("onBlurred 02");
                }}
            >
                <FocusNode className="block1">One</FocusNode>
                <FocusNode className="block1">Two</FocusNode>
                <FocusNode className="block1">Three</FocusNode>
            </FocusNode>

            <FocusNode className="block-container1 block-container1-horizontal"
                       onSelected={(e) => {
                           console.log("03");
                       }}
                       onFocused={(e) => {
                           console.log("focus 03");
                       }}
                       onBlurred={(e) => {
                           console.log("onBlurred 03");
                       }}>
                <FocusNode className="block1">One</FocusNode>
                <FocusNode className="block1">Two</FocusNode>
                <FocusNode className="block1">Three</FocusNode>
            </FocusNode>

            <div>
                {message}
            </div>

        </FocusNode>
    );
}
