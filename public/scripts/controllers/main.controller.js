
myApp.controller('MainController',['EmailFactory', '$scope', function(EmailFactory, $scope) {

  console.log('MainController running...');

  const self = this;

  self.submitRequest = (form) => {
    console.log(form);
    if(form.firstName == undefined) {
      self.errorMessage = 'Missing First Name';
    } else if(form.lastName == undefined){
      self.errorMessage = 'Missing Last Name';
    } else if(form.contactAddress == undefined){
      self.errorMessage = 'Missing Street Address';
    } else if(form.contactCity == undefined){
      self.errorMessage = 'Missing City';
    } else if(form.contactState == undefined){
      self.errorMessage = 'Missing State';
    } else if(form.contactZip == undefined){
      self.errorMessage = 'Missing Zip Code';
    } else if(form.contactEmail == undefined){
      self.errorMessage = 'Missing or invalid Email';
    } else if(form.contactPhone == undefined){
      self.errorMessage = 'Missing Phone Number';
    } else if(form == undefined){
      self.errorMessage = 'Please complete the form';
    } else {
      EmailFactory.postForm(form);
    };

  };




}]); // end myAPP.controller
