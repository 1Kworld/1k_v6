import './Arkade.css';

export default function Arkade(){
    return(
        <body>
                {/* <!-- Navigation--> */}
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
                {/* <!-- Page Content--> */}
                <section>
                    <div class="container px-4 px-lg-5">
                        <div class="row gx-4 gx-lg-5">
                            <div class="col-lg-6">


                                <h1 class="mt-5">The Arkade</h1>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </section>
            </body>
    );
}