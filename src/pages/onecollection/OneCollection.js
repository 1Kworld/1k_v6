import './OneCollection.css';

export default function OneCollection(){
    return(
        <body>
            {/* <!-- Header--> */}
            <header class="bg-dark py-5">
                <div class="container px-4 px-lg-5 my-5">
                    <div class="text-center text-white">
                        <h1 class="display-4 fw-bolder">1COLLECTION</h1>
                        <p class="lead fw-normal text-white-50 mb-0">1K One of A Kind Pieces</p>
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
                <div class="container px-4 px-lg-0 mt-0">
                    <div class="row gx-4 gx-lg-1 row-cols-2 row-cols-md-3 row-cols-xl-5 justify-content-center">
                        <div class="col mb-5">
                                <img class="card-img-top" src="https://dummyimage.com/450x600/dee2e6/6c757d.jpg" alt="..." />
                        </div>
                        
                        <div class="col mb-5">
                            <img class="card-img-top" src="https://dummyimage.com/450x600/dee2e6/6c757d.jpg" alt="..." />

                        </div>
                        <div class="col mb-5">
                            <img class="card-img-top" src="https://dummyimage.com/450x600/dee2e6/6c757d.jpg" alt="..." />
                        </div>
                        <div class="col mb-5">
                            <img class="card-img-top" src="https://dummyimage.com/450x600/dee2e6/6c757d.jpg" alt="..." />
                    </div>
                    <div class="col mb-5">
                        <img class="card-img-top" src="https://dummyimage.com/450x600/dee2e6/6c757d.jpg" alt="..." />
                    </div>
                </div>
            </div>    
        </section>
    </body>
    );
}