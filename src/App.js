import logo from './logo.svg';
import './App.css';
import Welcome from  './components/Welcome';
import WelcomeCL from './components/WelcomeCL';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import avatar-02 from '/my-app/public'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  return (
    <div className="App">
              <div class="testimonials" id="testimonials">

      <div className="container">
   <Card describe="    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus ab facilis repudiandae aspernatur libero quibusdam" image="/my-app/public/avatar-02.png"/>
   <Card image="/my-app/public/avatar-02.png"/>
   <Card/>
   <Card/>
   <Card image="/my-app/public/avatar-02.png"/>
   <Card/>

   </div>
   </div>
    </div>
  );
}
export default App;
