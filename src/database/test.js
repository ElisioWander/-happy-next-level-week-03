const Database = require('./db')

Database.then(async db => {
    //insert datas
    await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-27.222633",
            "-49.6455574",
            "Lar dos meninos",
            "Presta assistência a crianças de 06 a 15 anos que se encontram em situação de risco e/ou vulnerabilidade social.",
            "3288552244",
            "https://images.unsplash.com/flagged/photo-1576028246561-d6e04a34adbf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            "Horários de visitas Das 18h até 8h",
            "1"
        )
    `)
    
    //consult datas
    const selectedOrphanages =  await db.all("SELECT * FROM orphanages")

    console.log(selectedOrphanages)
})