import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Col, Input, FormFeedback } from 'reactstrap';


function EmployeeFormComponent({addEmp}) {

    const [list, setList] = useState({
        name: '',
        gpa: '',
        date: ''
    });

    const handleChange = (event) => {
        setList({
            ...list,
            [event.target.name]: [event.target.value]
        });
    };

    let [touched, setTouched] = useState(false, {});
    let [errors, setErrors] = useState({});

    const handleBlur = (field) => (evt) => {
        setTouched({ ...touched, [field]: true });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(list);
        addEmp(list);
        setList({
            name: '',
            gpa: '',
            date: ''
        })
    }
    const validate = (name, gpa) => {
        errors = {
            name: '',
            gpa: '',
            date: ''
        };
        const reg = /^\d*\.?\d*$/;
        if (touched.gpa && !reg.test(gpa))
            errors.gpa = 'GPA should contain only numbers';
        else if (touched.gpa && gpa.length < 1)
            errors.gpa = 'Enter GPA';
        else if (touched.gpa && gpa > 4)
            errors.gpa = 'GPA must be small than 4';
        return errors;
    };

    setErrors = validate(list.name, list.gpa);

    return (
        <div className="row row-content">
            <div className="col-12 mt-3">
                <h3>Fill In Form</h3>
            </div>
            <div className="col-12 col-md-10 offset-1">
                <Form onSubmit={handleSubmit}>
                    <FormGroup row>
                        <Label htmlFor="name" md={2}>Name</Label>
                        <Col md={10}>
                            <Input type='text' name='name' placeholder='Name' value={list.name}
                                onChange={handleChange}
                                valid={errors.name === ''} invalid={errors.name !== ''}
                                onBlur={handleBlur('name')} required />
                            <FormFeedback> {errors.name} </FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="gpa" md={2}>GPA</Label>
                        <Col md={10}>
                            <Input type='text' name='gpa' placeholder='GPA' value={list.gpa}
                                onChange={handleChange}
                                valid={errors.gpa === ''} invalid={errors.gpa !== ''}
                                onBlur={handleBlur('gpa')} required />
                            <FormFeedback> {errors.gpa} </FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="date" md={2}>Date of Birth</Label>
                        <Col md={10}>
                            <Input type='date' name='date' value={list.date}
                                onChange={handleChange}
                                required />
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