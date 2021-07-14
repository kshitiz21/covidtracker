import React, { useEffect, useState } from 'react'
import './covid.css';

const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>
            <section>
                <h1>🔴 LIVE</h1>
                <h2>COVID-19 CORONAVIRUS TRACKER</h2>

                <ul>
                    <li>
                        <div className="card_inner country">
                            <p className="card_name">COUNTRY</p>
                            <p className="card_total">INDIA</p>
                        </div>
                    </li>
                    <li>
                        <div className="card_inner recovered">
                            <p className="card_name">TOTAL RECOVERED</p>
                            <p className="card_total">{data.recovered}</p>

                        </div>
                    </li>
                    <li>
                        <div className="card_inner confirmed">
                            <p className="card_name">TOTAL CONFIRMED</p>
                            <p className="card_total">{data.confirmed}</p>
                        </div>
                    </li>
                    <li>
                        <div className="card_inner death">
                            <p className="card_name">TOTAL DEATH</p>
                            <p className="card_total">{data.deaths}</p>
                        </div>
                    </li>
                    <li>
                        <div className="card_inner active">
                            <p className="card_name">TOTAL ACTIVE</p>
                            <p className="card_total">{data.active}</p>
                        </div>
                    </li>
                    <li>
                        <div className="card_inner updated">
                            <p className="card_name">TOTAL UPDATED</p>
                            <p className="card_total">{data.lastupdatedtime}</p>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Covid
