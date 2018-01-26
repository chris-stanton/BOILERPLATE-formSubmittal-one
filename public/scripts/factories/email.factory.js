
myApp.factory('EmailFactory',['$http', '$window', 'alertify',function($http, $window, alertify) {

  console.log('EmailFactory Running...');

  // setting notifiaction screen position
  alertify.logPosition('bottom, right');

  function postForm(form) {
    alertify.success('Sending request')
    $http({
      method: 'POST',
      url: '/hummus/sendEmail',
      data: form
    }).then(function(response){
      alertify.success('Form has been submitted');
    }).catch(function(error) {
      alertify.error('Error sending form. Pleae try again')
      console.log('error sending email request to server: ', error);
    });
  };


//public API
  return {
    postForm : postForm
  };


}]);
