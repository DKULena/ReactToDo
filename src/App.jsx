import { useEffect } from "react";
import Controls from "./components/Controls/Controls";
import Layout from "./components/Layout/Layout";
import Title from "./components/Title/Title";
import TodoList from "./components/TodoList/TodoList";
import { useDispatch } from "react-redux";
import { fetchTodos } from "../store/todoSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  
  return (
      <Layout>
        <Title />
        <Controls />
        <TodoList />
      </Layout>
  );
}

export default App;