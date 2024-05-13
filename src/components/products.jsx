export const Products =(propsdata)=>{
    return(
        <div class="product-section">
        <div class="container">
            <div class="row">

                <div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
                    <h2 class="mb-4 section-title">Crafted with excellent material.</h2>
                    <p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
                    <p><a href="shop.html" class="btn">Explore</a></p>
                </div> 
                { propsdata.data? propsdata.data.map((d)=>(
                                    <div key={d.title} className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                                    <a class="product-item" href="cart.html">
                                        <img src="images/product-1.png" class="img-fluid product-thumbnail"></img>
                                        <h3 class="product-title">{d.title}</h3>
                                        <strong class="product-price">{d.Price}</strong>
                
                                        <span class="icon-cross">
                                            <img src={d.largeImage} class="img-fluid"></img>
                                        </span>
                                    </a>
                                </div> 
                )) : "loading.."}

            </div>
        </div>
    </div>
    )
}