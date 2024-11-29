import { createContext, useReducer } from "react";

export const ProductContxt =  createContext()

const ProductListreducer = (currentState, action)=>{
    if(action.type=='INIT_PRODUCT')
    {   
        
        
       return currentState = action.payload.products
    }
}

const ProductContextProvider = ({children})=>{

    const [productList, productDispatcher] = useReducer(ProductListreducer,[])

    const initProducts = (products)=>{

           
            
            const initproductsAction = {
                type  : "INIT_PRODUCT",
                payload : {products}
            }
            productDispatcher(initproductsAction)
    }

    return <ProductContxt.Provider value={{productList, initProducts}}>
        {children}
    </ProductContxt.Provider>
}

export default ProductContextProvider