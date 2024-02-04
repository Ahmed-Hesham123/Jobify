import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  .logout-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 0.5rem;
  }
  .img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .dropdown {
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    box-shadow: var(--shadow-2);
    text-align: center;
    visibility: hidden;
    border-radius: var(--border-radius);
    background: var(--primary-500);
    &.show-dropdown {
      visibility: visible;
    }
    .dropdown-btn {
      cursor: pointer;
      border-radius: var(--border-radius);
      padding: 0.5rem;
      background: transparent;
      border-color: transparent;
      width: 100%;
      height: 100%;
      color: var(--white);
      letter-spacing: var(--letter-spacing);
      text-transform: capitalize;
    }
  }
`;

export default Wrapper;
