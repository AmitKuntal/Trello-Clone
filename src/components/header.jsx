import React from 'react';
 export default function header(){
    return (
        <nav className="d-flex justify-content-start navbar navbar-light bg-info">
            <div className='col-6'>
            <a className="btn btn-outline-danger bg-light" href='/'>Boards</a>
            </div>
            <div className='col-5'>
            <button className="btn btn-outline-danger bg-transparent text-white font-weight-bold">Trello</button>
            </div>
           
        
        </nav>
    )
}