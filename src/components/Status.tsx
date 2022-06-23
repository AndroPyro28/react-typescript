import React from "react";

interface StatusProps {
  status: 'loading' | 'success' | 'error'
}

function Status(props: StatusProps) {
  const { status } = props;
  return (
    <div>
      {status === "loading" && <h2>Loading...</h2>}

      {status === "success" && <h2>Data fetched sucessfully</h2>}

      {status === "error" && <h2>Error Fetching data</h2>}
    </div>
  );
}

export default Status;
