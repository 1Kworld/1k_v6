import './DMK.css';

export default function DMK(){
    return(
        <body>
            {/* <!-- Header--> */}
            <header class="bg-dark py-5">
                <div class="container px-4 px-lg-5 my-5">
                    <div class="text-center text-white">
                        <h1 class="display-4 fw-bolder">Work of DMK</h1>
                        <p class="lead fw-normal text-white-50 mb-0">1K </p>
                    </div>
                </div>
            </header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom">
                <div class="container px-4 px-lg-5">

                    <a class="navbar-brand" href="/include/globe/theglobe.html">1K Globe</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <!-- Section--> */}
            <section class="py-5">
                <div class="container px-4 px-lg-5 mt-5">
                    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        <div class="col mb-5">
                            <div class="card h-100">
                                {/* <!-- Product image--> */}
                                <img class="card-img-top" src="/assets/FP/00.png"   alt="..." />
                                {/* <!-- Product details--> */}
                                <div class="card-body p-4">
                                    <div class="text-center">
                                        {/* <!-- Product name--> */}
                                        <h5 class="fw-bolder">F0RGOTTEN PATH</h5>
                                        {/* <!-- Product price--> */}
                                        Python Program 
                                    </div>
                                </div>
                                {/* <!-- Product actions--> */}
                                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="/include/DMK/post/FP_gallery.html" target="_blank">View</a></div>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-5">
                            <div class="card h-100">
                                {/* <!-- Product image--> */}
                                <img class="card-img-top" src="/assets/BNZ/00.jpeg" alt="..." />
                                {/* <!-- Product details--> */}
                                <div class="card-body p-4">
                                    <div class="text-center">
                                        {/* <!-- Product name--> */}
                                        <h5 class="fw-bolder">BNZ</h5>
                                        {/* <!-- Product price--> */}
                                        Photography
                                    </div>
                                </div>
                                {/* <!-- Product actions--> */}
                                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="/include/DMK/post/BNZ_gallery.html">View</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </body>
    );
}