import { FocusNode, useSetFocus } from '@please/lrud';
import './../App.css';

function Focus_trap() {
  const setFocus = useSetFocus();

  return (
    <FocusNode className="app1">
      <FocusNode
        orientation="vertical"
        className="block-container1 block-container1-vertical"
        focusId="list">
        <FocusNode className="block1">One</FocusNode>
        <FocusNode className="block1">Two</FocusNode>
        <FocusNode className="block1" onSelected={() => setFocus('trap')}>
          Select to move into Trap
        </FocusNode>
      </FocusNode>

      <FocusNode
        orientation="vertical"
        className="block-container1 block-container1-vertical">
        <FocusNode className="block1">One</FocusNode>
        <FocusNode className="block1">Two</FocusNode>
        <FocusNode className="block1">Three</FocusNode>
      </FocusNode>

      <FocusNode
        focusId="trap"
        className="block-container1 focus-trap"
        forgetTrapFocusHierarchy
        isTrap
        orientation="vertical">
        <div className="block-header">Focus Trap</div>
        <FocusNode className="block-container1-horizontal">
          <FocusNode className="block1">One</FocusNode>
          <FocusNode className="block1">Two</FocusNode>
          <FocusNode className="block1">Three</FocusNode>
        </FocusNode>
        <FocusNode onSelected={() => setFocus('list')} className="block1">
          Return
        </FocusNode>
      </FocusNode>
    </FocusNode>
  );
}
export default Focus_trap;
