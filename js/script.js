$(function() {

  // Team members
  var team = {
    "stan": {
      "fullname": "Stan Marsh",
      "position": "Tester",
      "quote": "Skateboard williamsburg affogato ethical, blue bottle franzen cray beard lumbersexual fashion axe try-hard chillwave fixie yuccie.",
    },
    "kyle": {
      "fullname": "Kyle Broflovsky",
      "position": "Java developer",
      "quote": "Bicycle rights brunch beard, tofu gentrify chicharrones jean shorts hammock art party ennui affogato 90's meh.",
    },
    "eric": {
      "fullname": "Eric Cartman",
      "position": "Front-end developer",
      "quote": "Crucifix waistcoat trust fund YOLO raw denim cronut. Fashion axe cred schlitz, pork belly gentrify irony keytar 3 wolf moon sartorial everyday carry man braid umami normcore semiotics paleo.",
    },
    "kenny": {
      "fullname": "Eric McCormick",
      "position": "Back-end developer",
      "quote": "Helvetica kitsch YOLO mixtape etsy. Mixtape slow-carb biodiesel, chillwave tumblr trust fund cornhole yuccie seitan direct trade asymmetrical.",
    },

  };

  //
  var part1 = "<div class='col-sm-3'><div class='thumbnail'>";
  var part2 = "<div class='caption post-content'>";
  var part3 = "<a href='#'><span class='glyphicon glyphicon-envelope' aria-hidden='true'><\/span><\/a><\/div><\/div>";

  for (var key in team) {
    $('.team-members').append(part1 + "<img src='img/ph.jpg' alt='" + team[key].fullname + "' class='img-circle'>" + part2 + "<p class='position'>" + team[key].position + "</p>" + part3 + "<h4>" + key + "</h4><p>" + team[key].quote + "</p></div>");
  };



  // Smooth scrolling
  $("html").niceScroll({cursorwidth: '10px', autohidemode: true});

  // Fade in effect when webpage loaded
  $('body').fadeIn('slow');

  // Changes navbar position
  $('body').scrollspy({ target: '#myNavbar' })

  // Smooth scroll after click on navbar
  $("ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
     scrollTop: $(hash).offset().top
   }, 300, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

 });

});