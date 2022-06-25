import React from "react";

interface RandomNumberType {
  value: number;
}

type RandomNumberPositivetype = RandomNumberType & {
  isPositive?: boolean;
  isNegative?: never;
  isZero?: never;
};

type RandomNumberNegativetype = RandomNumberType & {
  isPositive?: never;
  isNegative?: boolean;
  isZero?: never;
};

type RandomNumberZerotype = RandomNumberType & {
  isPositive?: never;
  isNegative?: never;
  isZero?: boolean;
};

type randomNumberProps =
  | RandomNumberPositivetype
  | RandomNumberNegativetype
  | RandomNumberZerotype;

function RandomNumber({
  value,
  isPositive = false,
  isNegative = false,
  isZero = false,
}: randomNumberProps) {
  return (
    <div>
      {value}
      {isPositive && " is positive number"}
      {isNegative && " is negative number"}
      {isZero && " is zero number"}
    </div>
  );
}

export default RandomNumber;
