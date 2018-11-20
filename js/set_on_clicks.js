const routeTiles = document.getElementsByClassName("routeTile");
for (var i = 0; i < routeTiles.length; i++) {
  const route = routeTiles[i];
  const id = route.id;

  const onMouseEnter = function() {
    const data = route.dataset;
    route.setAttribute("style", `background: linear-gradient(-45deg, rgba(${data.x}, ${data.y} , ${data.z}, 0.75), rgba(${data.x}, ${data.y} , ${data.z}, 0.75)) 0% 0% / contain, url(/assets/${data.iconUrl}) center center no-repeat;`);
  }

  const onMouseLeave = function() {
    const data = route.dataset;
    route.setAttribute("style", `background: linear-gradient(-45deg, rgba(${data.x}, ${data.y} , ${data.z}), rgba(${data.x}, ${data.y} , ${data.z}, 0.55)) 0% 0% / contain, url(/assets/${data.iconUrl}) center center no-repeat;`);
  }

  route.onmouseenter = onMouseEnter;
  route.onmouseleave = onMouseLeave;
  route.onclick=()=>window.location=route.dataset.url
}
