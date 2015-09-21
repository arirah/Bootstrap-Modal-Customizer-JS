# Bootstrap-Modal-Customizer-JS-
Simple js file for modal content customization. 
By - Arifur Rahman


Installation :
---------------------------------------

Bootstrap Modal customizer installation is very easy and simple . After downloading .zip archive file extract it into your project folder.

<script src="js/bootstrap-modal.min.js"></script>
  <script>
  $('.button-1').click(function(){
    $.fn.Modal({
      'body': '<h1 class="text-center"> Close button hide </h1> please refresh',
      'closeButton' : false
    });
  });

  </script>
  
  
  
How to use : 
--------------------------------------

Change modal size by changing size parameter . Available size are small ,  medium and large  

Example 1 : 
---------------------------------------

$.fn.Modal({
        'body': 'Body text',
        'size' : 'medium'
      });
      
      
Example 2 : 
---------------------------------------
$.fn.Modal({
        'body': 'Body text',
        'size' : 'small'
      });
      
      
Example 3 : 
----------------------------------------
$.fn.Modal({
        'body': 'Body text',
        'size' : 'large'
      });
