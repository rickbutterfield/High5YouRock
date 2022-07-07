var params = {
    container: document.getElementById('js-hero-animation'),
    renderer: 'svg',
    loop: 2,
    autoplay: true,
    path: 'assets/data.json'
};

var anim;
var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

anim = lottie.loadAnimation(params);

if (!reduceMotion) {
    params.container.onmouseover = playit;
}
else {
    anim.goToAndStop(anim.getDuration());
}

anim.onComplete = function () {
    anim.finished = true;
}


function playit() {
    // console.log("playing");
    if (anim.finished) {
        anim.finished = false;
        anim.goToAndPlay(1, true);
    }
}