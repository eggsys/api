const multer = require('multer')
const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, './uploads2')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + ".jpg" )
        //cb(null, file.originalname );
    }

})

const upload = multer({ storage: storage })

exports.uploads = upload;