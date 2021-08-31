import { Modal, Button, Row, Col, Form } from 'react-bootstrap'
import { useState } from 'react';

const embed = `<iframe src="https://aaabreeding.vercel.app" width="960" height="800"></iframe>`

const Topbar = () => {
    
    const [dialogActive, setDialogActive] = useState(false)

    const handleClose = () => {
      setDialogActive(false)
    }

    return (
        <>
            <Modal show={dialogActive} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Embed</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form.Control as="textarea" rows={3} value={embed}/>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Row>
                <Col md className="d-flex justify-content-end">
                    <p className="mb-1">
                        <span>Link to&nbsp;<a rel="noreferrer" target="_blank" href="https://aaabreeding.app">https://aaabreeding.app</a></span>
                        &nbsp;|&nbsp;
                        <span style={{cursor: 'pointer'}} className="text-decoration-underline" onClick={() => setDialogActive(true)}>Embed</span>
                    </p>

                </Col>
            </Row>
        </>

    )

}

export default Topbar