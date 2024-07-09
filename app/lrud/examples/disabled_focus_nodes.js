import React,{ useState } from 'react';
import { FocusNode } from '@please/lrud';
import './../App.css';

function Disabled_focus_nodes() {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <FocusNode className="app1">
      <FocusNode
        orientation="vertical"
        className="block-container1 block-container1-vertical">
        <FocusNode className="block1">One</FocusNode>
        <FocusNode className="block1">Two</FocusNode>
        <FocusNode
          className="block1"
          onSelected={() => {
            setIsDisabled((disabled) => !disabled);
          }}>
          Toggle Disabled State
        </FocusNode>
      </FocusNode>

      <FocusNode
        focusId="parent"
        orientation="vertical"
        className="block-container1 block-container1-vertical"
        disabled={isDisabled}>
        <FocusNode focusId="child1" className="block1">
          One
        </FocusNode>
        <FocusNode focusId="child2" className="block1">
          Two
        </FocusNode>
        <FocusNode
          className="block1"
          onSelected={() => {
            setIsDisabled((disabled) => !disabled);
          }}>
          Toggle Disabled State
        </FocusNode>
      </FocusNode>

      <FocusNode className="block-container1 block-container1-horizontal">
        <FocusNode className="block1">One</FocusNode>
        <FocusNode className="block1">Two</FocusNode>
        <FocusNode className="block1">Three</FocusNode>
      </FocusNode>
    </FocusNode>
  );
}
export default Disabled_focus_nodes;
