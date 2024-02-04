import styled from "styled-components";

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }

  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: var(--transition);
    visibility: hidden;
    z-index: -1;
    &.show-sidebar {
      z-index: 99;
      opacity: 1;
      visibility: visible;
    }
    .content {
      position: relative;
      background: #fff;
      width: var(--fluid-width);
      height: 95vh;
      border-radius: var(--border-radius);
      padding: 2rem 4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      .close-btn {
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        color: var(--red-dark);
        font-size: 2rem;
        position: absolute;
        top: 10px;
        left: 10px;
      }
      .nav-links {
        display: flex;
        flex-direction: column;
        padding-top: 2rem;

        .nav-link {
          display: flex;
          align-items: center;
          color: var(--text-secondary-color);
          padding: 1rem 0;
          transition: var(--transition);
          &:hover,
          &.active {
            color: var(--primary-500);
          }
          .icon {
            font-size: 1.5rem;
            margin-right: 1rem;
            display: grid;
            place-items: center;
            transition: var(--transition);
          }
        }
      }
    }
  }
`;
export default Wrapper;
