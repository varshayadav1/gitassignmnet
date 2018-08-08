$(document).ready(function() {
    $.validator.addMethod("special",function(value,char)
    {
      return this.optional(char)||/^[a-z0-9\_]+$/i.test(value)},""),
   $.validator.addMethod("lower",function(value,char)
     {
       return this.optional(char)||/[a-z]+/.test(value)},""),
   $.validator.addMethod("uper",function(value,char)
     {
       return this.optional(char)||/[A-Z]+/.test(value)},""),

//    $.validator.addMethod("pwcheck", function (value,char) {
//     return /[\@\#\$\%\^\&\*\(\)\_\+\!]/.test(value) && /[a-z]/.test(value) && /[0-9]/.test(value) && /[A-Z]/.test(value)
// });

  $('form[id="signin_form"]').validate({
    rules: {
     
      email: {
        required: true,
        email: true,
      },
      password:{
         required:(!0),
         minlength:(8),
         special:(!0),
         lower:(!0),
         uper:(!0)          
       }
    },
    messages: {
      email: 'Enter a valid email',
      password:{
         required:"Must contain at least one number , one uppercase and lowercase letter ,no special char, and at least 8 or more characters", minlength:"Length greater than 8", special:"No special char",lower:"One Lower case alphabet", uper:"One Upper case Alphabet"
           }
    },
    submitHandler: function(form) {
      form.submit();
    }
  });

});
