import React from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import {
  FaUser,
  FaBook,
  FaUsers,
  FaUserFriends,
  FaInfoCircle,
} from "react-icons/fa";

const GithubProfileModal = ({ show, handleClose, user }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="modal-custom-size"
        centered
      >
        <Modal.Header closeButton className="bg-dark text-white">
          <Modal.Title>Mon profil GitHub</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          <Row>
            <Col md={6} className="text-center mb-3">
              <img
                src={user.avatar_url}
                alt="avatar"
                className="avatar"
                width={150}
                height={150}
              />
            </Col>
            <Col md={6}>
              <FaUser />{" "}
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-info"
              >
                {user.name || user.login}
              </a>
              <div className="mb-3">
                <FaInfoCircle className="me-2" />
                <span>{user.bio}</span>
              </div>
              <div className="mb-2">
                <FaBook className="me-2" /> Repositories : {user.public_repos}
              </div>
              <div className="mb-2">
                <FaUsers className="me-2" /> Followers : {user.followers}
              </div>
              <div className="mb-2">
                <FaUserFriends className="me-2" /> Following : {user.following}
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="bg-dark text-white">
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GithubProfileModal;
