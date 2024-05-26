import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Card from './component/Card/Card';
import Sidebar from './component/Sidebar/Sidebar';
import Blog from './component/Blog/Blog';

function App() {

  return (
    <>
      <Navbar />
      <Blog />
    </>
  )
}

export default App
