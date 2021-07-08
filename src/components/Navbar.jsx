import React from 'react'

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <React.Fragment>
      <header data-name="heading" className="h-header bg-navy">
        <div className="logo font-bold text-lg text-white mx-6">
          Info Covid 19
        </div>
      </header>
      <header data-name="navigation" className="sticky top-0 z-50">
        <div className="flex justify-center bg-navy p-4 navigation text-white text-lg space-x-16">
          <div data-content="left" className="font-extralight">
            <Link to="/latest">latests</Link>
          </div>
          <div data-content="left" className="font-extralight">
            <Link to="/statistic">statistic</Link>
          </div>
          <div data-content="center" className="font-semibold text-xl">
            <Link to="/">Incov-19</Link>
          </div>
          <div data-content="right" className="font-extralight">
            <Link to="/news">news</Link>
          </div>
          <div data-content="right" className="font-extralight">
            <Link to="/vaccine">vaccine</Link>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Navbar
