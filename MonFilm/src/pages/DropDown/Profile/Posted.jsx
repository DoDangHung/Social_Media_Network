/** @format */

import React, { useState } from "react";
import DialogPost from "../../../Components/container/DiaglogPost";

const Posted = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpen = () => setIsDialogOpen(true);
  const handleClose = () => setIsDialogOpen(false);

  return (
    <div>
      <button onClick={handleOpen}>Open Dialog</button>
      <DialogPost open={isDialogOpen} onClose={handleClose} />
    </div>
  );
};

export default Posted;
