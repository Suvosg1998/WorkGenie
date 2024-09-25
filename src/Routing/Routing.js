import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../Layout/Header/Header';
import Home from '../Components/Home/Home';
import Registration from '../Components/Registration/Registration';
import Login from '../Components/Registration/Login/Login';
import About from '../Components/About/About';
import Profile from '../Components/Registration/Login/Profile/Profile';
import Footer from '../Layout/Footer/Footer';
import Post from '../Components/Postjob/Post';
import Jobs from '../Components/Postjob/Jobs/Jobs';
import View from '../Components/Postjob/Jobs/View';
import JobDetails from '../Components/Postjob/Jobs/JobDetails/JobDetails';
import JobEdit from '../Components/Postjob/Jobs/JobDetails/JobEdit';
import AllProfile from '../Components/Registration/Login/Profile/AllProfile';
import ReviewSection from '../Components/Reviews/Reviews';
import Edit_profile from '../Components/Registration/Login/Profile/Edit_profile';
import Admin from '../Components/Postjob/Jobs/Admin';
import Contact from '../Components/Contact/Contact';

function Routing() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="allprofile" element={<AllProfile/>} />
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />
        <Route path="about" element={<About />} />
        <Route path="profile/:id" element={<Profile />} />
        <Route path="profile/:id/editprofile/:id" element={<Edit_profile />} />
        <Route path="reviews" element={<ReviewSection />} />
        <Route path="post" element={<Post />} />
        <Route path='jobs'element={<Jobs/>}/>
        <Route path="admin" element={<Admin />} />
        <Route path='admin/view'element={<View/>}/>
        <Route path='admin/view/jobDetails/:id'element={<JobDetails/>}/>
        <Route path='admin/view/jobEdit/:id'element={<JobEdit/>}/>
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default Routing;
