import React from 'react';
import './Calendar.css';

export default props => {

  const dates = [
    ['', '', '', '', 1, 2],
    [3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26],
    ['', '', '', '', 27, 28]
  ];

  return (
    <div>
      <lable className="label has-text-centered">December</lable>
      <table className="table is-bordered is-fullwidth date-hover">
        <tbody>
          {dates.map(week => {
            const tr = (
              <tr>
                {week.map(date => {
                  return <td>{date}</td>;
                })}
              </tr>
            );

            return tr;
          })}
        </tbody>
      </table>
    </div>
  );
};
