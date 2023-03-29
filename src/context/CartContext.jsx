import React, {useState, useContext} from 'react';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addProduct = (item, newQuantity) => {
        if (isInCart(item.id)){
            setCart(cart.map(product => 
                product.id === item.id ? { ...product, quantity: product.quantity + newQuantity} : product
            ));
        } else{
            setCart([...cart, { ...item, newQuantity}]);
        }
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalProducts = () => cart.reduce((acumulator, productoActual) => acumulator + productoActual.quantity, 0);

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.some(product => product.id === id);
    
    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    return(
        <CartContext.Provider value={{
           clearCart,
           isInCart,
           removeProduct,
           addProduct,
           totalPrice,
           totalProducts,
           cart
        }}>
            {children}
        </CartContext.Provider>       
    )
}

export default CartProvider;