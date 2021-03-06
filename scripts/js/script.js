window.addEventListener("load",()=>{
    var pageName = document.querySelector("body").getAttribute("data-page");
    console.log(pageName);
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector('.'+pageName).classList.add("active");
    /**Page Loader */
    document.querySelector(".page-loader").classList.add("fade-out");
    
    setTimeout(()=>{
        document.querySelector(".page-loader").style.display= "none";
    },100);

    $(function() {
        $('#WAButton').floatingWhatsApp({
          phone: '+994504702996',
          headerTitle: 'Chat with us on WhatsApp!',
          popupMessage: 'Hello, how can we help you?',
          showPopup: true,
          buttonImage: '<img src="https://rawcdn.githack.com/rafaelbotazini/floating-whatsapp/3d18b26d5c7d430a1ab0b664f8ca6b69014aed68/whatsapp.svg" />',
          position: "right"
        });
      });
    //pagination
     $(function () {
        var includes = $('[data-include]')
        $.each(includes, function () {
          var file = 'components/projects/' + $(this).data('include') + '.html'
          $(this).load(file, function () {
              $('body').imagesLoaded().progress(onProgress);
          })
        })
      });

    function onProgress( imgLoad, image ) {
        var $item = $( image.img ).parents('.portfilo-item-thumbnail');
        $item.addClass('loaded');
    }
    //loadz
   

});

$(".row").on("DOMNodeInserted", ".portfilo-item-thumbnail", function(){
    const observer = lozad();
    observer.observe();
})

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click",()=>{
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}
/*ACTIVE SECTION*/
document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("link-item") && e.target.hash !==""){
        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide");
       if(e.target.classList.contains("nav-item")){
        toggleNavbar();
       }
       else{
           hideSection();
           document.body.classList.add("hide-scrolling");
       }
       setTimeout(() => {
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
       }, 500);
    }
});

/*ABOUT*/
const tabsContainer =  document.querySelector(".about-tabs");
if (tabsContainer) {
	aboutSection = document.querySelector(".about-section");
	tabsContainer.addEventListener("click",(e)=>{

	    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
		tabsContainer.querySelector(".active").classList.remove("active");
		e.target.classList.add("active");
		const target = e.target.getAttribute("data-target");
		aboutSection.querySelector(".tab-content.active").classList.remove("active");
		aboutSection.querySelector(target).classList.add("active");
	    };
	});
}
/*PORTFILO*/
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("view-project-btn")){
        togglePortfiloPopup();
        document.querySelector(".portfilo-popup").scrollTo(0,0);
        portfiloItemDetalis(e.target.parentElement);
    };
});
function togglePortfiloPopup(){
    document.querySelector(".portfilo-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
    document.querySelector(".pp-close").addEventListener("click",togglePortfiloPopup);
};


//disariya tiklarken acilir pencereyi gizle
document.addEventListener("click",(e)=>{

    if(e.target.classList.contains("pp-inner")){
        togglePortfiloPopup();
    };
});
function portfiloItemDetalis(portfiloItem){
    document.querySelector(".pp-thumbnail img").src =
    portfiloItem.querySelector(".portfilo-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML =
    portfiloItem.querySelector(".portfilo-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML =
    portfiloItem.querySelector(".protfilo-item-detalis").innerHTML;
};

function search_project() {
    let input = document.getElementById('searchbar').value;
    input=input.toLowerCase();
    let x = document.getElementsByClassName('portfilo-item');
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].classList.add('portfolioItemNonListing')
            x[i].classList.remove('portfolioItemListing')
        }
        else {
            x[i].classList.remove('portfolioItemNonListing')
            x[i].classList.add('portfolioItemListing')
        }
        if (input.length == 0) {
        	if (x[i].classList.contains('portfolioItemListing')) {
        		x[i].classList.remove('portfolioItemListing')
        	}
        	if (x[i].classList.contains('portfolioItemNonListing')) {
        		x[i].classList.remove('portfolioItemNonListing')
        	}
        }
    }
}

const filterBtnsContainer = document.querySelector(".portfilo-filter");
try {
    filterBtnsContainer.addEventListener("click",(e)=>{
        if(e.target.classList.contains("portfilo-filter-btn")&&
        !e.target.classList.contains("active")){
            filterBtnsContainer.querySelector(".active").classList.remove("active");
            e.target.classList.add("active");
            filterItems(e.target);
            e.stopPropagation();
        }
    });
  }
  catch(err) {
    document.getElementById("bir").innerHTML = err.message;
  }

function filterItems(filterBtn){
     if(!filterBtn )return;
    const selectedCategory = filterBtn.getAttribute("data-filter");
    document.querySelectorAll(".portfilo-item").forEach((item)=>{
        const category = item.getAttribute("data-category").split(",");
        document.querySelector(".container").scrollTo(0,0);
        if(category.indexOf(selectedCategory) !== -1){
            item.classList.add("show");
        }else{
            item.classList.remove("show");
        }
    });
}
filterItems(document.querySelector(".portfilo-filter-btn.active"));

//*navbar*/
