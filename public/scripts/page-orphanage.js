const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//create map
const map = L.map('mapid', options).setView([-27.222633,-49.6455874], 15)

//create and add titlLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

//create and add marker
L.marker([-27.222633,-49.6455874], { icon })
    .addTo(map)


//IMAGE GALERY

function selectImage(event) {
    const button = event.currentTarget

    //remove all classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {
        button.classList.remove("active")
    })

    
    
    //select clicked image
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    

    //update container image
    imageContainer.src = image.src

    //add .active class to button clicked
    button.classList.add("active")
}