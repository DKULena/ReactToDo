import styled from "@emotion/styled";

const Layout = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid gray;
  padding: 32px;
  border-radius: 6px;
  width: 50%;
  margin: auto;
`;

export default Layout;
