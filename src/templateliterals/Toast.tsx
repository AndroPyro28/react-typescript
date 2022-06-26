import React from "react";

type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";

type ToastPosition = `${HorizontalPosition}-${VerticalPosition}`;

interface toastProps {
  position: Exclude<ToastPosition, "center-center"> | "center";
  //exclude<your allowedTypes, yourDisableTypes>
}

function Toast({ position}: toastProps) {
  return <div>Toast notification position - {position} </div>;
}

export default Toast;
