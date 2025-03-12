// write product card here
import Button from "./button";


function Productcard(){
    const productImage='https://m.media-amazon.com/images/I/71s0HTuXpuL._SX679_.jpg';
    const productName ='MUSCLE BLAZE WHEY PROTEIN';
    const price='7999'


    return(
        <div>
            <p> {productName} </p>

        <img style={{
            width:"200px"
        }} src={productImage}/>
            <Button/>
            <p>{price}</p>
        </div>
    );
}


export default Productcard;
// card should display:- 
// - product image
// - product name 
// - price
// - View product button