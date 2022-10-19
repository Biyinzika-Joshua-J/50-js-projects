const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const search = document.querySelector('.search');

const toggleSearch =  function(e){
    search.classList.toggle('active');
    btn.classList.toggle('active');
    input.focus();
}

btn.addEventListener('click', toggleSearch);