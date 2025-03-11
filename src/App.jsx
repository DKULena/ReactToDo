import Controls from "./components/Controls/Controls";
import Layout from "./components/Layout/Layout";
import Title from "./components/Title/Title";
import TodoList from "./components/TodoList/TodoList";
import { TodoProvider } from "./context";

function App() {
  return (
    <TodoProvider>
      <Layout>
        <Title />
        <Controls />
        <TodoList />
      </Layout>
    </TodoProvider>
  );
}

export default App;
