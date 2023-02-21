const slidePanels = document.querySelectorAll('.slide-panel')

slidePanels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    slidePanels.forEach(panel => {
        panel.classList.remove('active')
    })
}