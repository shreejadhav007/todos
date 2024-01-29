import logo from './logo.svg';
import './App.css';
import ShowList from './Components/ShowList';
import Entry from './Components/main/Entry';
import All from './Components/main/All';
import Nav from './Components/main/Nav';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div className="App">
      
      {/* <ShowList/> */}
      {/* <Nav/> */}
      <All/>
    </div>
  );
}

export default App;
