import './intro.scss'
import Typewriter from 'typewriter-effect';

export default function Intro() {  
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assests/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className='wrapper'>
          <h2>Hi There, I'm</h2>
          <h1>John Doe</h1>
          <h3>Frontend <span><Typewriter
  options={{
    strings: ['Developer', 'Designer', 'Programmer'],
    autoStart: true,
    loop: true,
    deleteSpeed: 50,
    delay: 120,
    pauseFor: 50
  }}
/></span></h3>
        </div>
        <a href='#portfolio'>
          <img src='assests/down.png' alt='' />
        </a>
      </div>
    </div>
  )
}
