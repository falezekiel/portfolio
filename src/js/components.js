//referencias HTML
const divCuboHtml   = document.querySelector('.carousel-inner');
const divFooterHtml = document.querySelector('.page-footer');
const divBtnHead    = document.querySelector ('.btn-group');
export const crearCuboHtml=()=>{
//carousel
const carrouselCubo =

`

  <div class="carousel-item active">
    <img src="./assets/img/cubo-logo.PNG" class="d-block " alt="...">
  </div>
  <div class="carousel-item">
    <img src="./assets/img/cubo-com-man.PNG" class="d-block " alt="...">
  </div>
  <div class="carousel-item">
    <img src="./assets/img/cubo-social-media.PNG" class="d-block " alt="...">
  </div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="visually-hidden">Next</span>
</button>
</div>`

const div = document.createElement ('div');
div.innerHTML = carrouselCubo;

divCuboHtml.append (div);



};

//footer
export const crearCuboFooter = ()=>{

const  footerHtml =
` <!-- Footer Links -->
<div class="container text-center text-md-left">

  <!-- Footer links -->
  <div class="row text-center text-md-left mt-3 pb-3">

   
    <!-- Grid column -->

    <hr class="w-100 clearfix d-md-none">

    <!-- Grid column -->
    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
      <h6 class="text-uppercase mb-4 font-weight-bold">Clientes</h6>
      <p>
        <a href="#!">@contar.la.vida</a>
      </p>
      <p>
        <a href="#!">@fittcalzas</a>
      </p>
      <p>
        <a href="#!">@vabrackets</a>
      </p>
      <p>
        <a href="#!">@coremadental</a>
      </p>
    </div>
    <!-- Grid column -->

    <hr class="w-100 clearfix d-md-none">


    <!-- Grid column -->
    <hr class="w-100 clearfix d-md-none">

    <!-- Grid column -->
    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
      <h6 class="text-uppercase mb-4 font-weight-bold">Contacto</h6>
      <p>
        <i class="fas fa-home mr-3"></i> Mendiolaza,Córdoba, Argentina</p>
      <p>
        <i class="fas fa-envelope mr-3"></i> @cubocomunicacion</p>
      <p>
        <i class="fas fa-phone mr-3"></i> cubomanager@gmail.com</p>
      <p>
        <i class="fas fa-print mr-3"></i> 0351 - 155316571</p>
    </div>
    <!-- Grid column -->

  </div>
  <!-- Footer links -->

  <hr>

  <!-- Grid row -->
  <div class="row d-flex align-items-center">

    <!-- Grid column -->
    <div class="col-md-7 col-lg-8">

      

    </div>
    <!-- Grid column -->

    <!-- Grid column -->
    <div class="col-md-5 col-lg-4 ml-lg-0">

      <!-- Social buttons -->
      <div class="text-center text-md-right">
        <ul class="list-unstyled list-inline">
          <li class="list-inline-item">
            <a class="btn-floating btn-sm rgba-white-slight mx-1">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-sm rgba-white-slight mx-1">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-sm rgba-white-slight mx-1">
              <i class="fab fa-google-plus-g"></i>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-sm rgba-white-slight mx-1">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>

    </div>
    <!-- Grid column -->

  </div>
  <!-- Grid row -->

</div>
<!-- Footer Links -->
`

const div = document.createElement('div');

div.innerHTML=footerHtml;

divFooterHtml.append (div);

}

//botonera

export const crearBtnCuboHead = ()=>{

    const btnHead =

    `<button type="button" class="dark">Nosotras</button>
    <button type="button" class="dark">Servicios</button>
    <button type="button" class="dark">Promos</button>`

    const div = document.createElement ('div');

    div.innerHTML = btnHead;

    divBtnHead.append (div);



}