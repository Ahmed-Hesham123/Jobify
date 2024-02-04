import styled from "styled-components";

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: var(--background-secondary-color);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: margin-left 0.3s ease-in-out;
      &.show-sidebar {
        margin-left: 0;
      }
      .content {
        position: sticky;
        top: 0;
        padding: 1rem;

        header {
          height: 6rem;
          display: flex;
          align-items: center;
          padding-left: 2.5rem;
        }
        .nav-links {
          display: flex;
          flex-direction: column;
          padding-top: 2rem;
          .nav-link {
            display: flex;
            align-items: center;
            padding: 1rem 0;
            padding-left: 2.5rem;
            color: var(--text-secondary-color);
            transition: padding-left 0.3s ease-in-out;
            &:hover {
              padding-left: 3rem;
              color: var(--primary-500);
              transition: var(--transition);
            }

            &.active {
              color: var(--primary-500);
            }
            .icon {
              font-size: 1.5rem;
              margin-right: 1rem;
              display: grid;
              place-items: center;
            }
          }
        }
      }
    }
  }
`;
export default Wrapper;
