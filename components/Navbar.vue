<template>

<div>
  <div class="d-none d-lg-block">
    <header class="pb-0 mb-0">
        <nav class="py-1 bg-dark border-bottom">
            <div class="container-fluid px-5 d-flex flex-wrap">
                <ul class="nav me-auto"></ul>
                <ul class="nav text-end">
                    <li class="nav-item">
                        <nuxt-link to="/faq" class="nav-link font-14-gotham-light text-white pe-5">Help</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link to="#" class="nav-link font-14-gotham-light text-white pe-4">Tickets</nuxt-link>
                    </li>
                    <li class="ps-4 nav-item">
                        <div id="not_auth_nav_btn" class="">
                            <nuxt-link to="/login"
                                class="nav-link font-14-gotham-light text-white pe-0">Login</nuxt-link>
                        </div>
                            <div id="auth_nav_btn">
                                <div class="btn-group profile-name">
                                    <button type="button" class="btn text-white" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <span class="display-name">Hi, Danang</span><img
                                            src="/icons/ic_user.png" class="icon-20"
                                            alt="">
                                    </button>
                                    <ul class="dropdown-menu dropdown-profile rounded-0 border-0 shadow-sm mt-2">
                                        <li>
                                          <nuxt-link to="/user"
                                                class="dropdown-item my-profile font-14-gotham-book py-3 px-4"
                                                type="button">My Profile</nuxt-link>
                                          </li>
                                        <li>
                                            <form action="" method="post">
                                                <button type="submit"
                                                    class="dropdown-item my-profile font-14-gotham-book py-3 px-4">
                                                    <img src="/icons/ic_logout.png" class="icon-24"
                                                        alt=""><span class="ms-2">Logout</span>
                                                </button>
                                            </form>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="container-fluid px-5 pb-0 mb-0">
            <div class="d-flex flex-wrap align-items-center justify-content-between py-3 mb-2">
                <nuxt-link to="/"
                    class="d-flex align-items-center col-md-2 mb-2 mb-md-0 text-dark text-decoration-none me-xl-5">
                    <img src="/logo_bu_store.png" class="ic-logo-store me-xl-5" alt="">
                </nuxt-link>
                <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 ms-xl-5">
                    <li class="nav-item dropdown ms-5">
                        <nuxt-link to="/category/men"
                            class="nav-link dropdown-navbar px-2 font-16-gotham-bold text-dark mt-2">MEN</nuxt-link>
                            <NavbarDropdownMen />
                    </li>
                    <li><span class="nav-link px-2 px-xl-3 font-24-gotham-thin text-dark">|</span></li>
                    <li class="nav-item dropdown">
                        <nuxt-link to="/category/women"
                            class="nav-link dropdown-navbar px-2 font-16-gotham-bold text-dark mt-2">WOMEN</nuxt-link>
                            <NavbarDropdownWomen />
                    </li>
                    <li><span class="nav-link px-2 px-xl-3 font-24-gotham-thin text-dark">|</span></li>
                    <li class="nav-item dropdown">
                        <nuxt-link to="/category/kids"
                            class="nav-link px-2 font-16-gotham-bold text-dark mt-2">KIDS</nuxt-link>
                            <NavbarDropdownKid />
                    </li>
                    <li><span class="nav-link px-2 px-xl-3 font-24-gotham-thin text-dark">|</span></li>
                    <li><nuxt-link to="/category/sale"
                            class="nav-link px-2 font-16-gotham-bold text-dark mt-2">SALE</nuxt-link></li>
                </ul>
                <div class="col-md-auto">
                    <div class="d-flex">
                        <div class="input-group pe-lg-2">
                            <span class="input-group-text search"><img src="/icons/ic_search.png"
                                    class="icon-24" alt=""></span>
                            <input class="form-control nav-search" type="button" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
                                value="Search Something Here" aria-label="readonly input example" readonly>
                        </div>
                        <div class="offcanvas offcanvas-end search" tabindex="-1" id="offcanvasRight"
                            aria-labelledby="offcanvasRightLabel">
                            <div class="offcanvas-header pb-0">
                                <div class="offcanvas-title" id="offcanvasRightLabel"></div>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body pt-0">
                                <div class="container-fluid px-4">
                                    <div class="row">
                                        <div class="col-3">
                                            <img src="/logo_bu_store.png" width="50%"
                                                alt="">
                                        </div>
                                        <div class="col-6 my-auto">
                                            <div class="input-group">
                                                <span class="input-group-text search"><img
                                                        src="/icons/ic_search.png" class="icon-20"
                                                        alt=""></span>
                                                <form action="/katalog" method="get">
                                                    <input class="form-control nav-search py-3" name="s"
                                                        type="search" placeholder="Search Something Here"
                                                        aria-label="input example">
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul class="nav col-12 col-md-auto">
                            <li><nuxt-link to="/wishlist"
                                    id="btn-wishlist-auth" class="nav-link px-2 px-xl-3"><img
                                        src="/icons/ic_wishlist_innactive.png"
                                        class="icon-28"></nuxt-link></li>
                            <li class="nav-item dropdown">
                            <!-- <li> -->
                                <li>
                                  <a class="nav-link dropdown-toggle cart ps-1 pe-0" role="button"
                                      data-bs-toggle="dropdown" aria-expanded="false">
                                      <img src="/icons/ic_cart.png" class="icon-28">
                                  </a>
                                  <ul class="dropdown-menu mt-4 border-0 shadow-sm" style="width: 37%" id="header-cart-list-empty">
                                      <li>
                                          <div class="container pt-3 pb-0 px-4" id="cart-product-list">
                                              <div class="row">
                                                  <div class="col-12">
                                                      <p class="text-center">Your Shopping Cart is Empty</p>
                                                  </div>
                                              </div>
                                          </div>
                                      </li>
                                  </ul>
                                </li>
                                        <!-- <ul class="dropdown-menu mt-4 border-0 shadow-sm" style="width: 37%;"
                                            id="header-cart-list">
                                            <li>
                                                <div class="container pt-3 pb-0 px-4">
                                                    <div id="cart-product-list">
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    <ul class="dropdown-menu mt-4 border-0 shadow-sm" style="width: 37%;"
                                        id="header-cart-list-empty">
                                        <li>
                                            <div class="container pt-3 pb-0 px-4">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <p class="text-center">Your Shopping Cart is Empty</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul> -->
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
</div>

