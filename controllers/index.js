var express = require('express');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
var router = express.Router();

router.get('/', function(req,res) {
	res.sendFile(path.join(__dirname + 'index.html'));
})

router.post('/', upload.single('upl'), function(req, res) {
	if (!req.file) {
		res.status(400).json({error:"file not found"});
	} else {
		res.status(200).json({fileSizeBytes: req.file.size});
	}
})

router.all('/', function(req,res) {
	res.status(405).end("Method Not Allowed");
});

router.use(function(req,res) {
	res.status(404).end("Page Not Found");
});

module.exports = router;