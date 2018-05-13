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

    //get dummy click me
    let divScreenprintingClick = document.getElementById("dx-screenprinting");
    let divDesignClick = document.getElementById("dx-design");
    let divImpressionClick = document.getElementById("dx-impression");
    let divPackagingClick = document.getElementById("dx-packaging");
    let divCounselingClick = document.getElementById("dx-counseling");
    let divSignsClick = document.getElementById("dx-signs");

    //get the service rows
    let serviceRow = document.getElementById("service-row");

    //hidden rows
    let screenprintingRowHidden = document.getElementById("screenprinting-row-hidden");
    let designRowHidden = document.getElementById("design-row-hidden");
    let impressionRowHidden = document.getElementById("impression-row-hidden");
    let packagingRowHidden = document.getElementById("packaging-row-hidden");
    let counselingRowHidden = document.getElementById("counseling-row-hidden");
    let signsRowHidden = document.getElementById("signs-row-hidden");

    //get enter buttons
    let btnScreenprintingEnter = document.getElementById("btn-screenprinting-enter");
    let btnDesignEnter = document.getElementById("btn-design-enter");
    let btnImpressionEnter = document.getElementById("btn-impression-enter");
    let btnPackagingEnter = document.getElementById("btn-packaging-enter");
    let btnCounselingEnter = document.getElementById("btn-counseling-enter");
    let btnSignsEnter = document.getElementById("btn-signs-enter");

    //get the back buttons
    let btnScreenprintingBack = document.getElementById("btn-screenprinting-back");
    let btnDesignBack = document.getElementById("btn-design-back");
    let btnImpressionBack = document.getElementById("btn-impression-back");
    let btnPackagingBack = document.getElementById("btn-packaging-back");
    let btnCounselingBack = document.getElementById("btn-counseling-back");
    let btnSignsBack = document.getElementById("btn-signs-back");


    //Screenprinting
    divScreenprinting.addEventListener("mouseenter",function(){$(divScreenprinting).css({"background":"url('img/o_print_bkg.jpg') center no-repeat","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","height":"350px"});divScreenprintingText.setAttribute("class","mx-auto my-5 text-center");divScreenprintingClick.setAttribute("class","col-sm-4 d-none");});
    divScreenprinting.addEventListener("mouseleave",function(){$(divScreenprinting).css({"background":"url('img/print_bkg.jpg') center no-repeat","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","height":"350px"});divScreenprintingText.setAttribute("class","mx-auto d-none my-5 text-center");divScreenprintingClick.setAttribute("class","col-sm-4 d-sm-none");});
    //Design
    divDesign.addEventListener("mouseenter",function(){$(divDesign).css({"background":"url('img/o_design_bkg.jpg') center no-repeat","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","height":"350px"});divDesignText.setAttribute("class","mx-auto my-5 text-center");divDesignClick.setAttribute("class","col-sm-4 d-none");});
    divDesign.addEventListener("mouseleave",function(){$(divDesign).css({"background":"url('img/design_bkg.jpg') center no-repeat","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","height":"350px"});divDesignText.setAttribute("class","mx-auto d-none my-5 text-center");divDesignClick.setAttribute("class","col-sm-4 d-sm-none");});
    //Impression
    divImpression.addEventListener("mouseenter",function(){$(divImpression).css({"background":"url('img/o_impression_bkg.jpg') center no-repeat","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","height":"350px"});divImpressionText.setAttribute("class","mx-auto my-5 text-center");divImpressionClick.setAttribute("class","col-sm-4 d-none");});
    divImpression.addEventListener("mouseleave",function(){$(divImpression).css({"background":"url('img/impression_bkg.jpg') center no-repeat","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","height":"350px"});divImpressionText.setAttribute("class","mx-auto d-none my-5 text-center");divImpressionClick.setAttribute("class","col-sm-4 d-sm-none");});
    //Packaging
    divPackaging.addEventListener("mouseenter",function(){$(divPackaging).css({"background":"url('img/o_package_bkg.jpg') center no-repeat","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","height":"350px"});divPackagingText.setAttribute("class","mx-auto my-5 text-center");divPackagingClick.setAttribute("class","col-sm-4 d-none");});
    divPackaging.addEventListener("mouseleave",function(){$(divPackaging).css({"background":"url('img/package_bkg.jpg') center no-repeat","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","height":"350px"});divPackagingText.setAttribute("class","mx-auto d-none my-5 text-center");divPackagingClick.setAttribute("class","col-sm-4 d-sm-none");});
    //Counseling
    divCounseling.addEventListener("mouseenter",function(){$(divCounseling).css({"background":"url('img/o_meeting_bkg.jpg') center no-repeat","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","height":"350px"});divCounselingText.setAttribute("class","mx-auto my-5 text-center");divCounselingClick.setAttribute("class","col-sm-4 d-none");});
    divCounseling.addEventListener("mouseleave",function(){$(divCounseling).css({"background":"url('img/meeting_bkg.jpg') center no-repeat","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","height":"350px"});divCounselingText.setAttribute("class","mx-auto d-none my-5 text-center");divCounselingClick.setAttribute("class","col-sm-4 d-sm-none");});
    //Signs
    divSigns.addEventListener("mouseenter",function(){$(divSigns).css({"background":"url('img/o_signs_bkg.jpg') center no-repeat","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","height":"350px"});divSignsText.setAttribute("class","mx-auto my-5 text-center");divSignsClick.setAttribute("class","col-sm-4 d-none");});
    divSigns.addEventListener("mouseleave",function(){$(divSigns).css({"background":"url('img/signs_bkg.jpg') center no-repeat","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","height":"350px"});divSignsText.setAttribute("class","mx-auto d-none my-5 text-center");divSignsClick.setAttribute("class","col-sm-4 d-sm-none");});


    //service navigation
    btnScreenprintingEnter.addEventListener("click", function(){
        
        serviceRow.setAttribute("class","row d-none");
        screenprintingRowHidden.setAttribute("class","row");
        $(screenprintingRowHidden).fadeIn("slow");
        screenprintingRowHidden.scrollIntoView();
    });

    btnScreenprintingBack.addEventListener("click", function(){
        
        serviceRow.setAttribute("class","row");
        screenprintingRowHidden.setAttribute("class","row");
        screenprintingRowHidden.setAttribute("style","display:none;");
    });

    btnDesignEnter.addEventListener("click", function(){
        
        serviceRow.setAttribute("class","row d-none");
        designRowHidden.setAttribute("class","row");
        $(designRowHidden).fadeIn("slow");
        designRowHidden.scrollIntoView();
    });

    btnDesignBack.addEventListener("click", function(){
        
        serviceRow.setAttribute("class","row");
        designRowHidden.setAttribute("class","row");
        designRowHidden.setAttribute("style","display:none;");
    });

    btnImpressionEnter.addEventListener("click", function(){
        
        serviceRow.setAttribute("class","row d-none");
        impressionRowHidden.setAttribute("class","row");
        $(impressionRowHidden).fadeIn("slow");
        impressionRowHidden.scrollIntoView();
    });

    btnImpressionBack.addEventListener("click", function(){
        
        serviceRow.setAttribute("class","row");
        impressionRowHidden.setAttribute("class","row");
        impressionRowHidden.setAttribute("style","display:none;");
    });

    btnPackagingEnter.addEventListener("click", function(){
        
        serviceRow.setAttribute("class","row d-none");
        packagingRowHidden.setAttribute("class","row");
        $(packagingRowHidden).fadeIn("slow");
        packagingRowHidden.scrollIntoView();
    });

    btnPackagingBack.addEventListener("click", function(){
        
        serviceRow.setAttribute("class","row");
        packagingRowHidden.setAttribute("class","row");
        packagingRowHidden.setAttribute("style","display:none;");
    });

    btnCounselingEnter.addEventListener("click", function(){
        
        serviceRow.setAttribute("class","row d-none");
        counselingRowHidden.setAttribute("class","row");
        $(counselingRowHidden).fadeIn("slow");
        counselingRowHidden.scrollIntoView();
    });

    btnCounselingBack.addEventListener("click", function(){
        
        serviceRow.setAttribute("class","row");
        counselingRowHidden.setAttribute("class","row");
        counselingRowHidden.setAttribute("style","display:none;");
    });

    btnSignsEnter.addEventListener("click", function(){
        
        serviceRow.setAttribute("class","row d-none");
        signsRowHidden.setAttribute("class","row");
        $(signsRowHidden).fadeIn("slow");
        signsRowHidden.scrollIntoView();
    });

    btnSignsBack.addEventListener("click", function(){
        
        serviceRow.setAttribute("class","row");
        signsRowHidden.setAttribute("class","row");
        signsRowHidden.setAttribute("style","display:none;");
    });

});