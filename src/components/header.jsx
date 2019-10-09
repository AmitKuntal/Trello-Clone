import React from 'react';
 export default function header(){
    return (
        <nav className="d-flex justify-content-start navbar navbar-light bg-info">
            <div className='col-6'>
            <button className="btn btn-outline-danger bg-light" >Boards</button>
            </div>
            <button className="btn btn-outline-danger bg-transparent text-white font-weight-bold">Trello</button>
        </nav>
    )
}