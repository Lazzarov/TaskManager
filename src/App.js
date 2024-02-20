import logo from './logo.svg';
import './App.css';
import AddTask from './AddTask';

function App() {
  return (
    <div className='upper'>
      <div className='container'>
        <header className='header'>
          My Task
        </header>
        <div className='tasks'>
          <div className='tasks__item'>
            <h2>Task title</h2>
            <p>make something and bla bla bla</p>
          </div>
        </div>

        <div className='tasks'>
          <div className='tasks__item'>
            <h2>Task title</h2>
            <p>make something and bla bla bla</p>
          </div>
        </div>

        <div className='tasks'>
          <div className='tasks__item'>
            <h2>Task title</h2>
            <p>make something and bla bla bla</p>
          </div>
        </div>

        <div className='button'>
          <button className='btn'>
            +
          </button>
        </div>
        <AddTask />
      </div>
    </div>
  )
}

export default App;
