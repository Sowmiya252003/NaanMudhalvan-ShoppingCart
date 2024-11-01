import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import Cart from './Cart';
import Checkout from './Checkout';



const productsData = [
  { id: 1, name: 'Indianara radha digital reprint ', price: '1999.00', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/painting/t/y/r/13-1-gtsfra10786-s-gbn-indianara-original-imagw82eznaezpb2.jpeg?q=70' },
  { id: 2, name: 'KOTART Digital Reprint ', price: '1519.00', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/painting/p/q/f/10-6-paintingksbr16-kotart-original-imagvthvghyghqft.jpeg?q=70' },
  { id: 3, name: 'Indekraft Digital Reprint', price: '1499.00', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/painting/b/b/o/30-5-ds17622-ds-creations-original-imagzzkhymgeyreh.jpeg?q=70' },
  { id: 4, name: 'Krishna Digital Reprint', price: '1229.00', image: 'https://rukminim2.flixcart.com/image/612/612/kzrbiq80/painting/j/c/2/30-5-sanfpnls32218-saf-original-imagbpfxyqzpk6u9.jpeg?q=70' },
  { id: 5, name: 'Dancing arts Reprint', price: '1100.00', image: 'https://rukminim2.flixcart.com/image/612/612/ktuewsw0/painting/3/8/j/indr929-indianara-original-imag73tazwch3gm4.jpeg?q=70' },
  { id: 6, name: 'Vastu waterfall Reprint', price: '1200.00', image: 'https://rukminim2.flixcart.com/image/612/612/l2m78280/painting/v/9/g/18-3-pf-mdf-1445-9x12-4x12-setof3-pnf-original-imagdwygrze9evgm.jpeg?q=70' },
  { id: 7, name: 'Frames Painting', price: '1130.00', image: 'https://rukminim2.flixcart.com/image/612/612/kdqa4y80/painting/k/z/h/pnf-2096-3pc-9x12-jpg-poster-n-frames-original-imafukmjuvk2vvdr.jpeg?q=70' },
  { id: 8, name: 'Modern Canvas Art', price: '1460.00', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/painting/n/n/v/20-1-gtsfra10406-can-indianara-original-imagvqfyguwtuz4r.jpeg?q=70' },
  { id: 9, name: 'Lord Ganesha Art', price: '1520.00', image: 'https://rukminim2.flixcart.com/image/612/612/kndi4y80/painting/k/v/e/18-indr3472fla-indianara-original-imag22b7v2tzdzjt.jpeg?q=70' },
  { id: 10, name: 'Cross Wooden Frame', price: '2160.00', image: 'https://rukminim2.flixcart.com/image/612/612/jz8qf0w0/painting/f/b/h/pnf-20583-12x12-crossframe-poster-n-frames-original-imafjaghfpndzm9g.jpeg?q=70' },

  { id: 11, name: 'Hand Painting', price: '1770.00', image: 'https://rukminim2.flixcart.com/image/612/612/kdqa4y80/painting/w/c/y/2207-3pc-13-5x10-5-jpg-poster-n-frames-original-imafukfshrkghhhg.jpeg?q=70' },
  { id: 12, name: 'Ganesha art ', price: '2380.00', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/painting/g/p/g/30-5-msnd5p38-sndart-original-imah4zhzjrynn9fh.jpeg?q=70' },
  { id: 13, name: 'Flowers in Vases', price: '1240.00', image: 'https://rukminim2.flixcart.com/image/612/612/ktx9si80/painting/5/p/e/18-3-indr1706fl-indianara-original-imag75mcjhrwuzf8.jpeg?q=70' },
  { id: 14, name: 'Wallmax Gift ', price: '1770.00', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/painting/g/q/l/12-3-wag-jm70147-wallmax-original-imagrdh5qzfcpwu9.jpeg?q=70' },
  { id: 15, name: 'SNDArt Krishna', price: '2380.00', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/wall-decoration/o/f/n/radha-krishna-paintings-for-wall-decoration-set-of-five-3d-original-imah4j7uhwaaa5en.jpeg?q=70' },
  { id: 16, name: 'Massstone Lord', price: '2990.00', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/painting/j/g/c/30-5-ms-6mm-5p-1730-16235-masstone-original-imagtevfnpyyzgug.jpeg?q=70' },
  { id: 17, name: 'Indianara Deer', price: '1580.00', image: 'https://rukminim2.flixcart.com/image/612/612/kfpq5jk0/painting/n/4/f/indr3036-indianara-original-imafw3kq3za7qacn.jpeg?q=70' },
  { id: 18, name: 'Paintings Villa Set', price: '1590.00', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/normal-photo-frame/6/5/k/painting-villa-mdf-photoframe-3-pv-gp-0003-paintings-villa-original-imahf3ybr2av8zpz.jpeg?q=70' },
  { id: 19, name: 'Gold Buddha Sparkle', price: '2590.00', image: 'https://rukminim2.flixcart.com/image/612/612/jueep3k0/painting/z/r/n/sp-2436-057-masstone-original-imaffjhggp68j5sg.jpeg?q=70' },
  { id: 20, name: 'Saf Digital Reprint', price: '1770.00', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/painting/c/j/9/18-3-jmf-492-sndart-original-imahf87sxndxxggb.jpeg?q=70' },
  { id: 21, name: 'Rainbow Arts', price: '3480.00', image: 'https://rukminim2.flixcart.com/image/612/612/kd0k7m80/painting/m/z/w/ra1001-rainbow-arts-original-imafuymqnvkrvxfr.jpeg?q=70' },
  { id: 22, name: 'Shiv Ji Modern Art', price: '2590.00', image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/painting/n/9/0/30-5-sv04-jb-creations-original-imagqcuzw7ykmaxn.jpeg?q=70' },
];
function App() {
  const [cart, setCart] = useState([]);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isCart, setIsCart] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const productExists = prevCart.find((item) => item.id === product.id);
      if (productExists) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    setIsCart(true);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleProceedToCheckout = () => {
    setIsCheckout(true);
    setIsCart(false);
  };

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
    setCart([]);
    setIsCheckout(false);
  };

  const goBackToCart = () => {
    setIsCart(true);
    setIsCheckout(false);
  };

  const goBackToProducts = () => {
    setIsCart(false);
    setIsCheckout(false);
  };

  return (
    <div className="App">
      <header className="header">
      
        <h1>
        
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO9w8ypKoU4n2aY9iHUrY-_ZNNfkDs0z0TVOwxWq9gQAPmJiF4XLLfo5AZwNFYu7D9cxQ&usqp=CAU" alt="" />
          CURIOUS CART

        </h1>
        <p style={{ fontStyle: 'italic' }}>
          "Always Deliver More Than Expected"
        </p>
      </header>
      <main className="main-container">
        {!isCheckout && !isCart ? (
          <ProductList products={productsData} addToCart={addToCart} />
        ) : isCart ? (
          <>
            <Cart cartItems={cart} removeFromCart={removeFromCart} onProceedToCheckout={handleProceedToCheckout} />
            <button className="back-to-products-btn" onClick={goBackToProducts}>
              Back to Products
            </button>
          </>
        ) : (
          <Checkout cartItems={cart} onPlaceOrder={handlePlaceOrder} goBackToCart={goBackToCart} />
        )}
      </main>
    </div>
  );
}


export default App;






