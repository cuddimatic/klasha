import React from "react";

import {
  CardTitle,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

import { ReactComponent as SearchIcon } from "../../../assets/svgs/searchIcon.svg";
import "../../../assets/scss/all/custom/CustomStyles.scss";

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
            <td>24.08.2021</td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>GB124QWERTY12346</td>
            <td>GTB</td>
            <td>Mike Owen</td>
            <td>0223337281</td>
            <td>$1,200</td>
            <td>24.08.2021</td>
            <td>Successful</td>
          </tr>
          <tr>
            <td>GB124QWERTY12346</td>
            <td>GTB</td>
            <td>Mike Owen</td>
            <td>0223337281</td>
            <td>$1,200</td>
            <td>24.08.2021</td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>GB124QWERTY12346</td>
            <td>GTB</td>
            <td>Mike Owen</td>
            <td>0223337281</td>
            <td>$1,200</td>
            <td>24.08.2021</td>
            <td>Pending</td>
          </tr>
        </tbody>
      </Table>
      <div className="d-flex justify-content-end">
        <Pagination size="md">
          <PaginationItem>
            <PaginationLink previous />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next />
          </PaginationItem>
        </Pagination>
      </div>
    </div>
  );
};

export default Projects;
