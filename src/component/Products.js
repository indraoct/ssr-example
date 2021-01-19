import React, {Component} from 'react';

class Products extends Component{

    componentDidMount(){
        //set active navbar for Products
        document.getElementById('navbar-products').classList.add("active")
      }

    render(){
        const products = ['Paket Internet 10GB','Paket Nelpon Hemat 5000','Paket Batman']
        const listProducts = products.map((products,key)=>
                <li className="list-group-item" key={key}>{products}</li>
        );
        return(
            <div>
                <h1>
                    Product List
                </h1>
            <ul className="list-group">  
                    {listProducts}
            </ul>
            </div>
                
        );
    }
}

export default Products;