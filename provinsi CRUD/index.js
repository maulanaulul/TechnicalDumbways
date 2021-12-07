const http = require('http')
const express = require('express')
const path = require('path')
const { dirname } = require('path')
const hbs = require('hbs')

// Memanggil express
const app = express()

app.use(express.json())

app.set('view engine', 'hbs')

app.use('/public', express.static(path.join(__dirname, 'public')))



// setting connection
const dbConnection = require('./connection/db')

// setting encode f to b
app.use(express.urlencoded({ extended: false }))




// setting multer
const uploadFile = require('./middlewares/uploadFile')

//setting folder upload
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

// setting path file img
const pathFile = "http://localhost:5000/uploads/"


app.get('/', function (req, response) {
    const query = `SELECT * FROM provinsi_tb;`

    dbConnection.getConnection((err, conn) => {
        if (err) throw err

        conn.query(query, (err, results) => {
            if (err) throw err

            let provinsi = []

            for (let result of results) {
                provinsi.push({
                    ...result,
                    image: pathFile + result.photo
                })
            }

            if (provinsi == 0) {
                provinsi = false
            }

            response.render('index', {

                provinsi
            })

           
        })
        conn.release()
    })

})

app.get('/addProv', function (req, response) {
    const title = 'provinsi'

    response.render('addProv', {

        title: title

    })

})
app.get('/addKab', function (req, response) {
    const query = `SELECT * FROM provinsi_tb;`

    dbConnection.getConnection((err, conn) => {
        if (err) throw err

        conn.query(query, (err, results) => {
            if (err) throw err

            let provinsi = []

            for (let result of results) {
                provinsi.push({
                    ...result,
                    image: pathFile + result.photo
                })
            }

            if (provinsi == 0) {
                provinsi = false
            }

            response.render('addKab', {
                provinsi
            })

        })
        conn.release()
    })

})



app.post('/add-prov', uploadFile('image'), function (req, res) {
    const { nama, diresmikan, pulau } = req.body
    const image = req.file.filename

    const query = `INSERT INTO provinsi_tb (nama, diresmikan, photo, pulau) VALUES ('${nama}', '${diresmikan}', '${image}', '${pulau}');`

    dbConnection.getConnection((err, conn) => {
        if (err) throw err

        conn.query(query, (err, results) => {
            if (err) throw err

            res.redirect('/')
        })
        conn.release()
    })
})

app.get('/prov/:id', function (req, res) {
    var{id} = req.params

    const query = `SELECT * FROM provinsi_tb WHERE id = ${id};`
    const query2 = `SELECT * FROM kabupaten_tb WHERE Provinsi_id = ${id}`

    dbConnection.getConnection((err, conn) => {
        if (err) throw err

        conn.query(query, (err, results) => {
            if (err) throw err

            const prov = {
                ...results[0],
                image: pathFile + results[0].photo
            }

            res.render('detilProv', {

                prov

            })
        })
        conn.release()
    })

    dbConnection.getConnection((err, conn) => {
        if (err) throw err

        conn.query(query2, (err, results) => {
            if (err) throw err

            let kabupaten = []

            for (let result of results) {
                kabupaten.push({
                    ...result,
                    image: pathFile + result.photo
                })
            }

            if (kabupaten == 0) {
                kabupaten= false
            }

            res.render('detilProv', {
                kabupaten
            })

        })
        conn.release()
    })

})

app.get('/prov/:id', function (req, res) {
    var{id} = req.params

    const query = `SELECT * FROM provinsi_tb WHERE id = ${id};`

    dbConnection.getConnection((err, conn) => {
        if (err) throw err

        conn.query(query, (err, results) => {
            if (err) throw err

            const prov = {
                ...results[0],
                image: pathFile + results[0].photo
            }

            res.render('detilProv', {

                prov

            })
        })
        conn.release()
    })

    
})

