import styled from 'styled-components';

export const Container = styled.div`
  .link {
    padding: 50px;
  }

  .sub-links {
    color: #b2b2b2;
  }
  .sub-links ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  .sub-links a {
    color: var(--dark);
    text-decoration: none;
  }

  .sub-links a:hover {
    color: var(--dark);
    text-decoration: underline;
  }

  .logos a {
    padding: 10px;
  }

  .logo {
    color: var(--dark);
  }
  footer {
    padding: 20px;
    text-align: center;
    color: var(--dark);
    margin: 10px;
  }
`;
