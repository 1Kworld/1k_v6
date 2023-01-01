import './Explore.css';

export default function Explore(){
    return(
        <body id="page-top">
                    {/* <!-- Navigation--> */}
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom">
                <div class="container px-4 px-lg-5">
                    
                <a class="navbar-brand" href="/include/globe/theglobe.html">1K Globe</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span
                            class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                        </ul>
                    </div>
                </div>
            </nav>
                {/* <!-- Masthead--> */}
                <header class="masthead">
                    <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                        <div class="d-flex justify-content-center">
                            <div class="text-center">
                                <h1 class="mx-auto my-0 text-uppercase">Contact <br /> 1K World</h1>
                                <h2 class="text-white-50 mx-auto mt-2 mb-5"> <br /> theonekworld@gmail.com <br /> <br />"Fear of Failure"</h2>
                            </div>
                        </div>
                    </div>
                </header>
                {/* <!-- Footer--> */}
                <footer class="footer bg-black small text-center text-white-50"><div class="container px-4 px-lg-5"></div></footer>
        </body>
    );
}