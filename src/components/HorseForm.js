import { FormControl, FloatingLabel, Form, Row, Col, Spinner, Button, Image, InputGroup } from "react-bootstrap"
import _ from 'lodash'
import { useEffect, useState } from "react"
import { BUTERIN, ELITE, EXCLUSIVE, FINNEY, GENESIS, LEGENDARY, NAKAMOTO, CROSS, PACER, SZABO, HORSE_IMAGES } from "../constants"

const HorseForm = (props) => {

    const { status, selectedHorse, disabled, onUpdated } = props

    const [loading, setLoading] = useState(false)
    const [horse, setHorse] = useState({
        status,
        generation: 1,
        bloodline: NAKAMOTO,
        breedType: GENESIS
    })
    const [img, setImg] = useState('')

    useEffect(() => {

        setImg(HORSE_IMAGES[horse.status])
        
        if (typeof onUpdated === 'function') {
            onUpdated(horse)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [horse])

    useEffect(()=>{
        setImg(HORSE_IMAGES[horse.status])
    }, [status])

    useEffect(() => {

        if (selectedHorse && !_.isEqual(selectedHorse, horse)) {
            setLoading(true)
            setHorse(selectedHorse)
            setTimeout(() => {
                setLoading(false)
            }, 1000)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedHorse])


    return (
        <>
            <Form noValidate>
                <Row className="g-2">
                    {loading ?
                        <Col md>
                            <div className="d-grid">
                                <Button variant="secondary" disabled className="p-3">
                                    <Spinner
                                        as="span"
                                        animation="grow"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                        style={{ marginRight: '5px' }}
                                    />
                                    Loading...
                                </Button>
                            </div>
                        </Col>
                        : <>
                            <Col md className="d-flex">
                                <InputGroup>
                                    <InputGroup.Text id="basic-addon1" style={{ padding: 0 }}>
                                        <Image width="56" src={img} thumbnail />

                                    </InputGroup.Text>

                                    <FormControl
                                        placeholder="Username"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        value={status}
                                        disabled
                                    />
                                </InputGroup>


                            </Col>
                            <Col md>
                                <FloatingLabel controlId='horse-form.generation' label='Generation'>
                                    <Form.Select
                                        disabled={disabled}
                                        defaultValue={horse.generation}
                                        onChange={e => {
                                            setHorse({
                                                ...horse,
                                                generation: parseInt(e.target.value),
                                            })
                                        }
                                        }>
                                        {_.range(1, 269).map((val) => {
                                            return <option key={val} value={val}>{val}</option>
                                        })}
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>

                            <Col md>
                                <FloatingLabel controlId='horse-form.bloodline' label='Bloodline'>
                                    <Form.Select
                                        disabled={disabled}
                                        defaultValue={horse.bloodline}
                                        onChange={e => {
                                            setHorse({
                                                ...horse,
                                                bloodline: e.target.value,
                                            })
                                        }
                                        } >
                                        <option value={NAKAMOTO}>{NAKAMOTO}</option>
                                        <option value={SZABO}>{SZABO}</option>
                                        <option value={FINNEY}>{FINNEY}</option>
                                        <option value={BUTERIN}>{BUTERIN}</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel controlId='horse-form.breed-type' label='Breed Type'>
                                    <Form.Select
                                        disabled={disabled}
                                        defaultValue={horse.breedType}
                                        onChange={e => {
                                            setHorse({
                                                ...horse,
                                                breedType: e.target.value
                                            })
                                        }
                                        }>
                                        <option value={GENESIS}>{_.upperFirst(GENESIS)}</option>
                                        <option value={LEGENDARY}>{_.upperFirst(LEGENDARY)}</option>
                                        <option value={EXCLUSIVE}>{_.upperFirst(EXCLUSIVE)}</option>
                                        <option value={ELITE}>{_.upperFirst(ELITE)}</option>
                                        <option value={CROSS}>{_.upperFirst(CROSS)}</option>
                                        <option value={PACER}>{_.upperFirst(PACER)}</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                        </>
                    }
                </Row>

            </Form>
        </>
    )
}

export default HorseForm