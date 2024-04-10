document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('#menu-tlacitko')
    const menuItems = document.querySelector('#menu-polozky')

    menuButton.addEventListener('click', () => {
        console.log('Menu button clicked');
        menuItems.classList.toggle('show')
    })
})
