<%- include('../partials/header.ejs') %>
<main>
    <div class="wrapper">
        <div class="desc">
            <h1>Ecommerce App</h1>
            <p>List of Products</p>
        </div>

        <div class="content">
            <!-- content here -->
            <div class="product-grid product-grid--flexbox">
                <div class="product-grid__wrapper">
                    <!-- Product list start here -->    
                    <!-- Single product -->
                    <% product.forEach((ele)=>{ %>
                        <%= console.log(ele) %>
                    <div class="product-grid__product-wrapper">
                        <div class="product-grid__product">
                            <div class="product-grid__img-wrapper">			
                                <img src="/uploads/<%= ele.cover_image %>" alt="<%= ele.cover_image %>" class="product-grid__img" />
                            </div>
                            <span class="product-grid__title"><%= ele.name %></span>
                            <span class="product-grid__price"><%= ele.price %>€</span>
                            <div class="product-grid__extend-wrapper">
                                <div class="product-grid__extend">
                                    <p class="product-grid__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis velit itaque odit.</p>
                                    <span class="product-grid__btn product-grid__add-to-cart"><i class="fa fa-cart-arrow-down"></i> Add to cart</span>				
                                    <a href="/products/<%= ele.slug %>/show">  <span class="product-grid__btn product-grid__view"><i class="fa fa-eye"></i>View More </span> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <% }) %>
                    <!-- end Single product -->
    </div>
</main>
