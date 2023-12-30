import React from "react";

export default function Second(props) {
    return (
        <>
            {/* <tr>
                <th>{props.ticker}</th>
                <td>{props.dayhigh}</td>
                <td>{props.date}</td>
            </tr> */}
        {/*  display the data using cards */}
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.ticker}</h5>
                    {/* if the dayhigh is above 1000 show the text in green else red */}
                    {props.dayhigh > 1000 ? <p className="card-text text-success">{props.dayhigh}</p> : <p className="card-text text-danger">{props.dayhigh}</p>}
                    {/* show the day high in button */}
                    <button type="button" className="btn btn-primary">{props.dayhigh}</button>
                    <p className="card-text">{props.date}</p>
                </div>
            </div>
        </>
    )
}