<template>
  <main class="content">
    <div class="section-breadcrumb px-2 px-md-5 pt-2 pt-md-4 pb-0 pb-lg-5">
        <div class="row px-2">
            <div class="col-12">
                <p class="font-32-gotham-black">FAQs</p>
                <hr class="mb-4">
                <div class="row mb-3">
                    <div class="col-12">
                        <p class="font-14-gotham-book mb-4">Can I exchange my online purchases ?</p>
                        <p class="font-14-gotham-book mb-4">How can I return an item purchased from the online
                            store?</p>
                        <p class="font-14-gotham-book mb-4">Bulk Purchase Information</p>
                        <p class="font-14-gotham-book mb-4">Can I cancel my order?</p>
                        <p class="font-14-gotham-book mb-4">Can I change size for my online store?</p>
                        <p class="font-14-gotham-book mb-4">I already transferred my order but why the status
                            still “incomplete”</p>
                        <p class="font-14-gotham-book mb-4">Wiil I receive a Click and Collect notification
                            email?</p>
                        <p class="font-14-gotham-book mb-4">When do I received my refund once I have returned my
                            online order to warehouse?</p>
                    </div>
                </div>
                <p class="font-32-gotham-black">CATEGORY</p>
                <hr class="mb-md-4">
                <div class="row">
                    <div class="col-12">
                        <div class="accordion faq mb-3 mb-lg-0" id="accordionFAQ">
                            <div class="accordion-item faq">
                                <h2 class="accordion-header faq" id="headingOne">
                                    <button class="accordion-button collapsed faq font-14-gotham-book"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseFAQ"
                                        aria-expanded="false" aria-controls="collapseFAQ">
                                        Online Purchase & Return Policy
                                    </button>
                                </h2>
                                <div id="collapseFAQ" class="accordion-collapse collapse"
                                    aria-labelledby="headingOne" data-bs-parent="#accordionFAQ">
                                    <div class="accordion-body px-0 border-top border-bottom pt-2 pb-0">
                                        <ul class="list-group list-group-flush list-faq py-2">
                                            <li class="list-group-item ps-0 mb-2">
                                              <nuxt-link to="/faq/delivery">Delivery</nuxt-link>
                                            </li>
                                            <li class="list-group-item ps-0 mb-2"><a href="/faq/return">Return /
                                                    Exchange</a></li>
                                            <li class="list-group-item ps-0 mb-2"><a
                                                    href="/faq/purchased">Purchased Item</a></li>
                                            <li class="list-group-item ps-0 mb-2"><a
                                                    href="/faq/payment">Payment</a></li>
                                            <li class="list-group-item ps-0 mb-2"><a
                                                    href="/faq/orderstatus">Order Status</a></li>
                                            <li class="list-group-item ps-0 mb-2"><a
                                                    href="/faq/membership">Membership / Account</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item faq">
                                <h2 class="accordion-header faq" id="headingOne">
                                    <button class="accordion-button collapsed faq font-14-gotham-book"
                                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseFAQ2"
                                        aria-expanded="false" aria-controls="collapseFAQ2">
                                        Stores
                                    </button>
                                </h2>
                                <div id="collapseFAQ2" class="accordion-collapse collapse"
                                    aria-labelledby="headingOne" data-bs-parent="#accordionFAQ">
                                    <div class="accordion-body px-0 border-top border-bottom pt-2 pb-0">
                                        <ul class="list-group list-group-flush list-faq py-2">
                                            <li class="list-group-item ps-0 mb-2"><a href="/faq/store">Store
                                                    Location</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item faq">
                                <h2 class="accordion-header faq" id="headingOne">
                                    <button class="accordion-button collapsed faq font-14-gotham-book"
                                        type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFAQ3" aria-expanded="false"
                                        aria-controls="collapseFAQ3">
                                        Other
                                    </button>
                                </h2>
                                <div id="collapseFAQ3" class="accordion-collapse collapse"
                                    aria-labelledby="headingOne" data-bs-parent="#accordionFAQ">
                                    <div class="accordion-body px-0 border-top border-bottom pt-2 pb-0">
                                        <ul class="list-group list-group-flush list-faq py-2">
                                            <li class="list-group-item ps-0 mb-2"><a
                                                    href="/faq/privacy-policy">Privacy Policy</a></li>
                                            <li class="list-group-item ps-0 mb-2"><a
                                                    href="/faq/terms-condition">Terms & Condition</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
</template>

<script>
export default {
  layout: 'faq'
}
</script>
