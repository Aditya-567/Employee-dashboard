import './App.css';
import EmployeeCard from './component/EmployeeCard';
import Dashboard from './component/EmployeesActivityDashboard';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='maindash'>
        <Dashboard />
        <EmployeeCard />
      </div>

    </div>
  );
}

export default App;