<!-- Mobile -->
<div class="d-block d-lg-none">
    <nav class="navbar main-navbar py-1">
        <div class="container-fluid px-3 px-lg-5">
            <div class="d-flex flex-nowrap justify-content-between">
                <nuxt-link to="/index" class="d-flex my-2">
                    <img src="/logo_bu_store.png" class="w-25" alt="">
                </nuxt-link>
                <ul class="nav nav-pills my-auto d-flex flex-nowrap">
                    <li class="nav-item my-auto mx-3">
                        <a href="#" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
                            <img src="/icons/ic_search.png" class="icon-28" alt="">
                        </a>
                        <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom"
                            aria-labelledby="offcanvasBottomLabel">
                            <div class="offcanvas-header pt-4 pb-2">
                                <div class="offcanvas-title w-90" id="offcanvasBottomLabel">
                                    <div class="input-group">
                                        <span class="input-group-text search-mobile"><img
                                                src="/icons/ic_search.png" class="icon-20"
                                                alt=""></span>
                                        <input class="form-control nav-search-mobile py-3" type="text"
                                            placeholder="Search Something Here" aria-label="input example">
                                    </div>
                                </div>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body pt-0">
                                <hr>
                                <ul class="list-unstyled">
                                    <li class="font-16-gotham-bold pb-2">Most Search</li>
                                    <li class="font-14-gotham-book py-2">Jersey AFC</li>
                                    <li class="font-14-gotham-book py-2">Men T-Shirt</li>
                                    <li class="font-14-gotham-book py-2">Girls T-Shirt</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item my-auto mx-3">
                        <nuxt-link to="/cart"><img src="/icons/ic_cart.png"
                                class="icon-28" alt=""></nuxt-link>
                    </li>
                    <li class="nav-item">
                        <button class="navbar-toggler ms-2 pe-0" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvas" aria-controls="offcanvas">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas"
                            aria-labelledby="offcanvasScrollingLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <ul class="navbar-nav justify-content-end">
                                  <li class="nav-item py-1">
                                            <nuxt-link class="nav-link font-16-gotham-bold text-dark position-relative"
                                                aria-current="page" to="/user">
                                                <img src="/profile-picture.png"
                                                    class="rounded-circle icon-56 me-3"
                                                    alt="">Danang
                                                <span class="position-absolute top-50 end-0 translate-middle-y"><img
                                                        src="/icons/ic_chevron_right.png"
                                                        class="icon-24" alt=""></span>
                                            </nuxt-link>
                                        </li>
                                    <li class="nav-item py-1">
                                        <a class="nav-link font-16-gotham-book text-dark" data-bs-toggle="offcanvas"
                                            href="#subMenuMen" aria-controls="offcanvasRight">Men
                                            <span class="float-end"><img
                                                    src="/icons/ic_chevron_right.png"
                                                    class="icon-24" alt=""></span>
                                        </a>
                                    </li>
                                    <li class="nav-item py-1">
                                        <nuxt-link class="nav-link font-16-gotham-book text-dark" data-bs-toggle="offcanvas"
                                            to="/category/women" aria-controls="offcanvasRight">Woman
                                            <span class="float-end"><img
                                                    src="/icons/ic_chevron_right.png"
                                                    class="icon-24" alt=""></span>
                                        </nuxt-link>
                                    </li>
                                    <li class="nav-item py-1">
                                        <nuxt-link class="nav-link font-16-gotham-book text-dark" data-bs-toggle="offcanvas"
                                            to="/category/kids" aria-controls="offcanvasRight">Kids
                                            <span class="float-end"><img
                                                    src="/icons/ic_chevron_right.png"
                                                    class="icon-24" alt=""></span>
                                        </nuxt-link>
                                    </li>
                                    <li class="nav-item py-1">
                                        <nuxt-link class="nav-link font-16-gotham-book text-dark" aria-current="page"
                                            to="/category/sale">Sale
                                        </nuxt-link>
                                    </li>
                                    <li class="nav-item py-1">
                                        <nuxt-link class="nav-link font-16-gotham-book text-dark" aria-current="page"
                                            to="/wishlist">
                                            <span><img src="/icons/ic_wishlist_innactive.png"
                                                    class="icon-24 me-2 mb-1" alt=""></span>Favorite
                                        </nuxt-link>
                                    </li>
                                    <li class="nav-item py-1">
                                        <nuxt-link class="nav-link font-16-gotham-book text-dark" aria-current="page"
                                            to="/user/order">
                                            <span><img src="/icons/ic_truck.png"
                                                    class="icon-24 me-2 mb-1" alt=""></span>Orders
                                        </nuxt-link>
                                    </li>
                                    <li class="nav-item py-1">
                                        <nuxt-link class="nav-link font-16-gotham-book text-dark" aria-current="page"
                                            to="/cart">
                                            <span><img src="/icons/ic_cart.png"
                                                    class="icon-24 me-2 mb-1" alt=""></span>Cart
                                        </nuxt-link>
                                    </li>
                                    <li class="nav-item py-1">
                                        <nuxt-link class="nav-link font-16-gotham-book text-dark" aria-current="page"
                                            to="/tickets">Tickets
                                        </nuxt-link>
                                    </li>
                                    <li class="nav-item py-1">
                                        <nuxt-link class="nav-link font-16-gotham-book text-dark" aria-current="page"
                                            to="/faq">Help
                                        </nuxt-link>
                                    </li>
                                    <li class="nav-item py-1">
                                            <form action="/logout" method="post">
                                                <button type="submit" class="nav-link font-16-gotham-book text-dark"
                                                    aria-current="page">
                                                    <img src="/icons/ic_logout.png"
                                                        class="icon-24 mb-1" alt=""><span
                                                        class="ms-2">Logout</span>
                                                </button>
                                            </form>
                                        </li>
                                        <li class="nav-item mt-4">
                                            <div class="font-16-gotham-book">Become a member to get best offering. <nuxt-link
                                                    to="/register"><b><u>Learn more</u></b></nuxt-link></div>
                                        </li>
                                        <li class="nav-item mt-5">
                                            <div class="row">
                                                <div class="col-6">
                                                    <nuxt-link to="/register" type="button"
                                                        class="btn btn-dark rounded-0 font-14-gotham-bold w-100 py-3">SIGN
                                                        UP</nuxt-link>
                                                </div>
                                                <div class="col-6">
                                                    <nuxt-link to="/login" type="button"
                                                        class="btn border-dark rounded-0 font-14-gotham-bold w-100 py-3">SIGN
                                                        IN</nuxt-link>
                                                </div>
                                            </div>
                                        </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>

