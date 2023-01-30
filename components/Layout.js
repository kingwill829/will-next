import React from 'react'
import Header from './Header'
import Footer from './Footer';
import Content from './Content';


const Layout = ({children}) => {
  return(
    <div>
      <Header></Header>
      <Content>
        { children }
      </Content>
      <Footer></Footer>
    </div>
  );
}

export default Layout