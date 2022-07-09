import React from 'react'
import BasicModal from './BasicModal';
import Typography from "@mui/material/Typography";
const IncompleteModal = ({onClose}) => {
  return (
    <BasicModal onClose={onClose}>
        <Typography color="black">
            Incomplete Modal
        </Typography>
    </BasicModal>
  )
}

export default IncompleteModal