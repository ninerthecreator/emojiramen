import React from 'react';

const SuccessMessage = (props) => {
  return(
    <div className="alert alert-success" role="alert">
      { props.successMessage }
    </div>
  );
};

export default SuccessMessage;
