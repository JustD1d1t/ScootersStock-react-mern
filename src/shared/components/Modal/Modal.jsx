import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#fefefe",
  border: `2px solid #ffe11e`,
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
};

export const BasicModal = ({ text, modalActive, closeModal }) => {
  return (
    <div>
      <Modal
        open={modalActive}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {text}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
