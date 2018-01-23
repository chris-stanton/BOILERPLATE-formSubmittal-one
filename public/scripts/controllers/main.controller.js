
myApp.controller('MainController',['EmailFactory', '$scope', 'alertify', function(EmailFactory, $scope, alertify) {

  console.log('MainController running...');

  // setting notifiaction screen position
  // alertify.logPosition('bottom, right');
  // defining this
  const self = this;

  self.submitRequest = (form) => {
    console.log(form);
  }

self.errorMessage = "errors go here"


}]); // end myAPP.controller
