import { createPortal } from 'react-dom'

export default function PortalModal({
  onModalClick,
  isOpen,
}: {
  onModalClick: (v: string) => void
  isOpen: boolean
}) {
  return (
    <div>
      <button onClick={() => onModalClick('portal')}>Portal Modal</button>
      {isOpen && createPortal(<h1>Portal 모달</h1>, document.body)}
    </div>
  )
}
