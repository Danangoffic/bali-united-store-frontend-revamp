<template>
  <header class="pb-0 mb-0">
    <div class="container-fluid px-3 px-lg-5 pt-0 pt-md-3 pb-0 mb-0">
        <div class="row mb-3">
            <div class="col-12 col-md-4 shadow-bottom">
                <nuxt-link to="/"><img src="/logo_bu_store.png"
                        class="w-35 pt-2 ot-md-0 pb-3" alt=""></nuxt-link>
                <!-- {{-- BREADCRUMB --}} -->
                <div class="d-none d-lg-block">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb px-2 mb-0 mt-3">
                            <li class="breadcrumb-item font-14-gotham-book">
                              <nuxt-link to="/faq"><u>Help</u></nuxt-link>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        <!-- {{-- BREADCRUMB --}} -->
        <div class="d-block d-lg-none">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb px-2 mb-3 mt-4">
                    <li class="breadcrumb-item font-14-gotham-book">
                      <nuxt-link to="/faq"><u>Help</u></nuxt-link>
                    </li>
                  </ol>
            </nav>
        </div>
        <hr class="d-none d-lg-block mt-4 mx-1">
        <div class="input-group">
            <span class="input-group-text search-mobile">
              <img src="/icons/ic_search.png" class="icon-20" alt="">
            </span>
            <input class="form-control nav-search-mobile py-3" type="search" placeholder="Search FAQs"
                aria-label="input example">
        </div>
        <hr class="d-block d-lg-none">
    </div>
  </header>
</template>
