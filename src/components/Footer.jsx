
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcMastercard, faPaypal } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1 className="logo-text">DOGWOAH</h1>
            <ul>
              <li><a href= "https://www.royalcanin.com/br/dogs/breeds/breed-library?gclid=CjwKCAjwxaanBhBQEiwA84TVXNm8d05BoG5c7PafFpWSKEXDoYqjfiPOPqny2MLwFuo-iX-EWGe0rRoCTXwQAvD_BwE" class="footer-link">Cachorros</a></li>
              <li><a href="https://www.buddytoys.com.br/blog/cinco-curiosidades-sobre-caes/?gclid=CjwKCAjwxaanBhBQEiwA84TVXBgwGFBzkoO8-7QpxuruhWUR-IjyDwHeMLLManC0UtEKSXpOX4y_EhoCnCcQAvD_BwE" class="footer-link">Curiosidades</a></li>
              <li><a href="https://blog.cobasi.com.br/cuidados-com-cachorros-10-dicas-de-saude/" class="footer-link">Cuidados</a></li>
            </ul>
        </div>

        
        <div className="footer-links">
          <ul>
            <li><a href="/" className="footer-link">Home</a></li>
            <li><a href="/productos" className="footer-link">Produtos</a></li>
            <li><a href="/Contact" className="footer-link">Contato</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <div>
            <h4>Deseas contactarnos?</h4>
          </div>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-whatsapp"></i></a> 
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="far fa-envelope"></i></a>
       </div>

      </div>
      <div className="footer-payment">
        <p>Formas de pagamento</p>
        <div className="payment-icons">
          <FontAwesomeIcon icon={faCcVisa} className="payment-icon" />
          <FontAwesomeIcon icon={faCcMastercard} className="payment-icon" />
          <FontAwesomeIcon icon={faPaypal} className="payment-icon" />
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} DOGWOAH.</p>
      </div>
    </footer>
  );
};
