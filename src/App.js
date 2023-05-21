import Header from './components/Header';
import Intro from './components/Intro';
import CompanyInfo from './components/CompanyInfo';
import Specializations from './components/Specializations';
import RecruitmentAreas from './components/RecruitmentAreas';
import Numbers from './components/Numbers';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
    <div className='mx-20 sm:mx-0'>
    <div className='p-5'>
      <Header />
      <Intro />
      <CompanyInfo />
      <Specializations />
      <RecruitmentAreas />
      <Numbers />
      <ContactUs />
      
      </div>
    </div>
    <Footer />
    </>
  );
}

export default App;
