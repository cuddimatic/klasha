import React from "react";

import { CardTitle, Table } from "reactstrap";
import "../../../assets/scss/all/custom/CustomStyles.scss";
import "react-datepicker/dist/react-datepicker.css";
import { ReactComponent as SearchIcon } from "../../../assets/svgs/searchIcon.svg";

const Projects = () => {

  return (

    <div className="dash-btn">
      <CardTitle className="mb-0 pay-out">Transaction history</CardTitle>

      <div className="d-flex justify-content-between align-items-center payout-mobile">
        <div className="d-flex calendar-mobile justify-content-between w-100 pr-4">
          <div className="position-relative mobile-input">
            <input type="text" placeholder="Search" />
            <SearchIcon className="calendar-svg" />
          </div>
          <div>
            <button className="payout">Filter</button>
            <button className="payout">Export</button>
          </div>
        </div>
      </div>
      <Table className="no-wrap v-middle mobile-middle">
        <thead className="for-table">
          <tr>
            <th className="border-0">Transaction ID</th>
            <th className="border-0">Source</th>
            <th className="border-0">Customer name</th>
            <th className="border-0">Customer email</th>
            <th className="border-0">Amount</th>
            <th className="border-0">Request date</th>
            <th className="border-0">Status</th>
          </tr>
        </thead>
        <tbody className="dashboard-table">
          {/* <div className="p-2"></div> */}
          <tr>
            <td>GB124QWERTY12346</td>
            <td>GTB</td>
            <td>Mike Owen</td>
            <td>0223337281</td>
            <td>$1,200</td>
            <td>25th November, 2020</td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>GB124QWERTY12346</td>
            <td>GTB</td>
            <td>Mike Owen</td>
            <td>0223337281</td>
            <td>$1,200</td>
            <td>25th November, 2020</td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>GB124QWERTY12346</td>
            <td>GTB</td>
            <td>Mike Owen</td>
            <td>0223337281</td>
            <td>$1,200</td>
            <td>25th November, 2020</td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>GB124QWERTY12346</td>
            <td>GTB</td>
            <td>Mike Owen</td>
            <td>0223337281</td>
            <td>$1,200</td>
            <td>25th November, 2020</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Projects;
