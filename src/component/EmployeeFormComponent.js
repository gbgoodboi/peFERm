import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Col, Input, FormFeedback } from 'reactstrap';
import { data } from '../shared/employee';

function EmployeeFormComponent(props) {

    const [name, setName] = useState('');
    const [gpa, setGPA] = useState('');
    const [date, setDate] = useState('');
    let [touched, setTouched] = useState(false,{});
    let [errors, setErrors] = useState({});

    const handleBlur = (field) => (evt) => {
        setTouched({ ...touched, [field]: true });
    }

    const validate = (name, gpa,date) => {
        errors = {
            name: '',
            gpa: '',
            date: ''
        };
        if (touched.name && name.length < 3)
            errors.name = 'Name should be >= 3 characters';
        else if (touched.name && name.length > 10)
            errors.name = 'Name should be <= 10 characters';
        const reg = /^\d*\.?\d*$/;
        if (touched.gpa && !reg.test(gpa))
           errors.gpa = 'GPA should contain only numbers';
        else if (touched.gpa && gpa.length < 1)
            errors.gpa = 'Enter GPA';
        else if (touched.gpa && gpa > 4) 
            errors.gpa = 'GPA must be small than 4';
        return errors;
    };
    setErrors = validate(name, gpa,date);
    //form submit
    // const dispatch = useDispatch();

    // function createEmp(event) {
    //     event.preventDefault();
    //     const empData = {
    //         name,
    //         gpa,
    //         date
    //     }
    //     dispatch(createEmpAction(empData));
    //     props.history.push('/employee');
    // }
    
    const changeName = (event) => {
        setName(event.target.value);
    }
    const changeGPA = (event) => {
        setGPA(event.target.value);
    }
    const changeDate = (event) => {
        setDate(event.target.value);
    }
    
    const clearState = () => {
        setName('');
        setGPA('');
        setDate('');
    };

    return (
<div className="row row-content">
            <div className="col-12 mt-3">
                <h3>Fill In Form</h3>
            </div>
            <div className="col-12 col-md-10 offset-1">
                <Form >
                    <FormGroup row>
                        <Label htmlFor="name" md={2}>Name</Label>
                        <Col md={10}>
                            <Input type='text' name='name' placeholder='Name' value={name}
                                valid={errors.name === ''} invalid={errors.name !== ''}
                                onBlur={handleBlur('name')} onChange={changeName} required />
                            <FormFeedback> {errors.name} </FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="gpa" md={2}>GPA</Label>
                        <Col md={10}>
                            <Input type='text' name='gpa' placeholder='GPA' value={gpa}
                                valid={errors.gpa === ''} invalid={errors.gpa !== ''}
                                onBlur={handleBlur('gpa')} onChange={changeGPA} required/>
                            <FormFeedback> {errors.gpa} </FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="date" md={2}>Date of Birth</Label>
                        <Col md={10}>
                            <Input type='date' name='date' value={date}
                                onChange={changeDate} />
                        </Col>
                    </FormGroup> 
                    <FormGroup row>
                        <Col md={{ size: 1, offset: 2 }}>
                            <Button type='submit' color='info'>
                                Add
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        </div>
        
    );
}
export default EmployeeFormComponent;