
import Logo from '../assets/Logo.png'
import Poster from '../assets/Poster.png'


function Header2() {
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
                <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
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
    </div>
  )
}

export default Header2