import React from 'react';
import {
    Row,
    Col
} from 'reactstrap';
import { Projects } from 'components/dashboard-components';
import '../../assets/scss/all/custom/CustomStyles.scss'
import {ReactComponent as ArrowDown} from '../../assets/svgs/arrowDown.svg'


const Starter = () => {
    return (
        <div>
            <Row>
                <Col sm={6} lg={7}>
                    <div className="account-section">
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
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <Projects />
                </Col>
            </Row>
        </div>
    );
}

export default Starter;
