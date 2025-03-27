import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const [downloadUrl, setDownloadUrl] = useState(null);

    const handleShow = (img, url) => {
        setSelectedImage(img);
        setDownloadUrl(url || null); 
        setShowModal(true);
    };

    return (
        <HelmetProvider>
            <Container className="About-header">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Portfolio | {meta.title}</title>
                    <meta name="description" content={meta.description} />
                </Helmet>
                <Row className="mb-5 mt-3 pt-md-3">
                    <Col lg="8">
                        <h1 className="display-4 mb-4">Portfolio</h1>
                        <hr className="t_border my-4 ml-0 text-left" />
                    </Col>
                </Row>
                <div className="mb-5 po_items_ho">
                    {dataportfolio.map((data, i) => (
                        <div key={i} className="po_item">
                            <img src={data.img} alt="" />
                            <div className="content">
                                <p>{data.description}</p>
                                <Button variant="primary" onClick={() => handleShow(data.img, data.downloadUrl)}>
                                    View
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton> 
                </Modal.Header>
                <Modal.Body>
                    <img src={selectedImage} alt="Project" style={{ width: "100%" }} />
                </Modal.Body>
                <Modal.Footer>
                    {downloadUrl && (
                        <Button variant="success" href={downloadUrl} download>
                            Download
                        </Button>
                    )}
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </HelmetProvider>
    );
};
