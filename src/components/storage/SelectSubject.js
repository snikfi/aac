import React from 'react';
import useFirestore from '../../hooks/useFirestore';
import InterfaceSquare from "./InterfaceSquare"

const SelectSubject = () => {
//   const { docs } = useFirestore('images');

  return (
    <div className="select-subject-panel">
      <InterfaceSquare></InterfaceSquare>
      <InterfaceSquare></InterfaceSquare>
      <InterfaceSquare></InterfaceSquare>
      <InterfaceSquare></InterfaceSquare>
      <InterfaceSquare></InterfaceSquare>
      <InterfaceSquare></InterfaceSquare>
    </div>
  )
}

export default SelectSubject;