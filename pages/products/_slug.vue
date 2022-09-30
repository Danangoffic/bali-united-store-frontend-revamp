<template>
  <div class="container-fluid px-0 pb-4 pb-md-5">

    <!-- {{-- BREADCRUMB --}} -->
    <div class="section-breadcrumb px-3 px-md-5 pt-2 pt-md-3 pt-lg-0 pb-0 pb-lg-1">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item font-14-gotham-book text-uppercase">
                  <nuxt-link to="/"><u>Home</u></nuxt-link></li>
                <!-- @if (isset($nested_categories->category)) -->
                    <li class="breadcrumb-item font-14-gotham-book text-uppercase" aria-current="page">
                      <a to="/category/category-slug"><u>Category Name</u></a>
                    </li>
                <!-- @endif -->
                <li class="breadcrumb-item font-14-gotham-book text-uppercase" aria-current="page">
                    <u>Category Name 2</u>
                </li>
                <li class="breadcrumb-item font-14-gotham-book text-uppercase" aria-current="page">
                    <u>Product Name</u>
                </li>
            </ol>
        </nav>
    </div>

    <!-- {{-- CONTENT --}} -->
    <div class="section-content px-3 px-md-5 pt-2 pt-md-3 pt-lg-4 pb-0 pb-lg-1">
        <div class="row">
            <div class="col-12 col-md-7 pe-md-4">
                <div class="row mb-0 mb-xl-5">
                    <div class="d-none d-md-block">
                        <div class="col-12">
                            <!-- @if (count($images) > 0) -->
                                <div class="product-img">
                                    <!-- @foreach ($images as $img) -->
                                        <div><img src="/product_sample/img_5.png" alt=""></div>
                                    <!-- @endforeach -->
                                    <!-- {{-- <div><img src="{{ asset('assets/product_sample/men/img_8.png') }}" alt=""></div>
                            <div><img src="{{ asset('assets/product_sample/men/img_16.png') }}" alt=""></div>
                            <div><img src ="{{asset('assets/product_sample/men/img_18.png') }}" alt=""></div> --}}
                                    {{-- <div><img src="{{ asset('assets/product_sample/img_5.png') }}" alt=""></div>
                            <div><img src="{{ asset('assets/product_sample/img_5.png') }}" alt=""></div>
                            <div><img src="{{ asset('assets/product_sample/img_5.png') }}" alt=""></div>
                            <div><img src ="{{asset('assets/product_sample/img_5.png') }}" alt=""></div> --}} -->
                                </div>
                            <!-- @endif -->
                        </div>
                    </div>
                    <div class="d-block d-md-none px-0">
                        <div class="col-12">
                            <!-- @if (count($images) > 0) -->
                                <div class="product-img-mobile-detail mb-3 px-3">
                                    <!-- @foreach ($images as $img) -->
                                        <div><img src="/product_sample/img_5.png" class="w-100" alt=""></div>
                                    <!-- @endforeach -->
                                </div>
                            <!-- @endif -->

                        </div>
                    </div>
                </div>
                <div class="d-none d-md-block">
                    <div class="row">
                        <div class="col-12">
                            <p class="font-20-gotham-bold">DESCRIPTION</p>
                            <hr class="mt-4">
                            <div class="accordion product" id="accordionExample">
                                <div class="accordion-item product">
                                    <h2 class="accordion-header product" id="headingOne">
                                        <button class="accordion-button product font-18-gotham-bold" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseMaterial"
                                            aria-expanded="true" aria-controls="collapseMaterial">
                                            Material
                                        </button>
                                    </h2>
                                    <div id="collapseMaterial" class="accordion-collapse collapse show"
                                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body py-0">
                                            <p class="font-18-gotham-bold">Product Material</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <nuxt-link to="/faq/return">
                                <p class="font-18-gotham-book my-4">Return Policy <span class="float-end"><img
                                            src="/icons/ic_chevron_right.png" class="icon-20"
                                            alt=""></span></p>
                            </nuxt-link>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-5 mt-2 mt-md-0">
                <form action="">
                    <input type="hidden" name="product_id" value="product_id">
                    <p class="font-48-gotham-bold text-uppercase lh-120 mb-2">Product Name</p>
                    <p class="font-32-gotham-bold mb-2">Rp PriceFormatted</p>
                    <span class="font-14-gotham-book text">Product Description</span>
                    <!-- @if ($variant_color != null) -->
                        <div class="row mb-3">
                            <div class="col-12">
                                <p class="font-16-gotham-bold mb-md-2">COLOR :</p>
                                <div class="d-flex px-2 px-md-3">
                                    <!-- @foreach ($variant_color as $color => $c) -->
                                        <div class="ps-1">
                                            <input @change="selectColor()" type="radio" class="btn-check color"
                                                name="options-color" value="color-value"
                                                id="color-outlined-color-value" autocomplete="off">
                                            <label class="btn color rounded-circle font-16-gotham-bold"
                                                for="color-outlined-color-value">
                                                <span class="dot border" style="background-color: color-value"><br />
                                                    <span class="d-flex justify-content-center font-12-gotham-book text-grey mt-2">color-value</span>
                                                </span>
                                            </label>
                                        </div>
                                    <!-- @endforeach -->
                                </div>
                            </div>
                        </div>
                    <!-- @endif -->
                    <!-- @if ($variant_size != null) -->
                        <div class="row mb-3">
                            <div class="col-12">
                                <p class="font-16-gotham-bold mb-md2">SIZE :</p>
                                <div class="d-flex px-2 px-md-3">
                                    <!-- @foreach ($variant_size as $size => $s) -->
                                        <div class="ps-1">
                                            <input @change="selectSize()" type="radio" class="btn-check size"
                                                name="options-size" value="size-value"
                                                id="size-value-outlined" autocomplete="off">
                                            <label class="btn size rounded font-16-gotham-bold"
                                                for="size-value-outlined">size-value</label>
                                        </div>
                                    <!-- @endforeach -->
                                </div>
                            </div>
                        </div>
                    <!-- @endif -->
                    <div class="row mb-4">
                        <div class="col-12 col-md-4">
                            <p class="font-16-gotham-bold mb-md-2">QTY :</p>
                            <select class="form-select rounded-0 border-dark" name="quantity">
                                <!-- @for ($i = 1; $i <= $product->quantity; $i++) -->
                                    <option value="qty-value">qty-value</option>
                                <!-- @endfor -->
                            </select>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-12">
                            <a href="javascript:void(0)" @click="submit_cart()" type="button"
                                class="btn btn-dark rounded-0 font-16-gotham-bold w-85 py-3 mb-3">ADD TO CART</a>
                            <!-- @if (!$product->is_wishlisted) -->
                                <a href="javascript:void(0)" @click="toggleWishlistProductDetil('id', this)"
                                    type="button" id="btn-to-wishlist" data-wish="0"
                                    class="btn border-dark rounded-0 font-16-gotham-bold w-85 py-3">ADD TO WISHLIST</a>
                            <!-- @else -->
                                <!-- <a href="javascript:void(0);"
                                    onclick="wishlist.toggleWishlistProductDetil({{ $product->id }}, this)"
                                    type="button" id="btn-to-wishlist" data-wish="1"
                                    class="btn border-dark rounded-0 font-16-gotham-bold w-85 py-3">REMOVE FROM
                                    WISHLIST</a> -->
                            <!-- @endif -->

                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="d-block d-md-none bg-gray py-1 mt-3"></div>

    <div class="px-3 px-md-5 pt-4 pb-0 pb-md-1">
        <div class="row">
            <div class="col-12 col-md-7">
                <!-- {{-- MOBILE --}} -->
                <div class="d-block d-md-none">
                    <div class="row">
                        <div class="col-12">
                            <p class="font-20-gotham-bold">DESCRIPTION</p>
                            <hr class="mt-2">
                            <div class="accordion product" id="accordionExample">
                                <div class="accordion-item product">
                                    <h2 class="accordion-header product" id="headingOne">
                                        <button class="accordion-button product font-18-gotham-bold py-0"
                                            type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                            aria-expanded="true" aria-controls="collapseOne">
                                            Material
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body mobile pb-0 pt-3">
                                            <p class="font-18-gotham-bold">Product Material</p>
                                            <!-- {{-- <p class="font-18-gotham-bold mb-1">CLOTH DETAIL :</p>
                                    <p class="font-18-gotham-book mb-0">100% POLYESTER, POLY MICRO</p> --}} -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <a href="/faq/return">
                                <p class="font-18-gotham-book my-2">Return Policy <span class="float-end"><img
                                            src="/icons/ic_chevron_right.png" class="icon-20"
                                            alt=""></span></p>
                            </a>
                            <hr>
                        </div>
                    </div>
                </div>
                <div class="row mb-4 mt-2">
                    <div class="col-12">
                        <p class="font-20-gotham-bold mb-3">RATING</p>
                        <!-- {{-- 5 STARS --}} -->
                        <div class="row mb-2">
                            <div class="col-5 col-md-5 col-lg-auto">
                                <span><img src="/icons/ic_stars_active.png" class="icon-24 mb-1"
                                        alt=""></span>
                                <span><img src="/icons/ic_stars_active.png" class="icon-24 mb-1"
                                        alt=""></span>
                                <span><img src="/icons/ic_stars_active.png" class="icon-24 mb-1"
                                        alt=""></span>
                                <span><img src="/icons/ic_stars_active.png" class="icon-24 mb-1"
                                        alt=""></span>
                                <span><img src="/icons/ic_stars_active.png" class="icon-24 mb-1"
                                        alt=""></span>
                            </div>
                            <div class="col-5 col-md-6 mt-1 pe-0">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-label="Progress Review"
                                        style="width: 34%" aria-valuenow="100" aria-valuemin="0"
                                        aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div class="col-2 col-md-1 text-end">
                                <span class="font-16-gotham-book">(34)</span>
                            </div>
                        </div>
                        <!-- {{-- 4 STARS --}} -->
                        <div class="row mb-2">
                            <div class="col-5 col-md-5 col-lg-auto">
                                <span><img src="/icons/ic_stars_active.png" class="icon-24 mb-1"
                                        alt=""></span>
                                <span><img src="/icons/ic_stars_active.png" class="icon-24 mb-1"
                                        alt=""></span>
                                <span><img src="/icons/ic_stars_active.png" class="icon-24 mb-1"
                                        alt=""></span>
                                <span><img src="/icons/ic_stars_active.png" class="icon-24 mb-1"
                                        alt=""></span>
                                <span><img src="/icons/ic_stars_innactive.png"
                                        class="icon-24 mb-1" alt=""></span>
                            </div>
                            <div class="col-5 col-md-6 mt-1 pe-0">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-label="Progress Review"
                                        style="width: 4%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                            <div class="col-2 col-md-1 text-end">
                                <span class="font-16-gotham-book">(4)</span>
                            </div>
                        </div>
                        <!-- {{-- 3 STARS --}} -->
                        <div class="row mb-2">
                            <div class="col-5 col-md-5 col-lg-auto">
                                <span><img src="/icons/ic_stars_active.png" class="icon-24 mb-1"
                                        alt=""></span>
                                <span><img src="/icons/ic_stars_active.png" class="icon-24 mb-1"
                                        alt=""></span>
                                <span><img src="/icons/ic_stars_active.png" class="icon-24 mb-1"
                                        alt=""></span>
                                <span><img src="/icons/ic_stars_innactive.png"
                                        class="icon-24 mb-1" alt=""></span>
                                <span><img src="/icons/ic_stars_innactive.png"
                                        class="icon-24 mb-1" alt=""></span>
                            </div>
                            <div class="col-5 col-md-6 mt-1 pe-0">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-label="Progress Review"
                                        style="width: 2%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                            <div class="col-2 col-md-1 text-end">
                                <span class="font-16-gotham-book">(2)</span>
                            </div>
                        </div>
                        <!-- {{-- 2 STARS --}} -->
                        <div class="row mb-2">
                            <div class="col-5 col-md-5 col-lg-auto">
                                <span><img src="/icons/ic_stars_active.png" class="icon-24 mb-1"
                                        alt=""></span>
                                <span><img src="/icons/ic_stars_active.png" class="icon-24 mb-1"
                                        alt=""></span>
                                <span><img src="/icons/ic_stars_innactive.png"
                                        class="icon-24 mb-1" alt=""></span>
                                <span><img src="/icons/ic_stars_innactive.png"
                                        class="icon-24 mb-1" alt=""></span>
                                <span><img src="/icons/ic_stars_innactive.png"
                                        class="icon-24 mb-1" alt=""></span>
                            </div>
                            <div class="col-5 col-md-6 mt-1 pe-0">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-label="Progress Review"
                                        aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div class="col-2 col-md-1 text-end">
                                <span class="font-16-gotham-book">(0)</span>
                            </div>
                        </div>
                        <!-- {{-- 1 STARS --}} -->
                        <div class="row mb-2">
                            <div class="col-5 col-md-5 col-lg-auto">
                                <span><img src="/icons/ic_stars_active.png" class="icon-24 mb-1"
                                        alt=""></span>
                                <span><img src="/icons/ic_stars_innactive.png"
                                        class="icon-24 mb-1" alt=""></span>
                                <span><img src="/icons/ic_stars_innactive.png"
                                        class="icon-24 mb-1" alt=""></span>
                                <span><img src="/icons/ic_stars_innactive.png"
                                        class="icon-24 mb-1" alt=""></span>
                                <span><img src="/icons/ic_stars_innactive.png"
                                        class="icon-24 mb-1" alt=""></span>
                            </div>
                            <div class="col-5 col-md-6 mt-1 pe-0">
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-label="Progress Review"
                                        aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div class="col-2 col-md-1 text-end">
                                <span class="font-16-gotham-book">(0)</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <p class="font-20-gotham-bold mb-2">REVIEW (40)</p>
                    </div>
                </div>
                <hr>
                <!-- @for ($i = 0; $i <= 2; $i++) -->
                    <div class="row py-0">
                        <div class="col-12"></div>
                        <div class="row py-2 pe-0">
                            <div class="col-12 d-flex justify-content-between pe-0">
                                <p class="font-16-gotham-bold mb-2 buyer">Napoleon</p>
                                <p class="font-14-gotham-book review text mb-2">12 July 2022 14:00 WIB</p>
                            </div>
                            <div class="col-12">
                                <!-- @for ($j = 0; $j <= 4; $j++) -->
                                    <span><img src="/icons/ic_stars_active.png"
                                            class="icon-24 mb-1" alt=""></span>
                                <!-- @endfor -->
                            </div>
                            <div class="col-12 py-2 pe-0">
                                <p class="font-14-gotham-book text mb-0 review">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nisi morbi in egestas enim congue odio nunc, blandit amet. Netus
                                    habitasse at eget vulputate malesuada condimentum dictum tincidunt. Pretium aenean
                                    quam sollicitudin mattis tincidunt. Fermentum, lacus tempor nam proin nec sit tellus
                                    sed.</p>
                            </div>
                        </div>
                        <hr>
                    </div>
                <!-- @endfor -->

                <!-- {{-- PAGINATION --}} -->
                <nav aria-label="Page navigation">
                    <ul class="pagination orders justify-content-center mb-0">
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true"><img src="/icons/ic_chevron_left.png"
                                        class="icon-20" alt=""></span>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">4</a></li>
                        <li class="page-item"><a class="page-link" href="#">...</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true"><img src="/icons/ic_chevron_right.png"
                                        class="icon-20" alt=""></span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
  .btn-check.color:active+.btn,
  .btn-check.color:checked+.btn,
  .btn-check.color:hover+.btn,
  .btn.color.active,
  .btn.color.show,
  .btn.color:active,
  .btn-check.color:checked+.btn .dot span {
      font-family: "Gotham-Medium";
      color: #000000;
      background-color: #FFFFFF;
      border-color: #FFFFFF;
  }

  .btn-check.size:active+.btn,
  .btn-check.size:checked+.btn,
  .btn.size.active,
  .btn.size.show,
  .btn.size:active {
      background-color: #FFFFFF;
      color: #000000;
      border-color: #000000;
  }

  .accordion.product,
  .accordion-item.product,
  .accordion-header.product {
      --bs-accordion-bg: none !important;
      --bs-accordion-border-color: #FFFFFF !important;
  }

  .accordion-button.product:not(.collapsed),
  .accordion-button.product:focus,
  .accordion-button.product {
      color: #000000 !important;
      background-color: #FFFFFF !important;
      border-color: #FFFFFF !important;
      box-shadow: none !important;
      padding: 1rem 0;
      font-size: 18px;
  }

  .accordion-button.product::after {
      background-image: url('/icons/ic_chevron_down.png') !important;
  }

  .form-select.w-35 {
      font-family: "Gotham-Bold";
      font-size: 16px;
      width: 30%;
      padding: .575rem 2.25rem .575rem .75rem
  }

  .car-gallery {
      width: 77%;
  }

  .car-detail {
      width: 100%;
  }

  .text-center-btn {
      text-align: left !important;
  }

  .btn.w-85 {
      width: 100%;
  }

  .col-2.col-md-1.text-end {
      text-align: left !important;
  }

  .pagination {
      --bs-pagination-border-color: #FFFFFF !important;
  }

  .active>.page-link,
  .page-link.active,
  .page-link:hover,
  .page-link:focus {
      background-color: #FFFFFF;
      color: #000000;
      border-color: #FFFFFF;
      box-shadow: none !important;
  }

  .page-link {
      color: #8F8F90;
      font-size: 14px;
      padding: 0.75rem 0.775rem;
  }

  .product-img .slick-slide img {
      width: 100%;
      transform: scale(0.7) !important;
      transition: 750ms;
      object-fit: cover;
      object-position: 50% 100%;
      height: 500px;
  }

  .product-img .slick-slide.slick-current.slick-active.slick-center img {
      transform: scale(1) !important;
      transition: 750ms;
      margin: 20px 0;
      object-fit: cover;
      object-position: 50% 100%;
      height: 500px;
  }

  .product-img .slick-dots {
      bottom: -3%
  }

  .slick-dots li {
      width: 50px;
      display: none;
  }

  .slick-dots li.slick-active {
      font-family: "Gotham-Medium";
      font-size: 14px;
      display: inline !important;
  }

  .slick-prev:before,
  .slick-next:before {
      display: none;
  }

  .slick-next {
      right: 2.5%;
      top: 45%;
  }

  .slick-prev {
      left: 0.5%;
      top: 45%;
      z-index: 99;
  }

  @media (min-width: 991.99px) and (max-width: 1199.98px) {

      .accordion-button.product:not(.collapsed),
      .accordion-button.product:focus,
      .accordion-button.product {
          font-size: 14px;
      }

      .product-img .slick-slide.slick-current.slick-active.slick-center img {
          transform: scale(1) !important;
          transition: 750ms;
          margin: 10px 0;
      }

      .product-img .slick-dots {
          bottom: -2.5%;
      }

      .product-img .slick-slide img {
          width: 100%;
          transform: scale(0.7) !important;
          transition: 750ms;
          object-fit: cover;
          object-position: 50% 100%;
          height: 400px;
      }

      .product-img .slick-slide.slick-current.slick-active.slick-center img {
          transform: scale(1) !important;
          transition: 750ms;
          margin: 20px 0;
          object-fit: cover;
          object-position: 50% 100%;
          height: 400px;
      }
  }

  @media (min-width: 767.99px) and (max-width: 991.98px) {
      .form-select.w-35 {
          width: 100%;
      }

      .btn.w-85 {
          width: 100%;
      }

      .text-center.btn {
          text-align: center !important;
      }

      .accordion-button.product:not(.collapsed),
      .accordion-button.product:focus,
      .accordion-button.product {
          font-size: 14px;
      }

      .accordion-body.mobile {
          padding: 0;
      }

      .col-2.col-md-1.text-end {
          text-align: right !important;
      }
  }

  @media (min-width: 575.99px) and (max-width: 767.98px) {
      .form-select.w-35 {
          width: 100%;
      }

      .btn.w-85 {
          width: 100%;
      }

      .text-center.btn {
          text-align: center !important;
      }

      .accordion-button.product:not(.collapsed),
      .accordion-button.product:focus,
      .accordion-button.product {
          font-size: 16px;
      }

      .accordion-body.mobile {
          padding: 0;
      }

      .col-2.col-md-1.text-end {
          text-align: right !important;
      }
  }

  @media (max-width: 575.98px) {
      .form-select.w-35 {
          width: 100%;
      }

      .btn.w-85 {
          width: 100%;
      }

      .text-center.btn {
          text-align: center !important;
      }

      .accordion-button.product:not(.collapsed),
      .accordion-button.product:focus,
      .accordion-button.product {
          font-size: 16px;
      }

      .accordion-body.mobile {
          padding: 0;
      }

      .btn.w-35 {
          width: 35% !important;
      }

      .col-2.col-md-1.text-end {
          text-align: right !important;
      }

      .breadcrumb-item.font-14-gotham-book {
          font-size: 10px;
      }
  }
