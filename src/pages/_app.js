import '../styles/globals.css'; // O caminho deve ser EXATAMENTE onde o arquivo está
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}