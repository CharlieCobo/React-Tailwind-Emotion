import React from "react";
import tw, { styled } from "twin.macro";

const Button = styled.button`
  ${tw`p-2 m-2`}

  ${({ isPrimary }) => (isPrimary ? tw`bg-green-500` : tw`bg-gray-600`)}
  ${({
    rounded,
  }) => (rounded ? tw`rounded` : null)}
`;

export { Button };
