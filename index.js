let page = 0;
let pageLimit = 0;
window.onload = () => {
    pageLimit = document.querySelectorAll('.page').length;
    console.log(pageLimit);

}
function prevPage() {
    if(--page < 0) page = 0;
    showCurrentPage();
}

function nextPage() {
    if(++page >= pageLimit) page = pageLimit - 1;
    showCurrentPage();
}

function showCurrentPage() {
    document.querySelector('main').style.setProperty('transform', `translateX(-${page * 100}%)`);
}

function handleGesture() {
    if (touchendX < touchstartX - 100) nextPage();
    if (touchendX > touchstartX + 100) prevPage();
}

let touchstartX = 0;
let touchendX = 0;

document.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX
});

document.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX
    handleGesture()
});
