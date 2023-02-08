// import { Button } from 'my-react-components-js/lib';
import { Button } from './components/';
// import 'my-react-components-js/es/index.css';
import './App.css';

function App() {
  return (
    <>
      large:
      <Button
        className="m"
        size="large"
        type="success"
        onDoubleClick={e => {
          console.log(e);
        }}
      >
        success
      </Button>
      <Button
        className="m"
        size="large"
        type="primary"
        onDoubleClick={e => {
          console.log(e);
        }}
      >
        primary
      </Button>
      <Button
        className="m"
        size="large"
        type="warn"
        onDoubleClick={e => {
          console.log(e);
        }}
      >
        warn
      </Button>
      <br />
      default:
      <Button
        className="m"
        type="success"
        onDoubleClick={e => {
          console.log(e);
        }}
      >
        success
      </Button>
      <Button
        className="m"
        type="primary"
        onDoubleClick={e => {
          console.log(e);
        }}
      >
        primary
      </Button>
      <Button
        className="m"
        type="warn"
        onDoubleClick={e => {
          console.log(e);
        }}
      >
        warn
      </Button>
      <br />
      small:
      <Button
        className="m"
        size="small"
        type="success"
        onDoubleClick={e => {
          console.log(e);
        }}
      >
        success
      </Button>
      <Button
        className="m"
        size="small"
        type="primary"
        onDoubleClick={e => {
          console.log(e);
        }}
      >
        primary
      </Button>
      <Button
        className="m"
        size="small"
        type="warn"
        onDoubleClick={e => {
          console.log(e);
        }}
      >
        warn
      </Button>
      <br />
      mini:
      <Button
        className="m"
        size="mini"
        type="success"
        onDoubleClick={e => {
          console.log(e);
        }}
      >
        success
      </Button>
      <Button
        className="m"
        size="mini"
        type="primary"
        onDoubleClick={e => {
          console.log(e);
        }}
      >
        primary
      </Button>
      <Button
        className="m"
        size="mini"
        type="warn"
        onDoubleClick={e => {
          console.log(e);
        }}
      >
        warn
      </Button>
      <br />
    </>
  );
}

export default App;
