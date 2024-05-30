import './App.css'
import Navbar from './component/Navbar/Navbar'
import Card from './component/Card/Card';
import Sidebar from './component/Sidebar/Sidebar';
import Blog from './component/Blog/Blog';

function App() {

  return (
    <>
      <Navbar />
      <div className='md:flex max-w-6xl mx-auto'>
        <Blog />
      </div>
    </>
  )
}

export default App
