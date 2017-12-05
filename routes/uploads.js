var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;
var nodeID3 = require('node-id3');
var fs = require('fs');

router.get('/', function(req, res) {
	res.render('uploads', {title: 'Upload' });
});


// todo : uploads file
router.post('/uploads', upload.single('user_file'), function(req, res) {
	var image = "";
	var musicdir = __dirname + '/musi/' + req.file.originalname;
	var filesystem = fs.createReadStream(musicdir);
	
	exec("mid3iconv -e cp949" + filesystem, function(err, sto, str) {
		console.log(sto);
	});
});


module.exports = router;
