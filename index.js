
var rotationArray = [];
var gameIsStarted = false;

// Default random number generation
function randomNumberGeneration(){
  var rngNumber = Math.floor(Math.random()*2);
  return rngNumber;
}

//_______________________________________________________________Star rotation

// Random Rotation is Generated and added rotationArray[]
function generateRandomRotation(){
  for(var i=0; i<3; i++){
    var rotation = randomNumberGeneration();
    rotationArray.push(rotation);
  }
}

// Stars turn clockwise
function starRotateCW(){
  $(".starDiv").addClass("starRotateCW");
  setTimeout(function (){
    $(".starDiv").removeClass("starRotateCW");
  }, 1000);
}

// Stars turn counter clockwise
function starRotateCCW(){
  $(".starDiv").addClass("starRotateCCW");
  setTimeout(function (){
    $(".starDiv").removeClass("starRotateCCW");
  }, 1000);
}

// Star rotation template
function setRotation(k){
  if (rotationArray[k]==0){
    starRotateCCW();
  }
  else if(rotationArray[k]==1){
    starRotateCW()
  }
}

// Rotation animation is shown with stars
function generateRotationAnimation(){
  var j=0;
  setRotation(j);
  setTimeout(function(){
    setRotation(j+1);
  },1050);
  setTimeout(function(){
    setRotation(j+2);
  },2100);
}



//_______________________________________________________________Booming Mech

// Animated right boom rotation
function rightBoomAnimated(){
  $(".slice").animate({opacity:1},250);
  $(".slice1").css("background-color","#FFF6BF");
  $(".slice2").css("background-color","#c2185b");
  $(".slice3").css("background-color","#c2185b");
  $(".slice4").css("background-color","#c2185b");
  $(".slice").animate({opacity:0.1},750);
  setTimeout(function(){
    $(".slice").animate({opacity:1},250);
    $(".slice1").css("background-color","#c2185b");
    $(".slice2").css("background-color","#FFF6BF");
    $(".slice").animate({opacity:0.1},750);
  },1000);
  setTimeout(function(){
    $(".slice").animate({opacity:1},250);
    $(".slice2").css("background-color","#c2185b");
    $(".slice4").css("background-color","#FFF6BF");
    $(".slice").animate({opacity:0.1},750);
  },2000);
  setTimeout(function(){
    $(".slice").animate({opacity:1},250);
    $(".slice4").css("background-color","#c2185b");
    $(".slice3").css("background-color","#FFF6BF");
    $(".slice").animate({opacity:0.1},750);
  },3000);
}

// Animated left boom rotation
function leftBoomAnimated(){
  $(".slice").animate({opacity:1},250);
  $(".slice1").css("background-color","#FFF6BF");
  $(".slice2").css("background-color","#c2185b");
  $(".slice3").css("background-color","#c2185b");
  $(".slice4").css("background-color","#c2185b");
  $(".slice").animate({opacity:0.1},750);
  setTimeout(function(){
    $(".slice").animate({opacity:1},250);
    $(".slice1").css("background-color","#c2185b");
    $(".slice3").css("background-color","#FFF6BF");
    $(".slice").animate({opacity:0.1},750);
  },1000);
  setTimeout(function(){
    $(".slice").animate({opacity:1},250);
    $(".slice3").css("background-color","#c2185b");
    $(".slice4").css("background-color","#FFF6BF");
    $(".slice").animate({opacity:0.1},750);
  },2000);
  setTimeout(function(){
    $(".slice").animate({opacity:1},250);
    $(".slice4").css("background-color","#c2185b");
    $(".slice2").css("background-color","#FFF6BF");
    $(".slice").animate({opacity:0.1},750);
  },3000);
}


// Booming template
function setBoomRotation(k){
  if (rotationArray[k]==0){
    leftBoomAnimated();
  }
  else if(rotationArray[k]==1){
    rightBoomAnimated()
  }
}

// Booming rotation is generated
function generateBoomRotation(){
  var k=0;
  setBoomRotation(k);
  setTimeout(function(){
    setBoomRotation(k+1);
  },4000);
  setTimeout(function(){
    setBoomRotation(k+2);
  },8000);
}

//______________________________________________________Starting and restarting
// Start and Try again button
$(".start-button").click(function(){
  gameIsStarted = true;
  $(".start-button").addClass("hidden");
  generateRandomRotation();
  generateRotationAnimation();
  setTimeout(function(){
    generateBoomRotation();
    $(".star").animate({opacity:0},{duration:500},{queue:false});
  },3300);

  setTimeout(function(){
    $(".slice").css("backgroundColor","#202124");
    $(".slice").animate({opacity:0.5},1500);
    $(".btn").text("Try Again");
    $(".btn").removeClass("hidden");
    $(".star").animate({opacity:1},{duration:500},{queue:false});
    rotationArray = [];
  },15300);
});

//__________________________________________________________________Restarting
// Restart button
