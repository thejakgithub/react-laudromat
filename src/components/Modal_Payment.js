import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import "./Modal_Payment.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Modal_Payment(props) {
  const [cash, setCash] = useState("");
  const [isPayment, setIsPayment] = useState(false);

  function emptyValue() {
    setCash("");
    setIsPayment(false);
  }

  function onChangeCash(event) {
    setCash(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    if (cash > 30) {
      alert("จำนวนเงินเกิน");
    } else if (cash === "30") {
      props.onMachine(props.machinePayment);
      emptyValue();
      props.onHide();
    } else {
      alert("จำนวนเงินไม่พอ");
    }
  }

  useEffect(() => {
    const cashEl = document.getElementById("cashEl");
    if (cashEl) {
      cashEl.focus();
    }
  }, [isPayment]);

  function closePayment() {
    emptyValue();
    props.onHide();
  }

  let formCusElement = (
    <form onSubmit={onSubmit}>
      <h5 className="mb-3"> ค่าบริการ 30 บาท</h5>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          จำนวนเงิน
        </span>
        <input
          type="text"
          className="form-control"
          aria-describedby="basic-addon1"
          value={cash}
          placeholder="0"
          pattern="[0-9]+"
          maxlength={2}
          autoFocus
          required
          onChange={onChangeCash}
        />
        <span className="input-group-text" id="basic-addon2">
          บาท
        </span>
      </div>
      <hr />
      <Button type="submit" className="w-100 fw-bold">
        ชำระเงิน
      </Button>
    </form>
  );

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      animation={false}
    >
      <Modal.Header>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="w-100 fw-bold"
        >
          เครื่องที่ {props.machinePayment}
        </Modal.Title>
        <FontAwesomeIcon
          onClick={closePayment}
          icon={faTimes}
          className="modal__close"
        />
      </Modal.Header>
      <Modal.Body>{formCusElement}</Modal.Body>
    </Modal>
  );
}

export default Modal_Payment;
