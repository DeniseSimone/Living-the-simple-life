import './App.css';

import Header from './Components/Header'
import DateComponent from './Components/DateComponent';
import MainSection from './Components/MainSection';
import SidebarSection from './Components/SidebarSection';
import Footer from './Components/Footer'



function App() {
  const d = new Date().getDate();


  return (
      <>
        <Header />
        <div className='container-flex'>
          <DateComponent />

          <div className='container-main-aside'> 
            <MainSection/>
            <SidebarSection sidebarTitle="Other articles"/>
          </div>

        </div>

        <Footer />
      </>
  )
}

export default App;
