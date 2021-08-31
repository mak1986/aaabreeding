import { Table, Row, Col, Button, Badge, Card, Image } from "react-bootstrap"
import moment from 'moment'
import { FATHER, HORSE_IMAGES, MOTHER, OFFSPRING } from "../constants"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { getOpenseaLink } from "../utils/helper"

const ResultTable = (props) => {

    const { onRemove } = props
    const { id, father, mother, maleOffspring, femaleOffspring, fromDate, toDate, studFee } = props.report

    const renderPrice = (price) => {
        if (price === null) {
            return 'N/A'
        } else {
            return price.toFixed(4) + ' ETH'
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
                        <Badge bg="light" text="dark" className="mr-2">
                            Dates: {moment(fromDate).format('LL')} - {moment(toDate).format('LL')}
                        </Badge>
                        <Badge bg="light" text="dark">
                            Stud fee: {renderPrice(studFee)}
                        </Badge>
                    </Col>
                    <Col md className="d-flex  align-items-center justify-content-end">
                        {/* <Button variant='warning' size="sm">Edit</Button> */}
                        <Button onClick={() => onRemove(id)} variant='danger' size="sm" style={{ marginLeft: '5px' }}>Remove</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md>
                        <Table bordered hover>
                            <thead>
                                <tr>
                                    <th colSpan={3}>Parents</th>
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
                                    <td width={65} className="p-1">
                                        <Image width="56" src={HORSE_IMAGES[FATHER]} />
                                    </td>
                                    <td className="align-middle">Father</td>
                                    <td width={65} className="p-2">
                                        <a rel="noreferrer" href={getOpenseaLink(father, 'male')} target='_blank'>
                                            <Image width="46" src='https://theme.zdassets.com/theme_assets/10680073/849d25f48ee0ef0a59561f196691948f14b80eb9.png' />
                                        </a>
                                    </td>
                                    <td className="align-middle">Z{father.generation}</td>
                                    <td className="align-middle">{father.bloodline}</td>
                                    <td className="align-middle">{father.breedType}</td>
                                    <td className="align-middle">{renderPrice(father.minPrice)}</td>
                                    <td className="align-middle">{renderPrice(father.avgPrice)}</td>
                                    <td className="align-middle">{renderPrice(father.maxPrice)}</td>
                                    <td className="align-middle">{father.sales}</td>
                                </tr>
                                <tr>
                                    <td width={65} className="p-1">
                                        <Image width="56" src={HORSE_IMAGES[MOTHER]} />
                                    </td>
                                    <td className="align-middle">Mother</td>
                                    <td width={65} className="p-2">
                                        <a rel="noreferrer" href={getOpenseaLink(mother, 'female')} target='_blank'>
                                            <Image width="46" src='https://theme.zdassets.com/theme_assets/10680073/849d25f48ee0ef0a59561f196691948f14b80eb9.png' />
                                        </a>
                                    </td>
                                    <td className="align-middle">Z{mother.generation}</td>
                                    <td className="align-middle">{mother.bloodline}</td>
                                    <td className="align-middle">{mother.breedType}</td>
                                    <td className="align-middle">{renderPrice(mother.minPrice)}</td>
                                    <td className="align-middle">{renderPrice(mother.avgPrice)}</td>
                                    <td className="align-middle">{renderPrice(mother.maxPrice)}</td>
                                    <td className="align-middle">{mother.sales}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col md>
                        <div className="d-grid">
                            <Button variant="light" disabled className="mb-2" style={{ padding: 0 }}>
                                <FontAwesomeIcon style={{ padding: '5px', fontSize: '1.5rem', color: 'cornflowerblue' }} icon={['fas', 'arrow-down']} />
                            </Button>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col md>
                        <Table bordered hover>
                            <thead>
                                <tr>
                                    <th colSpan={4}>Offspring</th>
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
                                    <td width={65} className="p-1">
                                        <Image width="56" src={HORSE_IMAGES[OFFSPRING]} />
                                    </td>
                                    <td width={65} className="p-1 align-middle text-center">
                                        <FontAwesomeIcon style={{ fontSize: '2rem', color: 'cornflowerblue' }} icon={['fas', 'mars']} />
                                    </td>
                                    <td className="align-middle">Male</td>
                                    <td width={65} className="p-2">
                                        <a rel="noreferrer" href={getOpenseaLink(maleOffspring, 'male')} target='_blank'>
                                            <Image width="46" src='https://theme.zdassets.com/theme_assets/10680073/849d25f48ee0ef0a59561f196691948f14b80eb9.png' />
                                        </a>
                                    </td>
                                    <td className="align-middle">Z{maleOffspring.generation}</td>
                                    <td className="align-middle">{maleOffspring.bloodline}</td>
                                    <td className="align-middle">{maleOffspring.breedType}</td>
                                    <td className="align-middle">{renderPrice(maleOffspring.minPrice)}</td>
                                    <td className="align-middle">{renderPrice(maleOffspring.avgPrice)}</td>
                                    <td className="align-middle">{renderPrice(maleOffspring.maxPrice)}</td>
                                    <td className="align-middle">{maleOffspring.sales}</td>
                                    <td className="align-middle bg-success text-white fw-bold">{renderRoi(maleOffspring.avgPrice)}</td>
                                </tr>
                                <tr>
                                    <td width={65} className="p-1">
                                        <Image width="56" src={HORSE_IMAGES[OFFSPRING]} />
                                    </td>
                                    <td width={65} className="p-1 align-middle text-center">
                                        <FontAwesomeIcon style={{ fontSize: '2rem', color: '#ed6495' }} icon={['fas', 'venus']} />
                                    </td>
                                    <td className="align-middle">Female</td>
                                    <td width={65} className="p-2">
                                        <a rel="noreferrer" href={getOpenseaLink(femaleOffspring, 'female')} target='_blank'>
                                            <Image width="46" src='https://theme.zdassets.com/theme_assets/10680073/849d25f48ee0ef0a59561f196691948f14b80eb9.png' />
                                        </a>
                                    </td>
                                    <td className="align-middle">Z{femaleOffspring.generation}</td>
                                    <td className="align-middle">{femaleOffspring.bloodline}</td>
                                    <td className="align-middle">{femaleOffspring.breedType}</td>
                                    <td className="align-middle">{renderPrice(femaleOffspring.minPrice)}</td>
                                    <td className="align-middle">{renderPrice(femaleOffspring.avgPrice)}</td>
                                    <td className="align-middle">{renderPrice(femaleOffspring.maxPrice)}</td>
                                    <td className="align-middle">{femaleOffspring.sales}</td>
                                    <td className="align-middle bg-success text-white fw-bold">{renderRoi(femaleOffspring.avgPrice)}</td>
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