import styled from "styled-components";

const Wrapper = styled.button`
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  width: 3.5rem;
  height: 2rem;
  display: grid;
  place-items: center;
  margin-right: 1.5rem;
  .toggle-icon {
    font-size: 1.15rem;
    color: var(--text-color);
  }
`;
export default Wrapper;
