;(function() {
const validateFields = (form, fieldsArray) => {
    fieldsArray.forEach(field => {
      field.removeClass("input-error");
      if (field.val().trim() == "") {
        field.addClass("input-error");
      } 
    })
  
    const errorFields = form.find(".input-error");
  
    return errorFields.length==0;
  }
  
  
  $(".form__content").submit (e => {
    e.preventDefault();
  
    const form = $(e.currentTarget);
    const name = form.find("[name='name']");
    const mobile = form.find("[name='mobile']");
    const comment = form.find("[name='comments']");
    const to = form.find("[name='to']");
    const modal = $("#modalform");
    const content = modal.find(".modalform__message");
  
    modal.removeClass("error-modal");
    const isValid=validateFields(form, [name, mobile, comment, to]);
  
    if (isValid) {
      const request = $.ajax({
        url: "https://webdev-api.loftschool.com/sendmail",
        method: "post",
        data: {
          name: name.val(),
          phone: mobile.val(),
          comment: comment.val(),
          to: to.val()
        },
      });
      request.done((data) => {
        content.text(data.message);
      });
      request.fail(data => {
        const message = data.responseJSON.message;
        content.text(message);
        modal.addClass("error-modal");
        
      });
      request.always(() => {
        $.fancybox.open ({
          src: '#modalform',
          type: 'inline'
        });
      });
    }
  });
  
  $(".app-close-btn").click(e => {
    e.preventDefault();
  
    $.fancybox.close()
  });
})()  

