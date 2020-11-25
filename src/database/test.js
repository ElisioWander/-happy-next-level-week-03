const Database = require('./db')

const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    //insert datas
    await saveOrphanage(db, {
        lat: "-27.222633",
        lng: "-49.6555874",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontram em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "44225588",
        images: [
            "https://images.unsplash.com/flagged/photo-1576028246561-d6e04a34adbf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1567791124560-c60b7d227623?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horários de visitas Das 18h até 8h",
        open_on_weekends: "0"
    })
    
    //consult datas
    const selectedOrphanages =  await db.all("SELECT * FROM orphanages")

    console.log(selectedOrphanages)

    // //consult just one orphanage
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')

    console.log(orphanage)
})