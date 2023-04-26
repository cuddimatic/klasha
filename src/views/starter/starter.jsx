import React from "react";
import { Row, Col, CardTitle } from "reactstrap";
import "../../assets/scss/all/custom/CustomStyles.scss";
import { ReactComponent as ArrowDown } from "../../assets/svgs/arrowDown.svg";
import GLogo from "../../assets/images/grapgh.png";
import { ReactComponent as ArrowIcon } from "../../assets/svgs/arrowDown.svg";
import { ReactComponent as ChevDownIcon } from "../../assets/svgs/chevDown.svg";

const Starter = () => {
  return (
    <div>
      <CardTitle className="mb-0 mb-4">Sales overview</CardTitle>
      <Row>
        <Col sm={6} lg={12}>
          <div className="dashboard-conts">
            <div className="account-section">
              <div className="pt-4 pb-4 pl-4 pr-4 w-100 mobile-middle">
                <div className="d-flex justify-content-between align-items-center pr-3">
                  <h5 className="bal">Today's salese</h5>
                </div>
                <div className="account-pay">
                  <h1 className="mt-3">$5,332.18</h1>
                </div>
              </div>
            </div>
            <div className="account-section">
              <div className="pt-4 pb-4 pl-4 pr-4 w-100 mobile-middle">
                <div className="d-flex justify-content-between align-items-center pr-3">
                  <h5 className="bal">24 Aug - 01 Sep 21</h5>
                </div>
                <img src={GLogo} alt="icon" />
                <div className="account-pay graph-details">
                  <div>
                    <p>Last month</p>
                    <h1>$5,332.18</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="account-section">
              <div className="pt-4 pb-4 pl-4 pr-4 w-100 mobile-middle">
                <div className="d-flex justify-content-between align-items-center pr-3">
                  <h5 className="bal">24 Aug - 01 Sep 21</h5>
                </div>
                <img src={GLogo} alt="icon" />
                <div className="account-pay graph-details">
                  <div>
                    <p>Last month</p>
                    <h1>$5,332.18</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="account-section">
              <div className="pt-4 pb-4 pl-4 pr-4 w-100 mobile-middle">
                <div className="d-flex justify-content-between align-items-center pr-3">
                  <h5 className="bal">24 Aug - 01 Sep 21</h5>
                </div>
                <img src={GLogo} alt="icon" />
                <div className="account-pay graph-details">
                  <div>
                    <p>Last month</p>
                    <h1>$5,332.18</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="account-section">
            <div className="pt-4 pb-4 pl-4 w-100 mobile-middle">
                <div className="d-flex justify-content-between align-items-center pr-3">
                    <h5 className="bal">Total account balance</h5>
                    <div className="reference-overview" tabIndex="0">
                        <div className="for-analytics">
                            <p>USD
                            <ArrowDown className="ml-2 mb-1" />
                            </p>
                        </div>
                        <div className="popout-analytics">
                            <p className="currency-list">KES</p>
                            <p className="currency-list">NGN</p>
                            <p className="currency-list">GHC</p>
                        </div>
                    </div>
                </div>
                <div className="account-pay">
                    <h1 className="mt-3">$5,332.18</h1>
                    <p>1 USD = 381.97 NGN</p>
                </div>
            </div>
            <div className="funds-hold">
                <div className="p-4 mt-2 w-100 mobile-middle">
                    <h5 className="hold">Funds on hold</h5>
                </div>
                <div className="w-100 account-hold mobile-middle">
                    <h1>$5,332.18</h1>
                </div>
            </div>
        </div> */}
          <div>
            <div className="wire-days">
              <p>Sales</p>
              <a href="#/">7 days</a>
              <a href="#/">30 days</a>
              <div className="reference-overview" tabIndex="0">
                <div className="for-analytics">
                  <p>
                    USD
                    <ArrowDown className="ml-2 mb-1" />
                  </p>
                </div>
                <div className="popout-analytics">
                  <p className="currency-list">KES</p>
                  <p className="currency-list">NGN</p>
                  <p className="currency-list">GHC</p>
                </div>
              </div>
              <div className="wire-email">
                <input type="text" placeholder="Email" />
                <ArrowIcon className="ml-2 mb-1 arrow-down" />
              </div>
              <button className="download"><ChevDownIcon /> Download report</button>
            </div>
            <div className="chart-button">
              <div className="chart-sect"></div>
              <div className="send-wire">
                <div className="pt-4 pb-4 pl-4 pr-4 w-100 mobile-middle">
                  <div className="d-flex justify-content-between align-items-center pr-3">
                    <h4>
                      KlashaWire - send money to businesses globally from Africa
                    </h4>
                  </div>
                  <button type="button">Send Wire</button>
                  {/* <div className="account-pay graph-details">
                  <div>
                    <p>Last month</p>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Starter;
