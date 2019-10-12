import React from 'react';
export default function checkitem(props){
    return(<div className="row">
       {checkItem(props)}
        </div>)
}
function checkItem(props) {
    if(props.state === 'complete')
    {
        return(<><div className="col-1"><input type="checkbox" checked /></div>
                <div className="col-10"><s>{props.name}</s></div>
            </>)
    }
    return(<><div className="col-1"><input type="checkbox"/></div>
    <div className="col-10">{props.name}</div>
</>)
}