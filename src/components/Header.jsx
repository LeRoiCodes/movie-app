// import React from 'react';
import Poster from '../assets/Poster.png'
import Logo from '../assets/Logo.png'
import Idmb from '../assets/idmb.png'
import Tomato from '../assets/tomato.png'
import Play from '../assets/Play.png'

const Header = () => {

  
  return (
    <div className="bg-cover bg-center bg-no-repeat text-white w-screen h-[600px]" style={{backgroundImage: `url(${Poster})`,}}>
        <header className='pt-3'>
    <nav className="px-4 lg:px-6 py-2.5 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="#" className="flex items-center">
                <img
          src={Logo}
          alt="Moviebox"
          className=""
        />
            </a>
            <div className="flex items-center md:order-2 lg:order-2">
                <a href="#" className="text-white  hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none">Sign in</a>
                <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-white bg-[#BE123C] rounded-[50%] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </div>
            <div className="hidden justify-between mt-4 items-center w-1/3 md:mt-0 md:order-1 md:flex lg:flex lg:order-1" id="mobile-menu-2">
            <input
          type="text"
          placeholder="What do you want to watch?"
          className="w-full px-4 py-2 rounded-lg bg-transparent font-normal "
          style={{borderRadius: "6px", border: "2px solid gray", fontStyle: "normal", lineHeight: "24px",}}
        />
        <button className="bg-transparent text-white px-4 py-2  rounded-lg"
        style={{marginLeft:"-100px"}}>
          Search
        </button>
            </div>
        </div>
    </nav>
</header>
    <div className='flex flex-col sm:justify-center mx-auto w-[90%] mt-20 gap-4 md:w-[400px] md:justify-start md:items-start md:ml-24'>
      <h1 className='text-4xl md:text-5xl' style={{ fontStyle:"normal", fontWeight:"700"}}>
      John Wick 3: Parabellum</h1>
      <div className='flex justify-between items-center w-[50%]'>
        <div className='flex items-center gap-2 h-[17px]'>
          <img src={Idmb} alt='idmb'/>
        <p className='text-sm'>86.0/100</p>
        </div>
        <div className=' flex  items-center gap-2 h-[17px]'>
          <img src={Tomato} alt='idmb'/>
        <p className='text-sm'> 97%</p>
        </div>
      </div>
      <p className='text-sm font-medium md:w-[300px]'>
      long ksjf s sjsb sdjsd fgbsdn gjgjsdksdf ahsfj sdhfbs hfbg hs hs fh ajja f sdfhgbdfs gbhs hbshhjs hgbs bgjubas bfgja  fh hhjabv hshgjsn hgbhsjbg jabbfhs  jsbfhs shgbswin zjshsh
      </p>
      <a className='py-2 px-3 flex gap-2 bg-[#BE123C] w-[50%] text-sm rounded-[6px]'>
      <img src={Play} alt='idmb'/>
      WATCH TRAILER
      </a>
    </div>
    </div>
  );
};

export default Header;
