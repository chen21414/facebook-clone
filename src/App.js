import './App.css';
import Header from './Header'
import Sidebar from './Sidebar.js'
import Feed from './Feed'
import Widgets from './Widgets'
import Login from './Login'
import {useStateValue} from './StateProvider'

function App() {
  const [{user},dispatch] = useStateValue(); //using context API
  return (
    <div className="app">
      {!user ? (<Login/>) : (
          <>
          <Header/>

          {/* App Body */}
          <div className='app_body'>
          <Sidebar />
          <Feed/>
          <Widgets/>
          </div>
          </>
      )}
      
        
    </div>
  );
}

export default App;
