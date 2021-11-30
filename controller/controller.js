const KPIClient = require('../model/kpiModel');



exports.postKPI    = async (req, res) => {

    try {
        const docu = await KPIClient.create(req.body)
        console.log(docu)
        return res.status(201).send({
            status: "bien"
        })
    } catch (error) {
        return res.status(400).send({
            status: error,
        })
    }

}
    

exports.getKPI     = async (req, res) => {

    let average = 0

    try {
        const docu = await KPIClient.find()
        docu.forEach(element => average = average + element.age);

        let arr = docu.map((k)=>(k.age - average) ** 2)
        let sum = arr.reduce((acc, curr)=> acc + curr);
        let variance = Math.sqrt(sum / arr.length)

        return res.status(200).send({
            status: "ok",
            response : {
                promedio:`Promedio de edad de los clientes es: ${average/docu.length}`,
                desviacion:`La desviacion estandar es: ${variance}`
            }

        })
    } catch (error) {
        return res.status(400).send({
            status: error,
        })
    }
}


