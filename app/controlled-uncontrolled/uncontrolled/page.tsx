'use client'
import React, { useState, useRef } from 'react'

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <button type="button" onClick={handleOpenModal}>
        Open Modal
      </button>
      {isOpen && (
        <div ref={modalRef}>
          <button type="button" onClick={handleCloseModal}>
            Close Modal
          </button>
          <h1>Modal Content</h1>
        </div>
      )}
    </div>
  )
}

export default function Page() {
  return <Modal />
}
