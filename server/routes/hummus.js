
DotEnv = require('dotenv-node');
new DotEnv();
const router = require('express').Router();
const path = require('path');
const hummus = require('hummus');



router.post('/sendEmail', function(req, res){
  let form = req.body;


		var pdfWriter = hummus.createWriterToModify(__dirname + './vet.pdf', {
			modifiedFilePath: __dirname + './server/pdf/'+ form.firstName + form.lastName + '.pdf'
		});

		var pageModifier = new hummus.PDFPageModifier(pdfWriter,0);

    pageModifier.startContext().getContext().writeText(
			'Test Text',
			75, 805,
			{size:14,colorspace:'grey',color:0x00}
		);

		pageModifier.endContext().writePage();
		pdfWriter.end();



});


module.exports = router;
