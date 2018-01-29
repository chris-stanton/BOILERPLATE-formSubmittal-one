
DotEnv = require('dotenv-node');
new DotEnv();
const router = require('express').Router();
const path = require('path');
const hummus = require('hummus');



router.post('/sendEmail', function(req, res){
  let form = req.body;

		var pdfWriter = hummus.createWriterToModify(__dirname + '/vet.pdf', {
			modifiedFilePath: __dirname + '/pdf/' + form.firstName + form.lastName + '.pdf',
      log: './server/logs/hummus.logs.js'
		});

		var pageModifier = new hummus.PDFPageModifier(pdfWriter,0);


    pageModifier.startContext().getContext().writeText(
			'TEST 1',
			30, 80,
			{
        font:pdfWriter.getFontForFile('./server/routes/arial.ttf'),
        size:12,
        color:'red',
        colorspace:'grey'
      }
		);

    
		pageModifier.endContext().writePage();
		pdfWriter.end();



});


module.exports = router;
