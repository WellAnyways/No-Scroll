//Variables
let bg_version = getUrlParameter('bg'),
    qls = getUrlParameter('qls'),
    form = getUrlParameter('form'),
    video = getUrlParameter('video'),
    hero= $('.main-container'),
    submitButton = $('[data-submit-button]'),
    modalButton = $('[data-videoModal]'),
    modalCloseButton = $('[data-videoModalClose]');

//Scroll Anim init
AOS.init();


//Update hero based on Variant
switch(bg_version) {
  case '1':
    $(hero).addClass('main-background-v1');
  break;
  case '2':
    $(hero).addClass('main-background-v2');
  break;
  case '3':
    $(hero).addClass('main-background-v3');
  break;
  case '4':
    $(hero).addClass('main-background-v4');
  break;
  case '5':
    $(hero).addClass('main-background-v5');
  break;
  default:
    $(hero).addClass('main-background-v1');
}

//Show video if flaged in url
if(video == '1'){ showVideo();}
// Show form if form is fagged
if(form == '1'){
  showForm();
  $('input')[0].focus();
}

//Click events
$(document).ready(function() {
  //Get Started Button
  submitButton.click(function() {
    let baseUrl = 'https://www.rocketmortgage.com/l2/bamv2';
    if(form = '1') {
      let data = $('form').serializeArray();
      alert(
        'Process your form and submit here.\n'
      + data[0].name + ': '+ data[0].value);
    }
    else  {
      window.location = baseUrl + '?qls=' + qls;
    }

  });
  //Modal Open
  modalButton.click(function() {
    $('.modal-bg').removeClass('u-Hide');
    $('.modal-bg').addClass('d-flex');
  });
  //Modal Close
  modalCloseButton.click(function() {
    $('.modal-bg').addClass('u-Hide');
    $('.modal-bg').removeClass('d-flex');
  });
});


//Functions
function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
  }
};

function showVideo() {
  $(videoContainer).removeClass('u-Hide');
  $(videoContainer).addClass('d-Flex');
}

function showForm() {
  $('form').removeClass('u-Hide');
  $('form').addClass('d-Flex');
}
