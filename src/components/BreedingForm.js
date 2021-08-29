import { useEffect, useState } from "react";
import { Button, FloatingLabel, Form, Row, Col } from "react-bootstrap"
import moment from 'moment'
import HorseForm from './HorseForm';
import { BLOODLINE_MAP, BREED_TYPE_MAP } from "../constants";
import { v4 as uuid } from 'uuid'

const BreedingForm = (props) => {

    const { onSubmit } = props

    const [father, setFather] = useState()
    const [mother, setMother] = useState()
    const [offspring, setOffspring] = useState()
    const [fromDate, setFromDate] = useState(moment().subtract(3, 'month').format('YYYY-MM-DD'))
    const [toDate, setToDate] = useState(moment().format('YYYY-MM-DD'))
    const [studFee, setStudFee] = useState(0.1)


    useEffect(() => {

        const getOffspring = () => {
            const generation = father.generation + mother.generation
            return {
                generation: generation > 268 ? 268 : generation,
                bloodline: BLOODLINE_MAP[mother.bloodline][father.bloodline],
                breedType: BREED_TYPE_MAP[mother.breedType][father.breedType]
            }
        }

        if (father && mother) {
            setOffspring(getOffspring())
        }
    }, [father, mother])


    const submit = () => {
        onSubmit({
            id: uuid(),
            father,
            mother,
            offspring,
            fromDate,
            toDate,
            studFee
        })
    }


    return (<>
        <Row className="mb-2">
            <Col md><HorseForm status='Father' onUpdated={(horse) => setFather(horse)} /></Col>
        </Row>
        <Row className="mb-2">
            <Col md><HorseForm status='Mother' onUpdated={(horse) => setMother(horse)} /></Col>
        </Row>
        <Row className="mb-2">
            <Col md><HorseForm status='Offspring' selectedHorse={offspring} disabled /></Col>
        </Row>
        <Row>
            <Col md>
                <Form noValidate>

                    <Row className="g-2">
                        <Col md>
                            <FloatingLabel controlId='horse-form.from-date' label='From date (Avg Price Cal.)'>
                                <Form.Control defaultValue={fromDate} type="date" onChange={e => {
                                    setFromDate(moment(e.target.value).format('YYYY-MM-DD'))
                                }} />
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <FloatingLabel controlId='horse-form.to-date' label='To date  (Avg Price Cal.)'>
                                <Form.Control defaultValue={toDate} type="date" onChange={e => {
                                    setToDate(moment(e.target.value).format('YYYY-MM-DD'))
                                }} />
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <FloatingLabel controlId='horse-form.to-date' label='Stud Fee (ETH)'>
                                <Form.Control defaultValue={studFee} type="number" onChange={e => {
                                    setStudFee(e.target.studFee)
                                }} />
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <div className="d-grid" style={{ height: '100%' }}>
                                <Button variant='primary' type="button" onClick={submit}>Submit</Button>
                            </div>
                        </Col>

                    </Row>
                </Form>

            </Col>
        </Row>


    </>)
}

export default BreedingForm