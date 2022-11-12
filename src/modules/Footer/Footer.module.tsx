import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <section className="link">
        <div className="sub-links">
          <ul>
            <li>
              <a href="#">Audio and Subtitles</a>
            </li>
            <li>
              <a href="#">Audio Description</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Gift Cards</a>
            </li>
            <li>
              <a href="#">Media Center</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Legal Notices</a>
            </li>
            <li>
              <a href="#">Corporate Information</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </section>

      <footer>
        <p>copy 1997-2022 Netflix, Inc.</p>
        <p>
          ⌨️ com ❤️ por{' '}
          <a href="https://github.com/maikeg-alves/">
            {' '}
            <strong> Maicon Gabriel Alves</strong>{' '}
          </a>{' '}
          😊
        </p>
      </footer>
    </Container>
  );
};

export default Footer;
