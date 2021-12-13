import "./App.css";
import WashingMachine from "./components/WashingMachine";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import washingMachineData from "./data/washingMachineData";
import { useState } from "react";
import MachineStatus from "./components/MachineStatus";
import { Row, Col } from "react-bootstrap";
import Modal_Payment from "./components/Modal_Payment";

function App() {
  const [washingMachine, setWashingMachine] = useState(washingMachineData);
  const [modalShow, setModalShow] = useState(false);
  const [machinePayment, setMachinePayment] = useState(1);
  const [qtyMachine, setQtyMachine] = useState(8);

  const onMachine = (no) => {
    const newWashingMachine = washingMachine;
    newWashingMachine.forEach((washingMachine) => {
      if (washingMachine.no === no) washingMachine.color = "danger";
      setQtyMachine(qtyMachine - 1);
    });
    setWashingMachine([...newWashingMachine]);
  };

  const offMachine = (no) => {
    const newWashingMachine = washingMachine;
    newWashingMachine.forEach((washingMachine) => {
      if (washingMachine.no === no) washingMachine.color = "success";
      setQtyMachine(qtyMachine + 1);
    });
    setWashingMachine([...newWashingMachine]);
  };

  const onPayment = (no) => {
    setMachinePayment(no);
    setModalShow(true);
  };

  return (
    <div className="App">
      <Header />
      <Container>
        <Row>
          <Col sm={8} lg={9}>
            <WashingMachine
              washingMachine={washingMachine}
              offMachine={offMachine}
              onPayment={onPayment}
            />
          </Col>
          <Col sm={4} lg={3}>
            <MachineStatus qtyMachine={qtyMachine} />
          </Col>
        </Row>
        <Modal_Payment
          show={modalShow}
          onHide={() => setModalShow(false)}
          machinePayment={machinePayment}
          offMachine={offMachine}
          onMachine={onMachine}
        />
      </Container>
    </div>
  );
}

export default App;
