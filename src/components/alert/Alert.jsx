import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useAlertContext } from "../../context/AlertContext";
import { useRef } from "react";
/**
 * This is a global component that uses context to display a global alert message.
 */
function Alert() {
  const componentRef = useRef();
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef();
  const isSuccess = type === "success";

  return (
    // <div className="position-absolute top-50 start-50 translate-middle ">
    //   {isOpen && (
    //     <div className="AlertDialog bg-danger color-black p-3 shadow-lg rounded-3">
    //       <div className="display">QWE</div>
    //       <p>
    //         <strong>Submitted!</strong>
    //       </p>
    //       <button className="btn btn-md btn-secondary" onClick={onClose}>
    //         Close
    //       </button>
    //     </div>
    //   )}
    // </div>

    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent
          py={4}
          backgroundColor={isSuccess ? "#81C784" : "#FF8A65"}
        >
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {isSuccess ? "All good!" : "Oops!"}
          </AlertDialogHeader>
          <AlertDialogBody>{message}</AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Alert;