<!-- SUBMENU MAN -->
<!-- {{-- <div class="offcanvas offcanvas-end offcanvas-men show" tabindex="-1" id="subMenuMen" aria-labelledby="offcanvasRightLabel" aria-modal="true" role="dialog"> --}} -->
<div class="offcanvas offcanvas-end offcanvas-men" tabindex="-1" id="subMenuMen"
    aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end">
            <li class="nav-item py-1">
                <a href="#offcanvas" data-bs-toggle="offcanvas"><img
                        src="/icons/ic_chevron_left.png" class="icon-28 mb-3"
                        alt=""></a>
            </li>
            <li class="nav-item py-1">
                <nuxt-link to="/category/men">
                    <p class="nav-link font-16-gotham-bold text-dark mb-0">Men</p>
                </nuxt-link>
            </li>
            <li class="nav-item py-1">
                <nuxt-link to="/category/new" data-bs-toggle="offcanvas" class="nav-link font-16-gotham-book text-dark">New
                    <span class="float-end"><img src="/icons/ic_chevron_right.png"
                            class="icon-24" alt=""></span>
                </nuxt-link>
            </li>
            <li class="nav-item py-1">
                <nuxt-link to="/category/clothing" data-bs-toggle="offcanvas"
                    class="nav-link font-16-gotham-book text-dark">Clothing
                    <span class="float-end"><img src="/icons/ic_chevron_right.png"
                            class="icon-24" alt=""></span>
                </nuxt-link>
            </li>
            <li class="nav-item py-1">
                <nuxt-link to="/category/sport" data-bs-toggle="offcanvas"
                    class="nav-link font-16-gotham-book text-dark">Sports Collection
                    <span class="float-end"><img src="/icons/ic_chevron_right.png"
                            class="icon-24" alt=""></span>
                </nuxt-link>
            </li>
        </ul>
    </div>
