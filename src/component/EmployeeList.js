import { data } from '../shared/employee';
import EmployeeComponent from './Employee';
import React, { useState } from 'react';

import EmployeeFormComponent from './EmployeeFormComponent';

function EmployeeList() {

    const [empList, setEmpList] = useState(data);
    const addEmp = (emp) => {
        setEmpList([...empList, emp]);
    }
    return (
        <div className="row row-content">
            <div className="col-12 col-sm-10 offset-1">
                <EmployeeFormComponent addEmp={addEmp}/>
                <h3>List Of Employee</h3>
                <div className='table-responsive'>
                    <div className='table-striped'>
                        <EmployeeComponent list={empList} />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EmployeeList;
