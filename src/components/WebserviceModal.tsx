import Modal, { useModalState } from "react-simple-modal-provider";

export default function WebserviceModal({ children }: { children: any }) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { isOpen, setOpen } = useModalState();

  return (
    <Modal
      id="WebserviceModal"
      consumer={children}
      isOpen={isOpen}
      setOpen={setOpen}
    >
      <span>😆</span>
    </Modal>
  );
}
