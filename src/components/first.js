import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Second from "./second";
import { getstocks } from "./stockdataapi";

export default function First() {
    const [getstockdata, setstocks] = useState([]);
    useEffect(() => {
        getstocks().then((response) => {
            setstocks(response.data);
        })
    }, [])
    return (
        <div className="container w-75 h-50">
            <h1>welcome to the stock-tracker</h1>
            {/* table to display stock data with 5 rows*/}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Stock Ticker</th>
                        <th scope="col">Day high</th>
                        <th scope="col">last updated Date</th>
                    </tr>
                </thead>
                <tbody>
                    {getstockdata.map((stock) => {
                        return (
                            <Second ticker={stock.symbol} dayhigh={stock.dayHigh} date={stock.lastUpdateTime}/>
                        )
                    }
                    )}
                </tbody>
            </table>
        </div >
    );

}