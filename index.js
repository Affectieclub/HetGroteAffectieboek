let page = 0;
let pageLimit = document.querySelectorAll('.page').length;

function prevPage() {
    if(--page < 0) page = 0;
    showCurrentPage();
}

function nextPage() {
    if(++page >= pageLimit) page = pageLimit - 1;
    showCurrentPage();
}

function showCurrentPage() {
    document.querySelector('main').style.setProperty('transform', `translateX(${page * 100}%)`);
}
