// Add your custom JavaScript for storefront pages here.
function shouldShowPopup() {
  const lastClose = localStorage.getItem('popupClosedAt');
  if (!lastClose) return true;

  const lastCloseDate = new Date(lastClose);
  const now = new Date();
  const oneDay = 24 * 60 * 60 * 1000; // Um dia em milissegundos

  return (now - lastCloseDate) > oneDay;
}

$(document).ready(function() {
  if (shouldShowPopup()) {
      setTimeout(function() {
          $('#apx_popup-box').modal('show');
      }, 5000);
  }
});

$('#apx_popup-box').on('hidden.bs.modal', function () {
  localStorage.setItem('popupClosedAt', new Date().toISOString());
});


const EcomPassport = require('@ecomplus/passport-client');
const client = EcomPassport.ecomPassport.getCustomer();   

if(client.display_name){
  $('[data-username]').text(client.display_name || `Visitante` )
  $(`[data-isnotlogged]`).hide()
}else{
  $(`[data-islogged]`).hide()
}