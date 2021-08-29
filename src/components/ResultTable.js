import { Alert, Table, Row, Col, Button, Badge, Card } from "react-bootstrap"
import moment from 'moment'

const ResultTable = (props) => {

    const { onRemove } = props
    const { id, father, mother, maleOffspring, femaleOffspring, fromDate, toDate, studFee } = props.report

    const renderPrice = (price) => {
        if (price === null) {
            return 'N/A'
        } else {
            return price.toFixed(2) + ' ETH'
        }
    }

    const renderRoi = (offSpringAvgPrice) => {
        if (offSpringAvgPrice === null || mother.avgPrice === null) {
            return 'N/A'
        } else {
            return ((offSpringAvgPrice - studFee) / mother.avgPrice * 100).toFixed(2) + ' %'
        }
    }

    return (
        <Card>
            <Card.Body>
                <Row className="mb-2">
                    <Col md className="d-flex align-items-center">
                        <Badge bg="light" text="dark">
                            Dates: {moment(fromDate).format('LL')} - {moment(toDate).format('LL')}
                        </Badge>
                    </Col>
                    <Col md className="d-flex  align-items-center justify-content-end">
                        {/* <Button variant='warning' size="sm">Edit</Button> */}
                        <Button onClick={() => onRemove(id)} variant='danger' size="sm" style={{ marginLeft: '5px' }}>Remove</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Parents</th>
                                    <th>Generation</th>
                                    <th>Bloodline</th>
                                    <th>Breed Type</th>
                                    <th>Min. Price</th>
                                    <th>Avg. Price</th>
                                    <th>Max. Price</th>
                                    <th>Sales</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Father</td>
                                    <td>{father.generation}</td>
                                    <td>{father.bloodline}</td>
                                    <td>{father.breedType}</td>
                                    <td>{renderPrice(father.minPrice)}</td>
                                    <td>{renderPrice(father.avgPrice)}</td>
                                    <td>{renderPrice(father.maxPrice)}</td>
                                    <td>{father.sales}</td>
                                </tr>
                                <tr>
                                    <td>Mother</td>
                                    <td>{mother.generation}</td>
                                    <td>{mother.bloodline}</td>
                                    <td>{mother.breedType}</td>
                                    <td>{renderPrice(mother.minPrice)}</td>
                                    <td>{renderPrice(mother.avgPrice)}</td>
                                    <td>{renderPrice(mother.maxPrice)}</td>
                                    <td>{mother.sales}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>

                <Row>
                    <Col md>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Offspring</th>
                                    <th>Generation</th>
                                    <th>Bloodline</th>
                                    <th>Breed Type</th>
                                    <th>Min. Price</th>
                                    <th>Avg. Price</th>
                                    <th>Max. Price</th>
                                    <th>Sales</th>
                                    <th>ROI</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Male offspring</td>
                                    <td>{maleOffspring.generation}</td>
                                    <td>{maleOffspring.bloodline}</td>
                                    <td>{maleOffspring.breedType}</td>
                                    <td>{renderPrice(maleOffspring.minPrice)}</td>
                                    <td>{renderPrice(maleOffspring.avgPrice)}</td>
                                    <td>{renderPrice(maleOffspring.maxPrice)}</td>
                                    <td>{maleOffspring.sales}</td>
                                    <td>{renderRoi(maleOffspring.avgPrice)}</td>
                                </tr>
                                <tr>
                                    <td>Female offspring</td>
                                    <td>{femaleOffspring.generation}</td>
                                    <td>{femaleOffspring.bloodline}</td>
                                    <td>{femaleOffspring.breedType}</td>
                                    <td>{renderPrice(femaleOffspring.minPrice)}</td>
                                    <td>{renderPrice(femaleOffspring.avgPrice)}</td>
                                    <td>{renderPrice(femaleOffspring.maxPrice)}</td>
                                    <td>{femaleOffspring.sales}</td>
                                    <td>{renderRoi(femaleOffspring.avgPrice)}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col md>
                        * ROI formula:
                        (<Badge bg="light" text="dark">
                            Offspring avg. price
                        </Badge>
                        -
                        <Badge bg="light" text="dark">
                            Stud fee
                        </Badge>
                        )
                        /
                        <Badge bg="light" text="dark">
                            Mother avg. price
                        </Badge>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default ResultTable