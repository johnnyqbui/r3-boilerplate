import { Helmet } from 'react-helmet'

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 10px auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - Sample" defaultTitle="Sample">
        <meta name="description" content="Sample content" />
      </Helmet>
      <Header />
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}