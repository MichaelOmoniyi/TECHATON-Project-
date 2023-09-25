// Script to display nav links
let hamburger = document.querySelector(".hamburger")
let OpenNavLinks = () => {
    // document.querySelector('#openNav').style.display = "None";
    document.querySelector('.navDisplay').style.width = '100%';
    document.querySelector('.body').style.height = '100vh';
    // document.querySelector('#closeNav').style.display = 'block';
    document.querySelector('.body').style.overflow = 'hidden';
}
let CloseNavLinks = () => {
    // document.querySelector('#openNav').style.display = 'block';
    // document.querySelector('#closeNav').style.display = 'None';
    document.querySelector('.navDisplay').style.width = '0%';
    document.querySelector('.body').style.height = '100%';
    document.querySelector('.navDisplay').style.overflow = 'hidden';
    document.querySelector('.body').style.overflow = 'auto';
}
let CloseNavDisplay = () => {
    document.querySelector('.navDisplay').style.width = '0%';
    document.querySelector('.body').style.height = '100%';
    document.querySelector('.navDisplay').style.overflow = 'hidden';
    document.querySelector('.body').style.overflow = 'auto';
}


// Below are variable containing screen height and width
const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;


// Below is the JS code for the navbar animation, i.e. the width and margin change
let navBar = document.querySelector('.navBar');
let navJs = document.querySelector('.navJs');
let lastScrollTop = window.scrollY || document.documentElement.scrollTop;
window.addEventListener("scroll", () => {
    if (window.scrollY <(screenHeight - 20))
    {
        navBar.style.width = "90%";
        navBar.style.marginInline = "5%";
        navBar.style.backgroundColor = "#f2f2f2";
    }
    if (window.scrollY >(screenHeight - 20))
    {
        navBar.style.width = "100%";
        navBar.style.marginInline = '0';
        
    }
    if (window.scrollY >(screenHeight + 50))
    {
        // Code to hide navbar
        const scrllTopPosition = window.scrollY || document.documentElement.scrollTop;
        if (scrllTopPosition > lastScrollTop)
        {
            setTimeout(() => {
                navBar.style.transform = "translateY(-100px)";
            }, 500)
        }
        else if (scrllTopPosition < lastScrollTop)
        {
            setTimeout(() => {
                navBar.style.transform = "translateY(0px)";
            }, 500)
        }
        lastScrollTop = scrllTopPosition <= 0 ? 0 : scrllTopPosition;
    }
})
window.addEventListener("load", () => {
    navBar.style.backgroundColor = "#f2f2f2";
})


// This is the code for the links in the mobile and tablet navbar drop-down
let goToAbout = document.querySelector('.go-to-about');
let goToProducts = document.querySelector('.go-to-products');
let goToTestmonial = document.querySelector('.go-to-testmonial');
let goToContact = document.querySelector('.go-to-contact');
let aboutBookmark = document.querySelector('.about');
let productsBookmark = document.querySelector('.products');
let testmonialBookmark = document.querySelector('.testmonials');
let contactBookmark = document.querySelector('.footer');
let screenMargin;
let marginAdded = false;

if (screenWidth < 1024)
{
    screenMargin = "120px"
}

// console.log("Margin Added:", marginAdded, "px");
// console.log("Margin to be Added on click:", screenMargin);

// Bring the element into view and adds margin
goToAbout.addEventListener("click", () => {
    aboutBookmark.scrollIntoView({behavior: "smooth", block: 'start'});
    aboutBookmark.style.marginTop = screenMargin;
    marginAdded = true;
})

// Remove the added margin when scrolling stops
let scrollTimeout;

window.addEventListener("scroll", () => {
    // Clear any previous timeout to ensure the margin removal happens once
    clearTimeout(scrollTimeout);

    // Add a new timeout to remove the margin after a brief delay (e.g., 300 milliseconds)
    scrollTimeout = setTimeout(() => {
        if (marginAdded == true) {
            aboutBookmark.style.marginTop = "0px";
            // productsBookmark.style.marginTop = "0px";
            testmonialBookmark.style.marginTop = "0px";
            contactBookmark.style.marginTop = "0px";
            marginAdded = false;
        }
    }, 3000); // Adjust the delay as needed
});

goToProducts.addEventListener("click", () => {
    document.querySelector('.navDisplay').style.display = 'none';
    document.querySelector('.body').style.height = '100%';
    document.querySelector('.navDisplay').style.overflow = 'hidden';
    document.querySelector('.body').style.overflow = 'auto';
    productsBookmark.scrollIntoView({behavior: "smooth", block: 'start'});
    productsBookmark.style.marginTop = screenMargin;
    marginAdded = true;
})
goToTestmonial.addEventListener("click", () => {
    testmonialBookmark.scrollIntoView();
    testmonialBookmark.style.marginTop = screenMargin;
})
goToContact.addEventListener("click", () => {
    contactBookmark.scrollIntoView();
    contactBookmark.style.marginTop = screenMargin;
})

let test = () => {
    let paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].innerText = 'Omons, Hello World!';
    }
  }
  

// This is the code for the links in the desktop navbar
let lGoToAbout = document.querySelector('.l-go-to-about');
let lGoToProducts = document.querySelector('.l-go-to-product');
let lGoToTestmonial = document.querySelector('.l-go-to-testmonial');
let lGoToContact = document.querySelector('.l-go-to-contact');

if (screenWidth > 1023)
{
    lGoToAbout.addEventListener("click", () => {
        console.log("About link clicked")
        aboutBookmark.scrollIntoView({behavior: "smooth", block: 'start'});
    })
}