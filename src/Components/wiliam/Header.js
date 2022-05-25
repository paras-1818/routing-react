import React from 'react'

function Header() {
  return (
    <>  
      
        <div className="top">
            <div className="icons">
                <ul className="top__n">
                    <li className="social"><a href="#" ><i className='bx bxl-facebook'></i></a></li>
                    <li className="social"><a href="#"><i className='bx bxl-instagram' ></i></a></li>
                    <li className="social"><a href="#"><i className='bx bxl-linkedin' ></i></a></li>
                    <li className="social"><a href="#"><i className='bx bxl-telegram'></i></a></li>
                    <li className="social"><a href="#"><i className='bx bxl-twitter' ></i></a></li>
                    <li className="social"><a href="#"><i className='bx bxl-youtube' ></i></a></li>
                    
                </ul>
                <p id="date">
                    <script> document.querySelector('#date').innerHTML = new Date().toDateString(); </script>
                </p>
            </div>
            <div className="logo__container">
                <img className="autring" src="./icon/logo.png" alt="Logo"/>
            </div>
            <div className="ind">
                <h3>Support for Journalism</h3>
            </div>
        </div>
        
    </>
  )
}

export default Header