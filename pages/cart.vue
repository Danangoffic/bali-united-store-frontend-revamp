<template>
  <div class="container-fluid px-0 pb-3 pb-xl-5">

    <!-- {{-- BREADCRUMB --}} -->
    <div class="section-breadcrumb px-3 px-lg-5 pt-2 pt-md-3 pt-lg-0 pb-0 pb-lg-1">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item font-14-gotham-book text-uppercase">
                  <nuxt-link to="/"><u>Home</u></nuxt-link></li>
                <li class="breadcrumb-item font-14-gotham-book text-uppercase" aria-current="page"><u>CART</u></li>
            </ol>
        </nav>
    </div>

    <!-- {{-- CART --}} -->
    <div class="section-trending px-3 px-lg-5 mt-3 pb-0 pb-md-1">
        <div class="row">
            <div class="col-12 col-lg-7" id="cart-product-list-index">
                <p class="font-24-gotham-bold">CART</p>
            </div>

            <div class="d-block d-lg-none bg-gray py-1 mt-2 mb-4"></div>

            <div class="col-12 col-lg-5 ps-3">
                <p class="font-20-gotham-bold mb-0">SUMMARY</p>
                <div class="accordion promo border-bottom mb-3" id="accordionSize">
                    <div class="accordion-item size">
                        <h2 class="accordion-header size" id="headingOne">
                            <button class="accordion-button size font-16-gotham-bold" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseSize" aria-expanded="true"
                                aria-controls="collapseSize">
                                PROMO CODE
                            </button>
                        </h2>
                        <div id="collapseSize" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#accordionSize">
                            <div class="accordion-body px-0 pb-2 pt-0">
                                <input class="form-control text-dark input-code font-16-gotham-book" type="text"
                                    placeholder="Enter Your Promo Code" aria-label="input example">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="col-7"><span class="font-14-gotham-book subtotal">Subtotal</span></div>
                    <div class="col-5 text-end"><span class="font-20-gotham-book" id="subtotal">Rp 3.000.000</span></div>
                </div>
                <!-- {{-- <div class="row mb-2">
                <div class="col-7"><span class="font-14-gotham-book">Estimated Delivery & Handling</span></div>
                <div class="col-5 text-end"><span class="font-20-gotham-book">Rp 40.000</span></div>
            </div>
            <div class="row mb-2">
                <div class="col-7"><span class="font-14-gotham-book">Product Protection Cost</span></div>
                <div class="col-5 text-end"><span class="font-20-gotham-book">Rp 20.000</span></div>
            </div> --}} -->
                <hr>
                <div class="row">
                    <div class="col-12 d-flex justify-content-between mb-0 mb-lg-3">
                        <p class="font-14-gotham-bold mb-1">Total</p>
                        <p class="font-20-gotham-bold mb-1" id="subtotal-cart">Rp 3.000.000</p>
                    </div>
                </div>
                <nuxt-link to="/checkout" type="button" class="btn btn-dark rounded-0 font-16-gotham-bold text-white py-3 py-lg-4 w-100 mb-3 d-none d-lg-block">
                  CHECKOUT NOW
                </nuxt-link>
                <!-- {{-- MOBILE --}} -->
                <div class="card d-block d-lg-none border-0">
                    <div class="bg-white fixed-bottom border-0 rounded-0 px-3">
                        <nuxt-link to="/checkout" type="button" class="btn btn-dark rounded-0 font-16-gotham-bold text-white py-3 my-3 w-100">
                          CHECKOUT NOW
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
        <hr class="d-none d-lg-block">
    </div>

    <div class="d-block d-lg-none bg-gray py-1 mt-3 mb-4"></div>

    <!-- {{-- FAVORITES --}} -->
    <div class="section-trending px-3 px-lg-5 mt-3 pb-0 pb-md-1">
        <p class="font-20-gotham-bold">Favourites</p>
        <div class="d-none d-md-block">
            <div class="row">
                <!-- @foreach ($wishlist as $product)
                    <?php
                    $product = $product->product;
                    $attach = asset('assets/product_sample/men/img_1.png');
                    if ($product->attachments) {
                        $attachments = $product->attachments;
                        $attach = $attachments[0]->attachment;
                    }
                    ?> -->
                    <div class="col-6">
                        <div class="row">
                            <div class="col-5 my-auto">
                                <img src="/product_sample/img_5.png"
                                    class="card-favorites product-catalog-1" alt="">
                            </div>
                            <div class="col-7 my-auto">
                                <p class="font-16-gotham-book text-uppercase mb-1">Product Name</p>
                                <p class="font-16-gotham-bold mb-3">Rp 123.123</p>
                            </div>
                        </div>
                    </div>
                <!-- @endforeach -->
            </div>
        </div>
        <div class="d-block d-md-none">
            <div class="row flex-row flex-nowrap overflow-auto">
                <!-- <?php
                $index = 1;
                ?>
                @foreach ($products as $product->product)
                    <?php
                    $attach = asset('assets/product_sample/men/img_1.png');
                    if ($product->attachments) {
                        $attachments = $product->attachments;
                        $attach = $attachments[0]->attachment;
                    }
                    ?> -->
                    <div class="col-card mt-2">
                        <div class="card rounded-0 border-0">
                            <img src="/product_sample/img_6.png"
                                class="card-img-top card-favorites-mobile rounded-0 product-catalog-2"
                                alt="">
                            <div class="card-body text-center px-0 mb-0 pb-0">
                                <p class="font-16-gotham-book text-uppercase mb-1">Product Name 2</p>
                                <p class="font-16-gotham-bold mb-3">Rp 234.234</p>
                            </div>
                        </div>
                    </div>
                <!-- @endforeach -->
            </div>
        </div>
    </div>

    <!-- {{-- TRENDING --}} -->
    <ProductMayYouLike />

  </div>
</template>
