import { data } from '../shared/employee';
import EmployeeComponent from './Employee';
import React, { Component } from 'react';

class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: data
        };
    }

    render() {
        return (
            <div className="row row-content">
                <div className="col-12 col-sm-10 offset-1">
                    <h3>List Of Employee</h3>
                    <div className='table-responsive'>
                        <div className='table-striped'>
                        <EmployeeComponent list={this.state.employees} />
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}
export default EmployeeList;
