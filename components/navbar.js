Vue.component('nav-bar', {
    template: `
    <div class="masthead clearfix">
        <div class="container inner">
            <h3 class="masthead-brand">Ally Sews</h3>
            <nav>
                <ul class="nav masthead-nav">
                    <li class="active"><a href="../pages/index.html">Home</a></li>
                    <li><a href="../pages/store.html">Store</a></li>
                    <li><a href="../pages/blog.html">Blog</a></li>
                </ul>
            </nav>
        </div>
    </div>
`
})

new Vue({
    el:'#app'
})