<template>
<form action="" class="login" method="POST">
    <img class="w-50 mb-4" src="/logo_bu_store.png" alt="">

    <p class="font-14-gotham-book text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus elementum cursus sit dui mauris varius. </p>

    <div class="mb-3">
        <input type="email" class="form-control" id="exampleInputEmail1" name="email" required placeholder="Email Address" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
        <input type="password" placeholder="Password" class="form-control" name="password" required id="exampleInputPassword1">
    </div>
    <div class="mb-3">
        <input type="text" name="username" autocomplete="false" placeholder="Username" class="form-control" id="" required>
    </div>
    <!-- {{-- <div class="mb-3">
        <input type="text" placeholder="First Name" class="form-control" id="">
    </div>
    <div class="mb-3">
        <input type="text" placeholder="Last Name" class="form-control" id="">
    </div>
    <div class="mb-3">
        <input type="text" placeholder="Date of Birth" class="form-control" id="" onfocus="(this.type='date')">
    </div>
    <div class="mb-3">
        <div class="btn-group gender w-100" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check gender" name="btnradio" id="btnmale" autocomplete="off">
            <label class="btn me-2 rounded-0 py-3 border-dark" for="btnmale">Male</label>
            <input type="radio" class="btn-check gender" name="btnradio" id="btnfemale" autocomplete="off">
            <label class="btn ms-2 rounded-0 py-3 border-dark" for="btnfemale">Female</label>
        </div>
    </div> --}} -->
    <div class="d-flex justify-content-between mb-3">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
            <label class="font-14-gotham-book text-grey text-start" for="flexCheckDefault">Sign up for emails to get updates from bali united store on productr, offers and your benefits</label>
        </div>
    </div>

    <p class="font-14-gotham-book text-grey px-3">By creating an account, you agree to <nuxt-link to="/faq"><u>Privacy Policy</u></nuxt-link>, and <nuxt-link to="/terms-of-use"><u>Terms of Use.</u></nuxt-link></p>

    <button class="w-100 btn btn-lg border border-dark btn-sign font-16-gotham-bold py-3 py-md-4 rounded-0" type="submit">Sign Up</button>

    <p class="font-14-gotham-book text-grey px-5 mt-3">Already Have an a Account? <nuxt-link to="/login"><u>Sign In</u></nuxt-link>. </p>
</form>
</template>

<script>
export default {
  layout: 'auth'
}
</script>
