$(document).ready(function() {
  $('#fullpage').fullpage();

  $("#project-profile1").hover(function(){
    $("#project-profile2").css({"opacity": "0.5",
                                "-webkit-transition": ".5s ease-in-out"
                               });
    $("#project-profile3").css({"opacity": "0.5",
                                "-webkit-transition": ".5s ease-in-out"
                               });
    $("#project-profile4").css({"opacity": "0.5",
                                "-webkit-transition": ".5s ease-in-out"
                               });
  }, function(){
    $("#project-profile2").css({"opacity": "1.0",
                                "-webkit-transition": ".5s ease-in-out"
                               });
    $("#project-profile3").css({"opacity": "1.0",
                                "-webkit-transition": ".5s ease-in-out"
                               });
    $("#project-profile4").css({"opacity": "1.0",
                                "-webkit-transition": ".5s ease-in-out"
                               });
  });

  $("#project-profile2").hover(function(){
    $("#project-profile1").css({"opacity": "0.5",
                                "-webkit-transition": ".5s ease-in-out"
                               });
    $("#project-profile3").css({"opacity": "0.5",
                                "-webkit-transition": ".5s ease-in-out"
                               });
    $("#project-profile4").css({"opacity": "0.5",
                                "-webkit-transition": ".5s ease-in-out"
                               });
  }, function(){
    $("#project-profile1").css({"opacity": "1.0",
                                "-webkit-transition": ".5s ease-in-out"
                               });
    $("#project-profile3").css({"opacity": "1.0",
                                "-webkit-transition": ".5s ease-in-out"
                               });
    $("#project-profile4").css({"opacity": "1.0",
                                "-webkit-transition": ".5s ease-in-out"
                               });
  });

  $("#project-profile3").hover(function(){
    $("#project-profile1").css({"opacity": "0.5",
                                "-webkit-transition": ".5s ease-in-out"
                               });
    $("#project-profile2").css({"opacity": "0.5",
                                "-webkit-transition": ".5s ease-in-out"
                               });
    $("#project-profile4").css({"opacity": "0.5",
                                "-webkit-transition": ".5s ease-in-out"
                               });
  }, function(){
    $("#project-profile1").css({"opacity": "1.0",
                                "-webkit-transition": ".5s ease-in-out"
                               });
    $("#project-profile2").css({"opacity": "1.0",
                                "-webkit-transition": ".5s ease-in-out"
                               });
    $("#project-profile4").css({"opacity": "1.0",
                                "-webkit-transition": ".5s ease-in-out"
                               });
  });

  $("#project-profile4").hover(function(){
    $("#project-profile1").css({"opacity": "0.5",
                                "-webkit-transition": ".5s ease-in-out"
                               });
    $("#project-profile2").css({"opacity": "0.5",
                                "-webkit-transition": ".5s ease-in-out"
                               });
    $("#project-profile3").css({"opacity": "0.5",
                                "-webkit-transition": ".5s ease-in-out"
                               });
  }, function(){
    $("#project-profile1").css({"opacity": "1.0",
                                "-webkit-transition": ".5s ease-in-out"
                               });
    $("#project-profile2").css({"opacity": "1.0",
                                "-webkit-transition": ".5s ease-in-out"
                               });
    $("#project-profile3").css({"opacity": "1.0",
                                "-webkit-transition": ".5s ease-in-out"
                               });
  });
});