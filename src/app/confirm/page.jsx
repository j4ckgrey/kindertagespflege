import React, { Suspense } from "react";
import ConfirmComponent from "./Confirm";

const ConfirmPage = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ConfirmComponent />
    </Suspense>
  );
};

export default ConfirmPage;
