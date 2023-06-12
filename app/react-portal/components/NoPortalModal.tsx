

export default function NoPortalModal({onModalClick, isOpen}: {onModalClick: (v: string) => void, isOpen: boolean }) {
  return <div>
    <button onClick={() => onModalClick('noPortal')}>No Portal Modal</button>
    {
      isOpen && 
    <h1>No Portal 모달</h1>
    }
    
  </div>
}