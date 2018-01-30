
DotEnv = require('dotenv-node');
new DotEnv();
const router = require('express').Router();
const path = require('path');
const hummus = require('hummus');



router.post('/sendEmail', function(req, res){
  let form = req.body;

    // defining file paths
		var pdfWriter = hummus.createWriterToModify(__dirname + '/vet.pdf', {
			modifiedFilePath: __dirname + '/pdf/' + form.firstName + form.lastName + '.pdf',
      log: './server/logs/hummus.logs.js'
		});

    // creates text on first page
		var pageModifier0 = new hummus.PDFPageModifier(pdfWriter,0);
    pageModifier0.startContext().getContext().writeText(
			form.firstName + ' ' + form.lastName, // text
			130, 580, // text position
			{
        font:pdfWriter.getFontForFile('./server/routes/arial.ttf'),
        size:12,
        color:'red',
        colorspace:'grey'
      }
		);
    pageModifier0.endContext().writePage();

    // creates text on second page
    var pageModifier1 = new hummus.PDFPageModifier(pdfWriter,1);
    pageModifier1.startContext().getContext().writeText(
			form.firstName + ' ' + form.lastName, // text
			330, 80, // text position
			{
        font:pdfWriter.getFontForFile('./server/routes/arial.ttf'),
        size:12,
        color:'red',
        colorspace:'grey'
      }
		);
		pageModifier1.endContext().writePage();

    // prints page
    pdfWriter.end();



});


module.exports = router;
