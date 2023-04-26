import React from 'react';
import { Projects } from '../../components/dashboard-components';
import {
    Row,
    Col
} from 'reactstrap';

const badge = () => {
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

export default badge;