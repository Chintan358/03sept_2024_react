
import { useContext, useEffect } from 'react'
import ProductList from './ProductList'
import {ProductContxt} from '../store/product-store'


   
    


const Products = ()=>{

    const productcontextdata = useContext(ProductContxt)

    useEffect(()=>{

        fetch("https://dummyjson.com/products").then(data=>{
            return data.json()
        }).then(result=>{

            
            
            productcontextdata.initProducts(result.products)

        }).catch(err=>{
            console.log(err);
            
        })

    },[])

    
    

    return <div className="container-fluid pt-5">
    <div className="text-center mb-4">
        <h2 className="section-title px-5"><span className="px-2">Just Arrived</span></h2>
    </div>
    <div className="row px-xl-5 pb-3">
       
       {productcontextdata.productList.map(products=><ProductList key={products.id} products={products}></ProductList>)}
      
    </div>
</div>
}

export default Products