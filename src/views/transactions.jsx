import React from 'react';
import { Projects } from '../components/dashboard-components';
import {
    Row,
    Col
} from 'reactstrap';

const transactions = () => {
    return (
        <div>
            <Row>
                <Col sm={12}>
                    <Projects />
                </Col>
            </Row>
            
        </div>
    );
};

export default transactions;