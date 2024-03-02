import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import data from './data.json';
import { createContext, useState } from 'react';

export const Context = createContext();

function App() {
  const [filter, setFilter] = useState([]);
  const [jobs, setJobs] = useState({ data });
  return (
    <Context.Provider value={{ userJobs: jobs, userSetJobs: setJobs, userFilter: filter, userSetFilter: setFilter }}>
      <div className='App grid gap-8'>
        <Header />
        <Main />
      </div>
    </Context.Provider>
  );
}

export default App;
