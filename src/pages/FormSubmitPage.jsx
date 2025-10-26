import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
const SuccessIcon = styled.div`
  display: flex;
  font-size: 5rem;
  color: #4BB543;
`;
const GoBack = styled.button`
  position: relative;
  padding: .5rem .75rem;
  margin: 1rem;
  background: #000;
  border: none;
  border-radius: .25rem;
  font-size: 1rem;
  font-family: var(--body-font);
`;

const PageRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 100%;
  height: 100vh;
`;

const FormSubmitPage = () => {
  return (
    <PageRoot>
        <SuccessIcon>
      <FaCheckCircle />
        </SuccessIcon>
        <h1>Thank You!</h1>
        <p>Your message has been sent successfully.</p>
      <GoBack>
        <Link to='/'>
        Return to Home Page
        </Link>
        </GoBack>
    </PageRoot>
  );
};

export default FormSubmitPage;
