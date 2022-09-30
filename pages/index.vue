<template>
  <div class="container-fluid px-0 pb-4 mt-md-2">

  <!-- {{-- BANNER --}} -->
    <div class="section-banner px-0 px-lg-5">
        <div class="card text-white border-0 position-relative">
            <img src="/home-banner.png" class="card-img img-banner rounded-0" alt="" />
            <div class="card-img-overlay p-4 p-xl-5 mx-4 mx-md-4 mb-2 mb-xl-4">
                <div class="col-md-8 col-lg-6 position-absolute bottom-0 pb-md-4 pb-lg-3 mb-md-2 col-banner-mobile">
                    <p class="card-title font-48-gotham-black text-uppercase lh-120 mb-md-3 pe-3 pe-lg-0">
                        PERSONALISED.<br />JUST FOR YOU</p>
                    <p class="card-text font-18-gotham-book lh-120 me-lg-5 pe-lg-5 mb-2 mb-lg-4">We believe the world is
                        more beautiful as each person gets better.</p>
                    <a href="#"
                        class="btn btn-explore rounded-0 px-0 border-bottom font-18-gotham-book text-white">Explore More
                        <span><img src="/icons/ic_white_arrow.png" class="icon-28"
                                alt=""></span></a>
                </div>
            </div>
        </div>
    </div>

    <!-- {{-- TRENDING --}} -->
    <div class="section-trending px-3 px-lg-5 pb-0 pb-md-3">
        <p class="font-20-gotham-book text-uppercase text-center py-4 py-md-5 my-3 my-md-0">TRENDING</p>
        <!-- <x-trending :products="$products_data" /> -->
    </div>

    <!-- {{-- DISCOVER MORE --}} -->
    <div class="section-discovermore mt-4 mb-3 mb-md-5">
        <div class="card position-relative">
            <img src="/afc_banner.png" class="w-100 h-100" alt="">
            <div class="card-img-overlay">
                <div class="position-absolute btn-discover">
                    <a href="#"
                        class="btn border-white p-2 p-md-2 p-lg-3 rounded-0 font-20-gotham-book text-uppercase text-white">DISCOVER
                        <span>MORE COLLECTION</span></a>
                </div>
            </div>
        </div>
    </div>

    <!-- {{-- SPORTS COLLECTION --}} -->
    <div class="section-collection px-3 px-lg-5 pt-3">
        <div class="row">
            <div class="col-12 col-sm-4 col-md-4 col-lg-5 text-center my-auto">
                <p class="font-24-gotham-medium text-uppercase mb-3 pb-3 pb-md-0 mb-md-3">SPORTS COLLECTION</p>
                <div class="card rounded-0 border-0 mb-3 mb-md-0">
                    <div class="row">
                        <div class="col-6 col-sm-12">
                            <img src="/product_sample/img_5.png" class="card-img-top rounded-0"
                                alt="">
                        </div>
                        <div class="col-6 col-sm-12">
                            <div class="card-body text-center px-0">
                                <p class="font-16-gotham-book mt-4">Made for those who love sports</p>
                                <a href="#" class="font-18-gotham-book text-uppercase text-underlined"
                                    onclick=""><u>MORE COLLECTION</u></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-8 col-md-8 col-lg-7">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/product_sample/img_5.png" class="img-carousel w-100"
                                alt="">
                        </div>
                        <div class="carousel-item">
                            <img src="/product_sample/img_5.png" class="img-carousel w-100"
                                alt="">
                        </div>
                        <div class="carousel-item">
                            <img src="/product_sample/img_5.png" class="img-carousel w-100"
                                alt="">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- {{-- TRENDING --}} -->
    <div class="section-trending px-3 px-lg-5 pt-5 pb-4">
        <!-- <x-trending :products="$products_data" /> -->
    </div>

    <!-- {{-- MORE COLLECTION --}} -->
    <div class="section-more px-5 text-center pb-4 pt-md-2 pb-lg-5">
        <nuxt-link to="/more-collection" class="btn border-dark p-2 p-md-3 rounded-0 font-16-gotham-book text-uppercase"><span>MORE COLLECTION</span>
          </nuxt-link>
    </div>

  </div>
</template>

<script>
export default {
  layout: 'store'
}
</script>
