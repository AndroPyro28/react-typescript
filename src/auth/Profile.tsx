import React from "react";

export interface ProfileProps {
  name: string;
}

export function Profile({ name }: ProfileProps) {
  return <div>Private Profile Component Name is {name} </div>;
}

