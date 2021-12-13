import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";

export default function MachineStatus({ qtyMachine }) {
  return (
    <>
      <div>
        <FontAwesomeIcon icon={faSquare} className="text-success me-2" />
        <label className="text-balck me-2">เครื่องว่าง</label>
      </div>
      <div>
        <FontAwesomeIcon icon={faSquare} className="text-danger me-2" />
        <label className="text-black me-2">เครื่องไม่ว่าง</label>
      </div>
      <h2 className="my-3 text-black">เครื่องว่าง {qtyMachine} เครื่อง</h2>
    </>
  );
}
