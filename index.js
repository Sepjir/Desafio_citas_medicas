// almacenando dependencias de node JS
const axios = require("axios");
const chalk = require("chalk");
const moment = require("moment");
const {v4: uuidv4} = require("uuid")
const _ = require("lodash")
const http = require("http");

// Creando servidor con modulo http
http.createServer((req, res) => {
    if (req.url.includes('/usuarios')) {
        // Haciendo consulta a Api usando Axios
    axios
        .get("https://randomuser.me/api/?results=7&?nat=us")
        .then((data) => {
            const datos = data.data.results
            let usuarios = { 
                u1: [datos[0].name.first, datos[0].name.last, uuidv4().slice(30), moment().subtract(11, "days").add(3, "hours").format("MMMM Do YYYY, h:mm:ss a")],
                u2: [datos[1].name.first, datos[1].name.last, uuidv4().slice(30), moment().subtract(8, "days").add(1, "hours").format("MMMM Do YYYY, h:mm:ss a")],
                u3: [datos[2].name.first, datos[2].name.last, uuidv4().slice(30), moment().subtract(6, "days").add(5, "hours").format("MMMM Do YYYY, h:mm:ss a")],
                u4: [datos[3].name.first, datos[3].name.last, uuidv4().slice(30), moment().subtract(3, "days").add(6, "hours").format("MMMM Do YYYY, h:mm:ss a")],
                u5: [datos[4].name.first, datos[4].name.last, uuidv4().slice(30), moment().subtract(2, "days").add(2, "hours").format("MMMM Do YYYY, h:mm:ss a")],
                u6: [datos[5].name.first, datos[5].name.last, uuidv4().slice(30), moment().subtract(1, "days").add(8, "hours").format("MMMM Do YYYY, h:mm:ss a")],
                u7: [datos[6].name.first, datos[6].name.last, uuidv4().slice(30), moment().format("MMMM Do YYYY, h:mm:ss a")]
            }
            //Enviando respuesta al endpoint /usuarios
            res.write(`
            1. Nombre: ${usuarios.u1[0]} - Apellido: ${usuarios.u1[1]} - ID: ${usuarios.u1[2]} - Timestamp: ${usuarios.u1[3]}
            2. Nombre: ${usuarios.u2[0]} - Apellido: ${usuarios.u2[1]} - ID: ${usuarios.u2[2]} - Timestamp: ${usuarios.u2[3]}
            3. Nombre: ${usuarios.u3[0]} - Apellido: ${usuarios.u3[1]} - ID: ${usuarios.u3[2]} - Timestamp: ${usuarios.u3[3]}
            4. Nombre: ${usuarios.u4[0]} - Apellido: ${usuarios.u4[1]} - ID: ${usuarios.u4[2]} - Timestamp: ${usuarios.u4[3]}
            5. Nombre: ${usuarios.u5[0]} - Apellido: ${usuarios.u5[1]} - ID: ${usuarios.u5[2]} - Timestamp: ${usuarios.u5[3]}
            6. Nombre: ${usuarios.u6[0]} - Apellido: ${usuarios.u6[1]} - ID: ${usuarios.u6[2]} - Timestamp: ${usuarios.u6[3]}
            7. Nombre: ${usuarios.u7[0]} - Apellido: ${usuarios.u7[1]} - ID: ${usuarios.u7[2]} - Timestamp: ${usuarios.u7[3]}
            `)
            
            // Uso de Chalk para enviar información a la consola, con texto azul y fondo blanco
            console.log(chalk.blue.bgWhite(`
            1. Nombre: ${usuarios.u1[0]} - Apellido: ${usuarios.u1[1]} - ID: ${usuarios.u1[2]} - Timestamp: ${usuarios.u1[3]}
            2. Nombre: ${usuarios.u2[0]} - Apellido: ${usuarios.u2[1]} - ID: ${usuarios.u2[2]} - Timestamp: ${usuarios.u2[3]}
            3. Nombre: ${usuarios.u3[0]} - Apellido: ${usuarios.u3[1]} - ID: ${usuarios.u3[2]} - Timestamp: ${usuarios.u3[3]}
            4. Nombre: ${usuarios.u4[0]} - Apellido: ${usuarios.u4[1]} - ID: ${usuarios.u4[2]} - Timestamp: ${usuarios.u4[3]}
            5. Nombre: ${usuarios.u5[0]} - Apellido: ${usuarios.u5[1]} - ID: ${usuarios.u5[2]} - Timestamp: ${usuarios.u5[3]}
            6. Nombre: ${usuarios.u6[0]} - Apellido: ${usuarios.u6[1]} - ID: ${usuarios.u6[2]} - Timestamp: ${usuarios.u6[3]}
            7. Nombre: ${usuarios.u7[0]} - Apellido: ${usuarios.u7[1]} - ID: ${usuarios.u7[2]} - Timestamp: ${usuarios.u7[3]}
            `))

            // Usar lodash para recorrer arreglo de usuarios
            _.forEach(usuarios, (value, index) => {res.write(`
            Nombre: ${JSON.stringify(value[0])}
            Apellido: ${JSON.stringify(value[1])}
            ID: ${JSON.stringify(value[2])}
            Fecha de Registro: ${JSON.stringify(value[3])}
            `)})
            res.end()
            
        })
        .catch((e) => console.log(e.response.data))
        } 

    })
    .listen(3000, () => console.log("Levantando servidor en puerto 3000"))
