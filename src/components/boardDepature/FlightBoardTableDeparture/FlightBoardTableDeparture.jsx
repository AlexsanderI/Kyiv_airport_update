import React from 'react';
import './flightBoardTableDeparture.scss';
import moment from 'moment';

const FlightBoardTable = ({ data }) => {
  {
    return (
      <table className="styled-table">
        <thead>
          <tr className="table__title">
            <td>Terminal</td>
            <td>Local time</td>
            <td>Destination</td>
            <td>Status</td>
            <td>Airline</td>
            <td>Flight</td>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map(flightNum => (
                <tr className="table__sheduel" key={flightNum.ID}>
                  <td>
                    <div className={flightNum.term}>{flightNum.term}</div>{' '}
                  </td>
                  <td>{moment(flightNum.timeDepShedule).format('HH:mm')}</td>
                  <td>{flightNum['airportToID.city_en']}</td>
                  <td>Departed at {moment(flightNum.timeTakeofFact).format('HH:mm')}</td>
                  <td>
                    <div className="logo">
                      <img
                        className="logo-image"
                        src={
                          `https://api.iev.aero/${flightNum.logo}` === undefined
                            ? `https://api.iev.aero/${flightNum.logo}`
                            : flightNum.airline.en.logoSmallName
                        }
                        alt="logo airline"
                      />
                      <div className="logo-name">{flightNum.airline.en.name}</div>
                    </div>
                  </td>
                  <td>{flightNum.codeShareData[0].codeShare}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    );
  }
};

export default FlightBoardTable;
