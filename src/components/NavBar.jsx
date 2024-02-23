import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [linkActive,setLinkActive] =useState('/')
  return (
    <div>
      <nav class="navbar navbar-expand-sm bg-body">
      
        <div class="container-fluid ">
        <h3>Blog</h3>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <div class="d-flex justify-content-center">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li class="nav-item">
                  <Link aria-current="page" to={"/"}
                     class={(linkActive === '/')?("nav-link active"):("nav-link")}
                      onClick={()=>(setLinkActive('/'))}>
                    ALL
                  </Link>
                </li>
                <li class="nav-item">
                  <Link  to={"/fullstackdevelopment"}
                        class={(linkActive === '/fsd')?("nav-link active"):("nav-link")}
                        onClick={()=>(setLinkActive('/fsd'))}
                  >
                    FULL STACK DEVELOPMENT
                  </Link>
                </li>

                <li class="nav-item">
                  <Link  to={"/datascience"}
                         class={(linkActive === '/ds')?("nav-link active"):("nav-link")}
                         onClick={()=>(setLinkActive('/ds'))}>
                    DATA SCIENCE
                  </Link>
                </li>

                <li class="nav-item">
                  <Link to={"/cybersecurity"}
                        class={(linkActive === '/cs')?("nav-link active"):("nav-link")}
                        onClick={()=>(setLinkActive('/cs'))}>
                    CYBER SECURITY
                  </Link>
                </li>

                <li class="nav-item">
                  <Link to={"/career"}
                        class={(linkActive === '/career')?("nav-link active"):("nav-link")}
                        onClick={()=>(setLinkActive('/career'))}>
                    CAREER
                    </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav >
    </div>

  );
};

export default NavBar;