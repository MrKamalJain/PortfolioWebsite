const navMenu = document.getElementById('nav-menu'), toggleMenu = document.getElementById('nav-toggle'), closeMenu = document.getElementById('nav-close');

//Show menu
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

//Hide menu on click of close icon
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
});

//Hide menu on click of any link
const navLink = document.querySelectorAll('.nav_link');
navLink.forEach(link => link.addEventListener('click', () => {
    navMenu.classList.remove('show');
}));

//Scroll sections for active link
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset;
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        sectionId = section.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.add('active');
        } else {
            document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.remove('active');
        }
    })
});

const downloadResume = document.getElementById('download-resume');
downloadResume.addEventListener('click', () => {
    downloadResume.classList.remove('download_btn');
    downloadResume.classList.add('downloading_btn');
    var anim = setInterval(animate, 40);
    var percent = 0;
    function animate() {
        percent++;
        if (percent > 100) {
            clearInterval(anim);
            download("assets/resume.pdf");
            downloadResume.classList.remove('downloading_btn');
            downloadResume.classList.add('download_btn');
            downloadResume.innerHTML = "Download Resume";
        } else {
            downloadResume.innerHTML = percent + '%';
        }
    }
});
const download = (file) => {
    var element = document.createElement('a');
    element.setAttribute('href',file);
    element.setAttribute('download','');
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
};