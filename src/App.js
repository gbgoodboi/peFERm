import EmployeeFormComponent from './component/EmployeeFormComponent';
import './App.css';
import EmployeeList from './component/EmployeeList';

function App() {
  return (
    <div className='App'>
      <EmployeeFormComponent />
      <div className='col-10 offset-1'>
        <hr />
      </div>
      <EmployeeList />
    </div>
  );
}

export default App;
