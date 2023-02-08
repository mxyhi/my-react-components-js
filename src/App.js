import { Button } from 'my-react-components-js/lib';
import 'my-react-components-js/es/index.css';

function App() {
  return (
    <>
      <Button
        size="large"
        type="success"
        onDoubleClick={e => {
          console.log(e);
        }}
      >
        button
      </Button>
    </>
  );
}

export default App;
