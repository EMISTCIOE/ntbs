import styled from "styled-components";
import { Link } from "react-router-dom";
const ErrorIllustration = styled.img`
  position: relative;
  height: 20rem;
  max-width: 80vw;
`;
const GoBack = styled.button`
  position: relative;
  padding: .5rem .75rem;
  background: #000;
  border: none;
  border-radius: .25rem;
  font-size: 1rem;
  font-family: var(--body-font);
`;

const PageNotFoundRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 100%;
  height: 100vh;
  gap: 1rem;
`;

const PageNotFound = () => {
  return (
    <PageNotFoundRoot>
      <ErrorIllustration
        alt="Error 404"
        src="/error404.svg"
      />
      <GoBack>
        <Link to='/'>
        Return to Home Page
        </Link>
        </GoBack>
    </PageNotFoundRoot>
  );
};

export default PageNotFound;
