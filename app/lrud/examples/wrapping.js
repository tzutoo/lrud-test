import { FocusNode } from '@please/lrud';
import './../App.css';

function Wrapping() {
  return (
    <FocusNode className="app1">
      <FocusNode wrapping className="block-container1">
        <h1 className="block-title">Wraps</h1>
        <div className="flex">
          <FocusNode className="block1">One</FocusNode>
          <FocusNode className="block1">Two</FocusNode>
          <FocusNode className="block1">Three</FocusNode>
        </div>
      </FocusNode>

      <FocusNode className="block-container1">
        <h1 className="block-title">Does not wrap</h1>
        <div className="flex">
          <FocusNode className="block1">One</FocusNode>
          <FocusNode className="block1">Two</FocusNode>
          <FocusNode className="block1">Three</FocusNode>
        </div>
      </FocusNode>
    </FocusNode>
  );
}
export default Wrapping;
