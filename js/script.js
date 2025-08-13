const menuIcon=document.getElementById("menu-icon"),navMenu=document.getElementById("nav-menu");menuIcon.addEventListener("click",()=>{navMenu.classList.toggle("active")}),document.querySelectorAll(".nav-link").forEach(e=>{e.addEventListener("click",()=>{navMenu.classList.remove("active")})});let currentIndex=0;const slides=document.querySelectorAll(".slide"),slider=document.getElementById("slider");function showSlide(e){currentIndex=(e+slides.length)%slides.length,slider.style.transform=`translateX(-${100*currentIndex}%)`}function nextSlide(){showSlide(currentIndex+1)}function prevSlide(){showSlide(currentIndex-1)}setInterval(()=>{nextSlide()},5e3);

const reviewSliderTrack=document.getElementById("reviewSliderTrack"),reviewSliderContainer=document.getElementById("reviewSliderContainer"),allReviewBoxes=document.querySelectorAll(".review-box");let currentReviewIndex=0;const totalReviews=allReviewBoxes.length;function updateReviewSlide(){reviewSliderTrack.style.transform=`translateX(-${100*currentReviewIndex}%)`}function showNextReview(){currentReviewIndex=(currentReviewIndex+1)%totalReviews,updateReviewSlide()}function showPrevReview(){currentReviewIndex=(currentReviewIndex-1+totalReviews)%totalReviews,updateReviewSlide()}let touchStartX=0;reviewSliderContainer.addEventListener("touchstart",e=>{touchStartX=e.touches[0].clientX}),reviewSliderContainer.addEventListener("touchend",e=>{let t=e.changedTouches[0].clientX;touchStartX-t>50?showNextReview():t-touchStartX>50&&showPrevReview()});
    // hindi
function googleTranslateElementInit() {
      new google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
      );
    }
    function translatePage(language) {
      var selectField = document.querySelector("select.goog-te-combo");
      if (selectField) {
        selectField.value = language;
        selectField.dispatchEvent(new Event("change"));
      }
    }