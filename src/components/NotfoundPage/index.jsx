import React from 'react'
import "../../styles/notFoundPageStyle.css"
import notFound from "../../assets/notFound.svg"
import { Link } from 'react-router-dom';


export default function index() {
  return (
      <>
                  <div className="notFound">
                <div className="mainBody">
                    <img src={notFound} alt="notFound" />
                    <h2>OPPS !</h2>
                    <p>The page you are requested could not be found!</p>
                    <Link to="/"  style={{textDecoration:'none'}}>
                    <button>
                        Go To Home
                    </button>
                    </Link>
                </div>
            </div>
      </>
  )
}
