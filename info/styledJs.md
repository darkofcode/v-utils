# styledJs

```javascript
//custom props
export const sTitle = styled(
  ({ isUpper, ...props }: { isUpper: boolean, [key: string]: any }) => <h1 {...props} />
)`
  font-weight: 600;
  font-size: 2.1rem;
  letter-spacing: 1.4px;
  text-transform: ${({ isUpper = false }) => isUpper};
`;

//prop type
export const maxWidth = styled("div")<{ maxWidth?: string }>`
  width: 100%;
  max-width: ${({ maxWidth = "100%" }) => maxWidth};
`;

// with mui
export const example = styled("div")<{ color: string }>`
  background: ${({ theme, color }) => "red"};
`;
```
