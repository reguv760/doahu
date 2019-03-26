
// - DO NOT DELETE
// - IMD211: Week6 FINAL
// - Created by:  (Reginald Galang)

window.onload = function()
{
  const videoContainer = document.getElementById("videoHolder");
  const myVideos = ["calm-hawaii-waters-web.mp4", "pink-flower-in-hawaii-web.mp4", "waikiki-beach-hawaii-web.mp4"];

  var myVideo;
  var currentSloganColor;
  var currentSloganPos;
  var desktopLoaded = false;
  // assign color based on randomNum
  const mySloganText = document.getElementsByClassName('slogan_text')[0];
  const mySloganContainer = document.getElementsByClassName('slogan')[0];

  const myBanner = document.getElementsByClassName("banner")[0];
  TweenLite.to(myBanner, 0.75, { delay:1, ease:Back.easeOut, opacity:1, top:0, scaleX:1});


  //browser width:::
  window.addEventListener("resize", findBrowserWidth);

  function findBrowserWidth()
  {
    const w = window.innerWidth || window.documentElement.clientWidth || window.body.clientWidth;

    if (w <= 799)
    {
      mySloganText.style.color = "#fff";
      mySloganContainer.style.top = "37.5%";
    } else
    if (!desktopLoaded)
    {
      randomizeVid();
      desktopLoaded = true;
    } else
    if ((desktopLoaded) && (w > 799))
    {
      mySloganText.style.color = currentSloganColor;
      mySloganContainer.style.top = currentSloganPos;
    }
  };

  function randomizeVid()
  {
    const randomNum = Math.floor(Math.random() * myVideos.length);
    myVideo = myVideos[randomNum];

    console.log("randomizing...");
    switch (randomNum)
    {
      case 0:
        currentSloganColor = "#fff";
        currentSloganPos = "37.5%"
        mySloganText.style.color = currentSloganColor;
        mySloganContainer.style.top = currentSloganPos;
        break;
      case 1:
        currentSloganColor = "#ffc623";
        currentSloganPos = "32.5%";
        mySloganText.style.color = currentSloganColor;
        mySloganContainer.style.top = currentSloganPos;
        break;
      case 2:
        currentSloganColor = "#f68f1e";
        currentSloganPos = "60%";
        mySloganText.style.color = currentSloganColor;
        mySloganContainer.style.top = currentSloganPos;
        break;

      default:
        break;
    }
    const vidScript = "<source src='./assets/video/" + myVideo + "' type='video/mp4'>Your browser does not support the video tag.";
    videoContainer.innerHTML = vidScript;
  }
  findBrowserWidth();

  /// lazy loading
  [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
  	img.setAttribute('src', img.getAttribute('data-src'));
  	img.onload = function() {
  		img.removeAttribute('data-src');
  	};
  });
};
