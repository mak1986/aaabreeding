import { useEffect, useState } from "react";
import { Button, FloatingLabel, Form, Row, Col, Spinner } from "react-bootstrap"
import moment from 'moment'
import HorseForm from './HorseForm';
import { BLOODLINE_MAP, BREED_TYPE_MAP } from "../constants";
import { v4 as uuid } from 'uuid'
// import { getReport } from '../utils/mocks';
import { getReport } from '../utils/network';

const BreedingForm = (props) => {

    const { onSubmit } = props

    const [loading, setLoading] = useState(false)

    const [father, setFather] = useState()
    const [mother, setMother] = useState()
    const [offspring, setOffspring] = useState()
    const [fromDate, setFromDate] = useState(moment().subtract(3, 'month').format('YYYY-MM-DD'))
    const [toDate, setToDate] = useState(moment().format('YYYY-MM-DD'))
    const [studFee, setStudFee] = useState(0.3)


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


    const submit = async () => {
        setLoading(true)

        const res = await getReport({
            id: uuid(),
            father,
            mother,
            offspring,
            fromDate,
            toDate,
            studFee
        })

        onSubmit(res)
        setLoading(false)
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
                                    setStudFee(parseFloat(e.target.value))
                                }} />
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <div className="d-grid" style={{ height: '100%' }}>
                                <Button disabled={loading} variant='primary' type="button" onClick={submit}>

                                    {loading
                                        ? <>
                                            <Spinner
                                                as="span"
                                                animation="grow"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                                style={{ marginRight: '5px' }}
                                            />
                                            Loading...
                                        </>
                                        : 'Submit'}
                                </Button>
                            </div>
                        </Col>

                    </Row>
                </Form>

            </Col>
        </Row>


    </>)
}

export default BreedingForm