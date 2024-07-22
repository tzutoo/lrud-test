import { FocusNode } from '@please/lrud';
import './../App.css';

function Grid() {
  return (
    <FocusNode className="app1">
      <FocusNode
        isGrid
        className="block-container1 grid"
        defaultFocusColumn={2}
        defaultFocusRow={2}>
        <FocusNode className="grid-row">
          <FocusNode className="block1">1</FocusNode>
          <FocusNode className="block1">2</FocusNode>
          <FocusNode className="block1">3</FocusNode>
          <FocusNode className="block1">4</FocusNode>
          <FocusNode className="block1">5</FocusNode>
        </FocusNode>

        <FocusNode className="grid-row">
          <FocusNode className="block1">6</FocusNode>
          <FocusNode className="block1">7</FocusNode>
          <FocusNode className="block1">8</FocusNode>
          <FocusNode className="block1">9</FocusNode>
          <FocusNode className="block1">10</FocusNode>
        </FocusNode>

        <FocusNode className="grid-row">
          <FocusNode className="block1">11</FocusNode>
          <FocusNode className="block1">12</FocusNode>
          <FocusNode className="block1">13</FocusNode>
          <FocusNode className="block1">14</FocusNode>
          <FocusNode className="block1">15</FocusNode>
        </FocusNode>

        <FocusNode className="grid-row">
          <FocusNode className="block1">16</FocusNode>
          <FocusNode className="block1">17</FocusNode>
          <FocusNode className="block1">18</FocusNode>
          <FocusNode className="block1">19</FocusNode>
          <FocusNode className="block1">20</FocusNode>
        </FocusNode>

        <FocusNode className="grid-row">
          <FocusNode className="block1">21</FocusNode>
          <FocusNode className="block1">22</FocusNode>
          <FocusNode className="block1">23</FocusNode>
          <FocusNode className="block1">24</FocusNode>
          <FocusNode className="block1">25</FocusNode>
        </FocusNode>
      </FocusNode>

      <FocusNode
        orientation="vertical"
        className="block-container1 block-container1-vertical">
        <FocusNode className="block1">One</FocusNode>
        <FocusNode className="block1">Two</FocusNode>
        <FocusNode className="block1">Three</FocusNode>
      </FocusNode>
    </FocusNode>
  );
}
export default Grid;
