import { FocusNode, useSetFocus } from '@please/lrud';
import './../App.css';

function Focus_trap() {
  const setFocus = useSetFocus();

  return (
    <FocusNode className="app">
      <FocusNode
        orientation="vertical"
        className="block-container block-container-vertical"
        focusId="list">
        <FocusNode className="block">One</FocusNode>
        <FocusNode className="block">Two</FocusNode>
        <FocusNode className="block" onSelected={() => setFocus('trap')}>
          Select to move into Trap
        </FocusNode>
      </FocusNode>

      <FocusNode
        orientation="vertical"
        className="block-container block-container-vertical">
        <FocusNode className="block">One</FocusNode>
        <FocusNode className="block">Two</FocusNode>
        <FocusNode className="block">Three</FocusNode>
      </FocusNode>

      <FocusNode
        focusId="trap"
        className="block-container focus-trap"
        forgetTrapFocusHierarchy
        isTrap
        orientation="vertical">
        <div className="block-header">Focus Trap</div>
        <FocusNode className="block-container-horizontal">
          <FocusNode className="block">One</FocusNode>
          <FocusNode className="block">Two</FocusNode>
          <FocusNode className="block">Three</FocusNode>
        </FocusNode>
        <FocusNode onSelected={() => setFocus('list')} className="block">
          Return
        </FocusNode>
      </FocusNode>
    </FocusNode>
  );
}
export default Focus_trap;