//create map
const map = L.map('mapid',).setView([-27.222633,-49.6455874], 15)

//Create and add TileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//Create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

let marker

map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    //remove icon
    marker && map.removeLayer(marker)
    
    //add icon
    marker = L.marker([lat, lng], { icon }).addTo(map)
})

//add photo field
function addPhotoField() {
    //take the photo container #images
    const container = document.querySelector('#images')

    //take the container to duplicate
    const fieldsContainer = document.querySelectorAll('.new-upload')

    //clone the last image added
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //verify if the field is empty
    const input = newFieldContainer.children[0]

    if (input.value == "") {
        return
    }

    //clean the field 
    input.value = ""
    

    //add the clone to the image container
    container.appendChild(newFieldContainer)

}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length <= 1) {
        //clean the field value
        span.parentNode.children[0].value = ""

        return
    }

    //delete the field
    span.parentNode.remove()
}