const menuItems = document.querySelectorAll('.nav__link')
const scrollSpySections = document.querySelectorAll('.section')

const handleScroollSpy = () => {
    
    if(document.body.classList.contains('main-page'))
    {
        const sections = []

        scrollSpySections.forEach(section => {
            if(window.scrollY <= section.offsetTop + section.offsetHeight - 100)
            {
                sections.push(section)

                const activSection = document.querySelector(`[href*="${sections[0].id}"]`)

                menuItems.forEach(item => item.classList.remove('active'))

                activSection.classList.add('active')
            }
        })
    }
}

window.addEventListener('scroll', handleScroollSpy)