</div>

<!-- {{-- SUB SUBMENU NEW --}} -->
<div class="offcanvas offcanvas-end offcanvas-new" tabindex="-1" id="subMenuClothing"
    aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end">
            <li class="nav-item py-1">
                <a href="#subMenuMen" data-bs-toggle="offcanvas"><img
                        src="/icons/ic_chevron_left.png" class="icon-28 mb-3"
                        alt=""></a>
            </li>
            <li class="nav-item py-1">
                <p class="nav-link font-16-gotham-bold text-dark mb-0">Clothing</p>
            </li>
            <li class="nav-item py-1">
                <nuxt-link to="/katalog" class="nav-link font-16-gotham-book text-dark">All Clothing</nuxt-link>
            </li>
            <li class="nav-item py-1">
                <a class="nav-link font-16-gotham-book text-dark">Top and T-Shirt</a>
            </li>
            <li class="nav-item py-1">
                <a class="nav-link font-16-gotham-book text-dark">Jersey and Kits</a>
            </li>
            <li class="nav-item py-1">
                <a class="nav-link font-16-gotham-book text-dark">Hoodies and Sweetshirts</a>
            </li>
            <li class="nav-item py-1">
                <a class="nav-link font-16-gotham-book text-dark">Shorts</a>
            </li>
            <li class="nav-item py-1">
                <a class="nav-link font-16-gotham-book text-dark">Caps</a>
            </li>
            <li class="nav-item py-1">
                <a class="nav-link font-16-gotham-book text-dark">Socks</a>
            </li>
        </ul>
    </div>
</div>

<!-- {{-- SUB SUBMENU CLOTHING --}} -->
<div class="offcanvas offcanvas-end offcanvas-new" tabindex="-1" id="subMenuNew"
    aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end">
            <li class="nav-item py-1">
                <a href="#subMenuMen" data-bs-toggle="offcanvas"><img
                        src="/icons/ic_chevron_left.png" class="icon-28 mb-3"
                        alt=""></a>
            </li>
            <li class="nav-item py-1">
                <p class="nav-link font-16-gotham-bold text-dark mb-0">New</p>
            </li>
            <li class="nav-item py-1">
                <a class="nav-link font-16-gotham-book text-dark">New Release</a>
            </li>
            <li class="nav-item py-1">
                <a class="nav-link font-16-gotham-book text-dark">AFC 2022</a>
            </li>
            <li class="nav-item py-1">
                <a class="nav-link font-16-gotham-book text-dark">Baliverse Collection</a>
            </li>
        </ul>
    </div>
</div>

<!-- {{-- SUB SUBMENU CLOTHING --}} -->
<div class="offcanvas offcanvas-end offcanvas-new" tabindex="-1" id="subMenuSports"
    aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end">
            <li class="nav-item py-1">
                <a href="#subMenuMen" data-bs-toggle="offcanvas"><img
                        src="/icons/ic_chevron_left.png" class="icon-28 mb-3"
                        alt=""></a>
            </li>
            <li class="nav-item py-1">
                <p class="nav-link font-16-gotham-bold text-dark mb-0">Sports Collection</p>
            </li>
            <li class="nav-item py-1">
                <a class="nav-link font-16-gotham-book text-dark">Running</a>
            </li>
            <li class="nav-item py-1">
                <a class="nav-link font-16-gotham-book text-dark">Footbal</a>
            </li>
            <li class="nav-item py-1">
                <a class="nav-link font-16-gotham-book text-dark">Basketball</a>
            </li>
            <li class="nav-item py-1">
                <a class="nav-link font-16-gotham-book text-dark">E-Sports</a>
            </li>
            <li class="nav-item py-1">
                <a class="nav-link font-16-gotham-book text-dark">Gym and Training</a>
            </li>
        </ul>
    </div>
</div>
</div>

</template>
