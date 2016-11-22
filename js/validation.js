function validation(form,constraints){
	//remove whole fa class
	var errorClass = document.getElementsByClassName("fa");

	for( key in constraints ){
		var type = constraints[key]['format']['type'];
		var $object = document.querySelector(type+'[name="'+key+'"]');
		if($object.value !== ''){
			var eltxt = constraints[key]['format']['errorMessage'];
			var str = $object.value;
            var patt = new RegExp(constraints[key]['format']['pattern']);
            if(!patt.test(str)){
            	//regex false
            	$object.insertAdjacentHTML('beforebegin', '<i class="fa fa-warning error";>'+eltxt+'</i>'); 
            };
		}else{
		  //value is empty but it should be required
		  var requiredIs = constraints[key]['format']['required'];
		  var eltxt = constraints[key]['format']['emptyMessage'];
		  if(requiredIs){
		  	$object.insertAdjacentHTML('beforebegin', '<i class="fa fa-warning error">'+eltxt+'</i>'); 
		  }
		  
		}
	}

	//檢查有沒有錯誤
	if(errorClass.length == 0){
		return true;
	}else{
		return false;
	}

  function init(){
  	 var div = document.getElementById(form);
  	 //clear all error
  	 	Element.prototype.remove = function() {
  	     this.parentElement.removeChild(this);
  	 	}
  	 	NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
  	 	    for(var i = this.length - 1; i >= 0; i--) {
  	 	        if(this[i] && this[i].parentElement) {
  	 	            this[i].parentElement.removeChild(this[i]);
  	 	        }
  	 	    }
  	 	}
  	 	errorClass.remove();
     document.querySelector('input,textarea').value = '';
  }

  return {
    init:init
  }
}

var valiform = validation();
valiform.init();

/*regex reference
    numericRegex = /^[0-9]+$/,
    integerRegex = /^\-?[0-9]+$/,
    decimalRegex = /^\-?[0-9]*\.?[0-9]+$/,
    emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    alphaRegex = /^[a-z]+$/i,
    alphaNumericRegex = /^[a-z0-9]+$/i,
    alphaDashRegex = /^[a-z0-9_\-]+$/i,
    naturalRegex = /^[0-9]+$/i,
    naturalNoZeroRegex = /^[1-9][0-9]*$/i,
    ipRegex = /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i,
    base64Regex = /[^a-zA-Z0-9\/\+=]/i,
    numericDashRegex = /^[\d\-\s]+$/,
    urlRegex = /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
    dateRegex = /\d{4}-\d{1,2}-\d{1,2}/;

*/

