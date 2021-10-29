import styled from "@emotion/styled";

export const maxWidth = styled("div")<{ maxWidth?: string }>`
  width: 100%;
  max-width: ${({ maxWidth = "100%" }) => maxWidth};
`;
