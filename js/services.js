$(document).ready(function(){

   //get the divs
   let divScreenprinting = document.getElementById("screenprinting");
   let divDesign = document.getElementById("design");
   let divImpression = document.getElementById("impression");
   let divPackaging = document.getElementById("packaging");
   let divCounseling = document.getElementById("counseling");
   let divSigns = document.getElementById("signs");
   
    //get print divs
    let divScreenprintingText = document.getElementById("d-screenprinting");
    let divDesignText = document.getElementById("d-design");
    let divImpressionText = document.getElementById("d-impression");
    let divPackagingText = document.getElementById("d-packaging");
    let divCounselingText = document.getElementById("d-counseling");
    let divSignsText = document.getElementById("d-signs");

    //Screenprinting
    divScreenprinting.addEventListener("mouseenter",function(){$(divScreenprinting).css({"background":"url('img/o_print_bkg.jpg') center no-repeat","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","height":"350px"});divScreenprintingText.setAttribute("class","mx-auto my-5 text-center");});
    divScreenprinting.addEventListener("mouseleave",function(){$(divScreenprinting).css({"background":"url('img/print_bkg.jpg') center no-repeat","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","height":"350px"});divScreenprintingText.setAttribute("class","mx-auto d-none my-5 text-center");});
    //Design
    divDesign.addEventListener("mouseenter",function(){$(divDesign).css({"background":"url('img/o_design_bkg.jpg') center no-repeat","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","height":"350px"});divDesignText.setAttribute("class","mx-auto my-5 text-center");});
    divDesign.addEventListener("mouseleave",function(){$(divDesign).css({"background":"url('img/design_bkg.jpg') center no-repeat","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","height":"350px"});divDesignText.setAttribute("class","mx-auto d-none my-5 text-center");});
    //Impression
    divImpression.addEventListener("mouseenter",function(){$(divImpression).css({"background":"url('img/o_impression_bkg.jpg') center no-repeat","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","height":"350px"});divImpressionText.setAttribute("class","mx-auto my-5 text-center");});
    divImpression.addEventListener("mouseleave",function(){$(divImpression).css({"background":"url('img/impression_bkg.jpg') center no-repeat","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","height":"350px"});divImpressionText.setAttribute("class","mx-auto d-none my-5 text-center");});
    //Packaging
    divPackaging.addEventListener("mouseenter",function(){$(divPackaging).css({"background":"url('img/o_package_bkg.jpg') center no-repeat","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","height":"350px"});divPackagingText.setAttribute("class","mx-auto my-5 text-center");});
    divPackaging.addEventListener("mouseleave",function(){$(divPackaging).css({"background":"url('img/package_bkg.jpg') center no-repeat","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","height":"350px"});divPackagingText.setAttribute("class","mx-auto d-none my-5 text-center");});
    //Counseling
    divCounseling.addEventListener("mouseenter",function(){$(divCounseling).css({"background":"url('img/o_meeting_bkg.jpg') center no-repeat","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","height":"350px"});divCounselingText.setAttribute("class","mx-auto my-5 text-center");});
    divCounseling.addEventListener("mouseleave",function(){$(divCounseling).css({"background":"url('img/meeting_bkg.jpg') center no-repeat","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","height":"350px"});divCounselingText.setAttribute("class","mx-auto d-none my-5 text-center");});
    //Signs
    divSigns.addEventListener("mouseenter",function(){$(divSigns).css({"background":"url('img/o_signs_bkg.jpg') center no-repeat","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","height":"350px"});divSignsText.setAttribute("class","mx-auto my-5 text-center");});
    divSigns.addEventListener("mouseleave",function(){$(divSigns).css({"background":"url('img/signs_bkg.jpg') center no-repeat","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","height":"350px"});divSignsText.setAttribute("class","mx-auto d-none my-5 text-center");});


});