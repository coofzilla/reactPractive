import Header from './components/Header/Header';
import TaskInput from './components/TaskInput/TaskInput';

const App = () => {
  return (
    <div className="App">
      {/* whats going on here ?*/}
      {/* what are props? how does it make things more reusable? */}
      <Header header="Today" fontSize={36} />
      <TaskInput />
    </div>
  );
};

export default App;
