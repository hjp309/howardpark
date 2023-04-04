
const pages = ["Ultraviolet.html", "ARWorld.html", "prophecyschosen.html", "grounded.html", "hrmdvr.html", "tandononline.html"]

function nextPage(){
  let parsed = window.location.href.split("/");
  let currentURL = parsed[parsed.length - 1];
  var index = pages.indexOf(currentURL);

  if (index == -1){
    console.log("Website doesn't exist. Check names");
  }

  index++;

  if (index == pages.length){
    index = 0;
  }

  console.log(pages[index]);
  window.location.replace(pages[index]);
}

function previousPage(){
  let parsed = window.location.href.split("/");
  let currentURL = parsed[parsed.length - 1];
  var index = pages.indexOf(currentURL);

  if (index == -1){
    console.log("Website doesn't exist. Check names");
  }

  index--;

  if (index == -1){
    index = pages.length - 1;
  }

  console.log(pages[index]);
  window.location.replace(pages[index]);
}
