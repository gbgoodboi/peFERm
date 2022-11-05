import React, {Component} from "react";

class Employee extends Component {
  render() {
    const list = this.props.list.map((emp) => {
      return (
        <tr key={emp.id}>
          <td>{emp.name}</td>
          <td>{emp.gpa}</td>
          <td>{emp.date.toDateString()}</td>
        </tr>
      )
    })
    return (
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>GPA</th>
              <th>Date Of Birth</th>
            </tr>
          </thead>
          <tbody>
            {list}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Employee;