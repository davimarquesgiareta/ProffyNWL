const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async(db)=>{
    //inserir dados

    proffyValue = {
        name:"Diego Fernandes",
        avatar: "https://sportbuzz.uol.com.br/media/_versions/neto_-_personalidades_widelg.jpg",
        whatsapp: "8998987",
        bio:"Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
      

    }

    classValue = {
        subject: 1,
        cost: "20",
       // o proffy id vira pelo banco de dados
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

     //await createProffy(db, {proffyValue, classValue, classScheduleValues})
    //consultar dados

    const selectedProffys = await db.all("SELECT * FROM proffys")
    
    const selecteClassandProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

  

    // o horario que a pessoa trabalha, por exemplo , é das 8h - 18h
    // o horario do time_from (8h) precisa ser menor ou igual ao do horario solicitado
    // o time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday ="0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)

    console.log(selectClassesSchedules)


})