import Link from 'next/link';
import Footer from './Footer';
import Header from './Header';


export default function Layout({ children }) {
  return (
    <>
     <Header/>
     {children}
      <Footer/>
    </>
  );
}