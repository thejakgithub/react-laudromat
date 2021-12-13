import React from "react";
import { Button } from "react-bootstrap";
import "./WashingMachine.css";
import Timer from "./Timer";

export default function WashingMachine({
  washingMachine,
  offMachine,
  onPayment,
}) {
  return (
    <>
      <div className="machine__container">
        {washingMachine.map((theMachine) => {
          return theMachine.color === "danger" ? (
            <Button
              key={theMachine.no}
              onClick={() => offMachine(theMachine.no)}
              variant="danger"
              className="machine__btn "
            >
              <span className="fs-3">
                <Timer initialSeconds={10} />
              </span>
            </Button>
          ) : (
            <Button
              key={theMachine.no}
              onClick={() => onPayment(theMachine.no)}
              variant="success"
              className="machine__btn "
            >
              <span className="fs-3">{theMachine.no}</span>
            </Button>
          );
        })}
      </div>
    </>
  );
}
