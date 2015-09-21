/*
 * jQuery Bootstrap Modal custom plugin
 * Auth : Arifur Rahman
 * Email : hmarifur@gmail.com
 * Requirements : Jquery Lib , Bootstrap Css
 
*/


(function($) {

  $.fn.Modal = function(options) {
    // This is the easiest way to have default options.
    var settings = $.extend({
      // These are the defaults.
      color: '#000', // Color text
      backgroundColor: '#fff', // Background color
      heading: '', // Modal heading text
      headingUnderLine: '', // Modal text
      body: '', // Modal text body
      closeButton: true, // Close button
      backdrop: '', // Modal backdrop
      borderRadius: '6px', // Modal border radius
      size: 'medium', // Modal size
      border: 'show',
      url: false,
      positionY: '10px'
    }, options);

    // Modal the collection based on the settings variable.
    //  var elem = $(this) ;
    //  $(this).bind('click.Modal', function() {
    //    funcCall(settings);
    //  });
    funcCall(settings);
  };


}(jQuery));

/* Bootstrap Modal generate function */
function funcCall(e) {

  var html = '<div style="" class="modal fade bs-example-modal-sm" id="modalCall" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true"><div class="modal-dialog modal-md"><div class="modal-content" style="padding: 12px"><h3></h3><h4 style=""></h4><div class="clearfix">&nbsp;</div><div class="modal-body"></div><div class="col-xs-12 text-right"><button type="button" class="close-btn btn btn-danger btn-sm" data-dismiss="modal">Close</button></div><br><br></div></div></div>';

  $('body').prepend(html);
  $('#modalCall').find('div.modal-content').css({
    'border-radius': e.borderRadius
  });
  $('#modalCall').find('div.modal-content').css({
    'background-color': e.backgroundColor
  });
  // Position-y
  $('#modalCall').find('div.modal-content').css({
    'top': e.positionY
  });
  // Border hide
  if (e.border == 'hide') {
    $('#modalCall').find('div.modal-content').css({
      'webkit-box-shadow': '',
      'box-shadow': '',
      'border': 'none',
      'webkit-box-shadow': 'none',
      'box-shadow': 'none'
    });
  }
  //
  $('#modalCall').find('div.modal-content').css({
    'color': e.color
  });
  $('#modalCall').find('div.modal-content').find('h3').html(e.heading);
  $('#modalCall').find('div.modal-content').find('h4').html(e.headingUnderLine);

  $('#modalCall').find('div.modal-body').html(e.body);

  //$('#modalCall').find('div.modal-body').html(e.body);

  /* Modal size */
  if (e.size == 'small') {
    $('#modalCall').find('div.modal-dialog').addClass('modal-sm');
    $('#modalCall').find('div.modal-content').addClass('modal-sm');
  }
  if (e.size == 'medium') {
    $('#modalCall').find('div.modal-dialog').addClass('modal-md');
    $('#modalCall').find('div.modal-content').addClass('modal-md');
  }
  if (e.size == 'large') {
    $('#modalCall').find('div.modal-dialog').addClass('modal-lg');
    $('#modalCall').find('div.modal-content').addClass('modal-lg');
  }
  /* Modal size */
  // Close button show / hide
  if (e.closeButton === false) {
    $('.close-btn').addClass('hide');
  }
  // Backdrop modal Backdrop
  $('#modalCall').modal({
    'backdrop': e.backdrop
  });

  $('#modalCall').on('hidden.bs.modal', function(e) {
    $('#modalCall').remove();
  });
}
