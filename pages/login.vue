<template>
  <form method="POST" action="#">
        <img class="w-50 mb-4" src="/logo_bu_store.png" alt="">
        <div class="mb-3">
            <input type="email" class="form-control" id="exampleInputEmail1"
                name="email" required placeholder="Email Address" aria-describedby="emailHelp">
        </div>
        <div class="mb-3">
            <input type="password" placeholder="Password" class="form-control"
                name="password" required id="exampleInputPassword1">
        </div>
        <div class="d-flex justify-content-between mb-3">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
                <label class="font-14-gotham-book text-grey" for="flexCheckDefault">Keep me signed in</label>
            </div>
            <nuxt-link to="/forgot-password" class="font-14-gotham-book text-grey mt-1">Forgotten your password?</nuxt-link>
        </div>

        <p class="d-none d-md-block font-14-gotham-book text-grey px-4">By logging in, you agree to <span>
          <nuxt-link to="/faq/privacy-policy"><u>Privacy Policy</u></nuxt-link></span>, and <span><a href="#"><u>Terms of
                        Use</u></a></span>.</p>

        <button class="w-100 btn btn-lg btn-sign font-16-gotham-bold py-3 py-md-4 rounded-0" id="signin"
            type="submit">Sign in</button>

        <p class="d-block d-md-none font-14-gotham-book text-grey px-4 mt-3">By logging in, you agree to <span>
          <nuxt-link to="/faq"><u>Privacy Policy</u></nuxt-link></span>, and <span><a href="#"><u>Terms of
                        Use</u></a></span>.</p>

        <p class="font-14-gotham-book text-grey px-5 mt-3">Don’t have an a account? <span>
          <nuxt-link to="/register"><u>Sign Up.</u></nuxt-link></span> </p>
    </form>
</template>

<script>
export default {
  layout: 'auth'
}
</script>
