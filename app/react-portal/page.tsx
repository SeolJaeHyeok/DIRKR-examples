"use client"

import { useState } from "react";
import PortalModal from "./components/PortalModal";
import NoPortalModal from "./components/NoPortalModal";

export default function Page() {
  const [modalStatus, setModalStatus] = useState({
    portal: {
      isOpen: false,
    },
    noPortal: {
      isOpen: false,
    }
  })

  const handleModalClick = (type: string) => {
    console.log(type)
    setModalStatus((prev: typeof modalStatus) => ({
      ...prev,
      [type]: {
        isOpen: !prev[type].isOpen,
      },
    }));
  }

  return <div style={{display: 'flex', marginLeft: '20px'}}>
    <NoPortalModal isOpen={modalStatus.noPortal.isOpen} onModalClick={handleModalClick}/>
    <PortalModal isOpen={modalStatus.portal.isOpen} onModalClick={handleModalClick}/>
  </div>
}