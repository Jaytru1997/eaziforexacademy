document.addEventListener('DOMContentLoaded', function() {
    initNav();
    closeNav();
    openNav();

})

function closeNav() {
    const closebtn = document.querySelector('.close-icon');
    const mobilemenu = document.querySelector('.mobilenav');
    closebtn.addEventListener('click', function() {
        mobilemenu.style.display = 'none';
    })
}

function openNav() {
    const openbtn = document.querySelector('.menu');
    const mobilemenu = document.querySelector('.mobilenav');
    console.log(mobilemenu);
    openbtn.addEventListener('click', function() {
        mobilemenu.style.display = 'flex';
    })
}

function initNav() {
    const mobilemenu = document.querySelector('.mobilenav');
    mobilemenu.style.display = 'none';
}


