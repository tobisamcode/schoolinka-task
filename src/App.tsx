import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import MainTodoComponent from "./components/MainTodoComponent";

function App() {
  return (
    <>
      <div className="">
        <Header />

        <section className=" container pt-2">
          <MainTodoComponent />
        </section>

        <Toaster />
      </div>
    </>
  );
}

export default App;
