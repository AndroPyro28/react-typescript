import React from "react";

interface TextOwnProps<E extends React.ElementType> {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: E;
}

type textProps<E extends React.ElementType> = TextOwnProps<E> & Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;


function Text<E extends React.ElementType = "div">({
  size,
  color,
  children,
  as,
}: textProps<E>) {
  const AsComponent = as || "div";
  return (
    <AsComponent className={`class-with-${size}-${color}`}>
      {children}
    </AsComponent>
  );
}

export default Text;
