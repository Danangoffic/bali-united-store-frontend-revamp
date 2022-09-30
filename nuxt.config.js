export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'server',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'BALI UNITED STORE',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
            { rel: 'icon', type: 'image/*', href: '/icon.png' },
            { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css', integrity: 'sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT', crossorigin: 'anonymous' },
            { rel: 'stylesheet', href: '/assets/css/style.css' },
            { rel: 'stylesheet', href: '/assets/css/font.css' }
        ],
        script: [
            { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js', integrity: 'sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8', crossorigin: 'anonymous' },
            { src: '//cdn.jsdelivr.net/npm/sweetalert2@11' },
            { src: '/assets/js/button-slider.js', type: 'text/javascript' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        // '@/assets/css/bootstrap.min.css',
        // '@/assets/css/style.css',
        // '@/assets/css/font.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        // '@nuxtjs/tailwindcss',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        // https://auth.nuxtjs.org/
        '@nuxtjs/auth-next'
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: 'https://bustore2.teltics.in',
    },
    auth: {
        strategies: {
            local: {
                token: {
                    property: 'result.token',
                    global: true,
                    // required: true,
                    type: 'Bearer'
                },
                user: {
                    property: 'result',
                    autoFetch: true
                },
                endpoints: {
                    login: { url: '/api/login', method: 'post' },
                    logout: false,
                    user: { url: '/api/profile', method: 'get' }
                }
            }
        }
    },
    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en',
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
}