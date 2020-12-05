import React, {useState} from "react";

import {
    CardTitle,
    Table
} from 'reactstrap';
import '../../../assets/scss/all/custom/CustomStyles.scss'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {ReactComponent as CalendarIcon} from '../../../assets/svgs/calendarIcon.svg'
import {ReactComponent as SearchIcon} from '../../../assets/svgs/searchIcon.svg'

const Projects = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-4 [General]                                                  */
        /*--------------------------------------------------------------------------------*/

        <div className="dash-btn">
            <div className="d-flex justify-content-between align-items-center mb-4 payout-mobile">
                <CardTitle className="mb-0 pay-out">Payout table</CardTitle>
                <div className="d-flex calendar-mobile">
                    <div className="position-relative mobile-input">
                        <input type="text" placeholder="Search something..." />
                        <SearchIcon className="calendar-svg" />
                    </div>
                    <div className="position-relative">
                        <DatePicker
                        className="admin-date"
                        selected={startDate}
                        dateFormat="MMMM yyyy"
                        minDate={new Date()}
                        onChange={date => setStartDate(date)} />
                        <CalendarIcon className="calendar-svg cal-none" />
                    </div>
                    <button className="payout">Payout</button>
                </div>
            </div>
            <Table className="no-wrap v-middle mobile-middle">
                <thead className="for-table">
                    <tr>
                        <th className="border-0">Payout ID</th>
                        <th className="border-0">Source</th>
                        <th className="border-0">Date</th>
                        <th className="border-0">Amount</th>
                    </tr>
                </thead>
                <tbody className="dashboard-table">
                    {/* <div className="p-2"></div> */}
                    <tr>
                        <td>KLA12578DHQ</td>
                        <td>Vel pellentesque ornare</td>
                        <td>25th November, 2020</td>
                        <td>$1,200</td>
                    </tr>
                    <tr>
                        <td>KLA12578DHQ</td>
                        <td>Vel pellentesque ornare</td>
                        <td>25th November, 2020</td>
                        <td>$1,200</td>
                    </tr>
                    <tr>
                        <td>KLA12578DHQ</td>
                        <td>Vel pellentesque ornare</td>
                        <td>25th November, 2020</td>
                        <td>$1,200</td>
                    </tr>
                    <tr>
                        <td>KLA12578DHQ</td>
                        <td>Vel pellentesque ornare</td>
                        <td>25th November, 2020</td>
                        <td>$1,200</td>
                    </tr>
                </tbody>
            </Table>
            <button className="see-more">See more</button>
        </div>
    );
}

export default Projects;
