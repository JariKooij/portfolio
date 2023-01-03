import { useWindowBlurChangeTitle } from "./utils/useWindowBlurChangeTitle";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
  useWindowBlurChangeTitle('Please, come back!');
  return (
    <div className="App">
        <div id="wrapper">
          <main>
          </main>
          <Sidebar />
        </div>
        <footer>
          <p>footer</p>
        </footer>
    </div>

  );
}