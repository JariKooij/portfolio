import { useWindowBlurChangeTitle } from "./utils/useWindowBlurChangeTitle";

export default function App() {
  useWindowBlurChangeTitle('Please, come back!');

  return (
    <div className="App">
      <p>Hello world</p>
    </div>
  );
}