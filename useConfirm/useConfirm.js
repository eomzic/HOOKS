import "./styles.css";

export const useConfirm = (message = "", onCancel, onConfirm) => {
    if (!onConfirm || typeof onConfirm !== "function") {
        return;
    }
    if(onCancel && typeof onCancel !== "function")
    const confirmAction= () => {
        if (confirm(message)){
            onConfirm();
        } else {
            onCancel();
        }
    }
    return confirmAction;
};

export default useConfirm;