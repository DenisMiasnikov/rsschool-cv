const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
}

const toTopButton = document.querySelector(".scroll-to-top")

const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo(0, 0 )
}

toTopButton.addEventListener('click', scrollToTop)

const observerCb = (e) => e[0].intersectionRatio === 0
    ? toTopButton.classList.remove('hide')
    : toTopButton.classList.add('hide')

const observer = new IntersectionObserver(observerCb, options)

const target = document.querySelector("#skills");

observer.observe(target);
