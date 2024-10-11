import im2 from "../assets/images/im2.jpg"
import im1 from "../assets/images/im1.jpg"
import im3 from "../assets/images/im3.jpg"

function Product()
{
  return(
    <div class="products">      
        <div class="box">
            <img src={im2} alt="Perfume"></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>

        <div class="box">
            <img src={im1} alt="Perfume"></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>

        <div class="box">
            <img src={im3} alt="Perfume"></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
    </div>
  )
}

export default Product