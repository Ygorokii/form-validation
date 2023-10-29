import './App.css'
import './player.css'
import './carousel.css'

function App() {
  return (
  <>
  <body>
    <nav>
      <div class="navbar">
        <div class="container nav-container">
            <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>  
          <div class="logo">
            
            <h1 className='coffe'>Coffee</h1>
          </div>
          <div class="menu-items">
            <li><a href="#">sobre nós</a></li>
            <li><a href="#">nossos grãos</a></li>
            <li><a href="#">nossas lojas</a></li>
            <li><a href="#">franquia</a></li>
            <li><a href="#">master franquia</a></li>
           <li><a href="#">fale conosco</a></li>            
           <li><a href="#">trabalhe conosco</a></li>
          </div>
        </div>
      </div>
    </nav>
  </body>
 
 
<a href="https://www.instagram.com/ygoroki/">
<img className='icon' src="src/café/insta pequeno.png" alt="" />
</a>

<a href="https://www.linkedin.com/in/ygor-silva-135a89279/">
<img className='icon' src='src/café/linkdin.png' alt=''/>
</a>

<img className='xicara' src='src/café/icons8-tea-cup.gif' alt=''/>

<video autoPlay loop muted className='video'src="src/café/coffee girls.mp4"></video>


<nav class="mynav">
  <ul className='ul'> 
    <li className='home'><a href="">Home</a></li>
    <li className='about'><a href="">About</a></li>
    <li className='company'><a href="">Company</a></li>
    <li className='work'><a href="">Work</a></li>
    <li clients className='clients'><a href="">Clients</a></li>
    <li contact className='contact'><a href="">Contact</a></li>
  </ul>
</nav>
<span class="target"></span>


<div class="carousel">
  <div tabindex="0" class="carousel--item one"></div>
  <div tabindex="0" class="carousel--item two"></div>
  <div tabindex="0" class="carousel--item three"></div>
  <div tabindex="0" class="carousel--item four"></div>
  <div tabindex="0" class="carousel--item five"></div>
</div>






</>


  )
}

export default App