app.get('/kab/:id', function (req, res) {
    var{id} = req.params

    const query = `SELECT * FROM kabupaten_tb WHERE Provinsi_id = ${id}`
   

    

    dbConnection.getConnection((err, conn) => {
        if (err) throw err

        conn.query(query, (err, results) => {
            if (err) throw err

            let kabupaten = []

            for (let result of results) {
                kabupaten.push({
                    ...result,
                    image: pathFile + result.photo
                })
            }

            if (kabupaten == 0) {
                kabupaten= false
            }

            res.render('detilKab', {
                kabupaten
            })

        })
        conn.release()
    })

})

app.post('/add-kab', uploadFile('image'), function (req, res) {
    const { nama, diresmikan, provinsi } = req.body
    const prov = parseInt(provinsi)
    const image = req.file.filename

    const query = `INSERT INTO kabupaten_tb (Nama, diresmikan, photo, Provinsi_id) VALUES ('${nama}', '${diresmikan}', '${image}', '${prov}');`

    dbConnection.getConnection((err, conn) => {
        if (err) throw err

        conn.query(query, (err, results) => {
            if (err) throw err

            res.redirect('/')
        })
        conn.release()
    })
})

app.get('/deleteKab/:id', function (req, res) {
    var { id } = req.params

    const query = `DELETE FROM kabupaten_tb WHERE id = ${id};`

    dbConnection.getConnection((err, conn) => {
        if (err) throw err

        conn.query(query, (err, results) => {
            if (err) throw err



            res.render('detilKab', {

            })
        })
        conn.release()
    })
})

app.get('/deleteProv/:id', function (req, res) {
    var { id } = req.params

    const query = `DELETE FROM provinsi_tb WHERE id = ${id};`

    dbConnection.getConnection((err, conn) => {
        if (err) throw err

        conn.query(query, (err, results) => {
            if (err) throw err



            res.render('index', {

            })
        })
        conn.release()
    })
})


app.get('/editProv/:id', function (req, res) {
    var { id } = req.params

    const query = `SELECT * FROM provinsi_tb WHERE id = ${id};`

    dbConnection.getConnection((err, conn) => {
        if (err) throw err

        conn.query(query, (err, results) => {
            if (err) throw err

            const edit = {
                ...results[0]
            }

            res.render('editProv', {
                edit

            })
        })
        conn.release()
    })
})

app.post('/editProv/:id', uploadFile('image'), function (req, res) {
    var { id } = req.params
    const { nama, diresmikan, pulau } = req.body
    const image = req.file.filename


    const query = `UPDATE provinsi_tb SET nama = '${nama}', diresmikan = '${diresmikan}', photo = '${image}', pulau = '${pulau}' WHERE id = ${id};`

    dbConnection.getConnection((err, conn) => {
        if (err) throw err

        conn.query(query, (err, results) => {
            if (err) throw err

            res.redirect('/')
        })
        conn.release()
    })
})


app.get('/updateKab/:id', function (req, res) {
    var { id } = req.params

    const query = `SELECT * FROM kabupaten_tb WHERE id = ${id};`

    dbConnection.getConnection((err, conn) => {
        if (err) throw err

        conn.query(query, (err, results) => {
            if (err) throw err

            const edit = {
                ...results[0]
            }

            res.render('editKab', {
                edit

            })
        })
        conn.release()
    })
})

app.post('/editKab/:id', uploadFile('image'), function (req, res) {
    var {id} = req.params
    const { nama, diresmikan, provinsi } = req.body
    const prov = parseInt(provinsi)
    const image = req.file.filename

    const query = `UPDATE provinsi_tb SET Nama = '${nama}', diresmikan = '${diresmikan}', photo = '${image}' WHERE id = ${id};`



    dbConnection.getConnection((err, conn) => {
        if (err) throw err

        conn.query(query, (err, results) => {
            if (err) throw err

            res.redirect('/')
        })
        conn.release()
    })
})


app.unsubscribe(express.json())

const port = 5000
const server = http.createServer(app)
server.listen(port)

console.debug(`Server running on port ${port}`)