</style>

<!-- <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script src="/assets/js/slick/slick.min.js"></script> -->
<script>
export default {
  layout: 'store',
  head: {
    link:[
    { rel:'stylesheet', href:"/assets/js/slick/slick.css" },
    { rel: 'stylesheet', href: '/assets/js/slick/slick-theme.css' }
    ],
    script: [
      {src:"//code.jquery.com/jquery-1.11.0.min.js", type: "text/javascript"},
      {src :"//code.jquery.com/jquery-migrate-1.2.1.min.js", type: "text/javascript"},
      { src: "/assets/js/slick/slick.min.js", type: "text/javascript"},
    ],
  },
  mounted() {
    $(function () {
      $('.product-img').slick({
          centerMode: true,
          centerPadding: '250px',
          slidesToShow: 1,
          // autoplay: true,
          // autoplaySpeed: 3000,
          nextArrow,
          prevArrow,
          dots: true,
          customPaging: function(slider, i) {
              return (i + 1) + '&nbsp;/&nbsp;' + slider.slideCount;
              // var thumb = $(slider.$slides[i]).data();
              // return '<a class="dot">'+i+' of</a>';
          },
          responsive: [{
                  breakpoint: 1441,
                  settings: {
                      centerPadding: '225px',
                  }
              },
              {
                  breakpoint: 1281,
                  settings: {
                      centerPadding: '175px',
                  }
              },
              {
                  breakpoint: 1201,
                  settings: {
                      centerPadding: '150px',
                  }
              },
              {
                  breakpoint: 1025,
                  settings: {
                      centerPadding: '125px',
                  }
              },
              {
                  breakpoint: 993,
                  settings: {
                      centerPadding: '75px',
                  }
              }
          ]
      });
      $('.product-img-mobile-detail').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow,
          prevArrow,
          fade: true,
          asNavFor: '.product-img-mobile'
      });
      $('.product-img-mobile').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          asNavFor: '.product-img-mobile-detail',
          centerMode: false,
          focusOnSelect: true
      });
    })
  },
}
</script>
