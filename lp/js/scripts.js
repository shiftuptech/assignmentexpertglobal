/**************************Form Email *********************************** */
var path = window.location.pathname;
var page = path.split("/").pop();
const copyMailId = document.querySelectorAll('.mail-text');
copyMailId.forEach((copyText) => {
  copyText.addEventListener('click', () => {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(copyText);
    selection.removeAllRanges();
    selection.addRange(range);

    try {
      document.execCommand('copy');
      selection.removeAllRanges();
    } catch (e) {
      copyText.textContent = "Couldn't copy, hit Ctrl+C!";
      copyText.classList.add('error');

      setTimeout(() => {
        errorMsg.classList.remove('show');
      }, 1200);
    }
  });
});
/***************Coppy Email to clipboard ***************************************************/
$('.mail-text').click(function () {
  $('.mail-text').attr('data-tooltip', 'Copied to Clipboard');
  setTimeout(() => {
    $('.mail-text').attr('data-tooltip', 'Click to Copy');
  }, 2000);
});

/***************Lazy Load for page speed Optimization,Timer and Counter Used ******************/
$(function () {
  $('.lazyload').Lazy();
});

  /***************Timer for calculator and Modal Pop Up*********1E3 is notation for the mathematical expression 10^3*********/
  (second = 1e3),
  (minute = 60 * second),
  (hour = 60 * minute),
  (countDown = new Date().getTime() + 66e5),
  (x = setInterval(function () {
    (now = new Date().getTime()), (distance = countDown - now), distance < 1e3 && (countDown += 66e5), (document.getElementById('hours').innerText = Math.floor(distance / hour)), (document.getElementById('minutes').innerText = Math.floor((distance % hour) / minute)), (document.getElementById('seconds').innerText = Math.floor((distance % minute) / second)), (document.getElementById('hours_m').innerText = Math.floor(distance / hour)), (document.getElementById('minutes_m').innerText = Math.floor((distance % hour) / minute)), (document.getElementById('seconds_m').innerText = Math.floor((distance % minute) / second));
  }, second));
  /***************Counter for about section******************/
  $(window).on('scroll', function () {
    var t = 0,
      e = $('#counter').offset().top - window.innerHeight;
    0 == t &&
      $(window).scrollTop() > e &&
      ($('.counter-value').each(function () {
        var t = $(this),
          e = t.attr('data-count');
        $({
          countNum: t.text(),
        }).animate(
          {
            countNum: e,
          },
          {
            duration: 1e3,
            easing: 'swing',
            step: function () {
              t.text(Math.floor(this.countNum));
            },
            compvare: function () {
              t.text(this.countNum);
            },
          }
        );
      }),
      (t = 1));
  }),
  /***************Togle below 992 ***************************************************/
  $('.navigation-menu li a').click(function () {
    $(window).width() < 992 && $('.navbar-toggle').click();
  });
/***************Cookie bar ***************************************************/
let cookieModal = document.querySelector(".cookie-consent-modal")
let cancelCookieBtn = document.querySelector(".btn.cancel")
let acceptCookieBtn = document.querySelector(".btn.accept")

cancelCookieBtn.addEventListener("click", function (){
    cookieModal.classList.remove("active")
})
acceptCookieBtn.addEventListener("click", function (){
    cookieModal.classList.remove("active")
    localStorage.setItem("cookieAccepted", "yes")
})

setTimeout(function (){
    let cookieAccepted = localStorage.getItem("cookieAccepted")
    if (cookieAccepted != "yes"){
        cookieModal.classList.add("active")
    }
}, 2000)
/***************Ouibounce Modal Popup ***************************************************/
$(document).ready(function () {
  //Discount Modal popup
  var _ouibounce = ouibounce(document.getElementById('pop-up'), {
    aggressive: localStorage.getItem('discountmodal_pop') != 'shown',
  });
  // Get the modal
  var modal = document.getElementById('pop-up');

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      localStorage.setItem('discountmodal_pop', 'shown');
      modal.style.display = 'none';
    }
  };
  $(document).on('click', '.hide_discountmodal', function (e) {
    modal.style.display = 'none';
    localStorage.setItem('discountmodal_pop', 'shown');
  });

  //Mobile Menu close click event
  $('#topnav #nav_responsive.navbar-collapse.collapse a, #topnav #custom_navbar_xs #navbar_closer').click(function () {
    $('#topnav #nav_responsive').removeClass('show');
  });
  if ($('#topnav #nav_responsive').hasClass('show')) {
    $('body').addClass('body_overflow');
  }
});
/***********************************************/
$('.chaton').click(function () {
  LiveChatWidget.call('maximize');
  return false;
});
/************************Smoothh Scroll***********************/
$(document).on('click', 'a[href^="./#"]', function () {
  var __selector = this.getAttribute('href').split('#');
  $('html, body').animate(
    {
      scrollTop: $('#' + __selector[1]).offset().top - 40,
    },
    600
  );
});

$(document).on('click', 'a[href^="#"]', function () {
  $('html, body').animate(
    {
      scrollTop: $($.attr(this, 'href')).offset().top - 40,
    },
    600
  );
});

/************************ Calculator ************************/
(function () {
  function setPagesWordCount() {
    var wordCountPerPage = 275;

    $('.calcPagesDropdown > option').each(function () {
      var pageOptionText = $(this).prop('title');
      var pages = parseInt(pageOptionText);
      var wordCount = wordCountPerPage * pages;
      var lineSpacing = parseInt($('.calcLineSpacing:checked').val());
      if (lineSpacing === 1) {
        wordCount *= 2;
      }

      pageOptionText += ' / ' + wordCount + 'words';
      $(this).text(pageOptionText);
    });
  }

  // function changeWorkState() {
  //   var defaultWork = parseInt($('#calcWorkDefault').val());
  //   if (defaultWork === -1) {
  //     return;
  //   }

  //   $('.calcWork').val(defaultWork);
  //   changeLevelState();
  // }

  // function changeLevelState() {
  //   var selectedWork = parseInt($('.calcWork').val());
  //   if (selectedWork === 2 || selectedWork === 3) {
  //     $($('.calcLevel option')[2]).prop('selected', 'selected');
  //   } else if (selectedWork === 5 || selectedWork === 6 || selectedWork === 35) {
  //     $($('.calcLevel option')[3]).prop('selected', 'selected');
  //   }
  //   $('.calcSelect').trigger('change');
  // }

  function generateURL() {
    var work = parseInt($('.calcWork option:selected').val());
    var service = parseInt($('.calcService option:selected').val());
    var level = parseInt($('.calcLevel option:selected').val());
    var deadline = parseInt($('.calcDeadline option:selected').val());
    var pages = parseInt($('.calcPagesDropdown').val());
    var spacing = parseInt($('.calcLineSpacing:checked').val());
    var web = $('#calcWebURL').val();

    //var url = web + '/account/register?Service=' + work + '&ServiceType=' + service + '&Pages=' + pages + '&Level=' + level + '&Delivery=' + deadline + '&LineSpacingCode=' + spacing;
    var url ='?Service=' + work + '&ServiceType=' + service + '&Pages=' + pages + '&Level=' + level + '&Delivery=' + deadline + '&LineSpacingCode=' + spacing;
    var action = $("#lead_form_popup").prop("action");
    $("#lead_form_popup").prop("action" , action+url);

    $("#login").modal('show');

    //window.location.href = url;
  }

  function getBulkDiscountPercentage(bulkDiscountRange) {
    if (bulkDiscountRange.length === 0) {
      return 0;
    }

    var pages = parseInt($('.calcPagesDropdown').val());

    if ($('.calcLineSpacing').length !== 0) {
      var lineSpacing = parseInt($('.calcLineSpacing:checked').val());
      if (lineSpacing === 1) {
        pages = pages * 2;
      }
    }

    var maxDiscount = bulkDiscountRange[bulkDiscountRange.length - 1];
    if (pages > maxDiscount.max) {
      return maxDiscount.discount;
    }

    var pageDiscount = bulkDiscountRange.find(function (obj) {
      return pages >= obj.min && pages <= obj.max;
    });
    return pageDiscount.discount;
  }

  function calculatePrice(chart, websiteDiscountPercentage, pagesDiscountPercentage) {
    var serviceIndex = parseInt($('.calcService option:selected').val()) - 1;
    var levelIndex = parseInt($('.calcLevel option:selected').val()) - 1;
    var deadlineIndex = parseInt($('.calcDeadline option:selected').val()) - 1;
    var numOfPages = parseInt($('.calcPagesDropdown').val());
    var lineSpacing = parseInt($('.calcLineSpacing:checked').val());

    if (lineSpacing === 1) {
      numOfPages *= 2;
    }

    var totalPrice = chart[serviceIndex][levelIndex][deadlineIndex] * numOfPages;
    var discountedPrice = totalPrice - (websiteDiscountPercentage / 100.0) * totalPrice;
    var bulkDiscountedPrice = discountedPrice - (pagesDiscountPercentage / 100.0) * discountedPrice;

    return {
      totalPrice: totalPrice,
      discountedPrice: discountedPrice,
      bulkDiscountedPrice: bulkDiscountedPrice,
    };
  }

  var deadline_json_data = [{"id":1,"duration":15,"type":"days","label":"days"},{"id":2,"duration":10,"type":"days","label":"days"},{"id":3,"duration":7,"type":"days","label":"days"},{"id":4,"duration":5,"type":"days","label":"days"},{"id":5,"duration":4,"type":"days","label":"days"},{"id":6,"duration":3,"type":"days","label":"days"},{"id":7,"duration":48,"type":"hours","label":"hours"},{"id":8,"duration":24,"type":"hours","label":"hours"},{"id":9,"duration":12,"type":"hours","label":"hours"},{"id":10,"duration":6,"type":"hours","label":"hours"},{"id":11,"duration":3,"type":"hours","label":"hours"}];
  function set_deadline_json_data()
  {
      var _options = '';
      deadline_json_data.forEach(
          function(obj, index)
          {
              __dealine_date = new Date();
              if (obj.type=='days')
                  __dealine_date.setDate(__dealine_date.getDate()+obj.duration);
              else
                  __dealine_date.setHours(__dealine_date.getHours()+obj.duration);
              var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
              var _date = __dealine_date.getDate();
              var hr = __dealine_date.getHours();
              var min = __dealine_date.getMinutes();
              if (min < 10) {
                  min = "0" + min;
              }
              var ampm = "AM";
              if (hr >= 12) {
                  // hr -= 12;
                  ampm = "PM";
              }
              if (hr > 12) {
                  hr -= 12;
              }
              if (hr == 0) {
                  hr += 12;
              }
              var _month = months[__dealine_date.getMonth()];
              var _year = __dealine_date.getFullYear();
              __dealine_date = _month+' '+_date+', '+_year+' ('+hr+':'+min+' '+ampm+')';
              _options +='<option data-val="'+obj.id+'" value="'+obj.id+'">'+obj.duration+' '+obj.label+' / '+__dealine_date+'</option>';
          }
      );
      var current_ddl_d = $('select[name="Delivery"]').val();
      $('select[name="Delivery"]').html(_options);
      $('select[name="Delivery"]').val(current_ddl_d);
  }
  
  $(document).ready(function () {
    var priceChart = JSON.parse($('#calcPriceChartData').val());
    var discountPercentage = parseInt($('#calcDiscountPercentageDefault').val());
    var bulkDiscountRange = JSON.parse($('#calcBulkDiscountRangeData').val());

    if ($('#calculator_form').length > 0) {
      $('#calculator_form')[0].reset();
    }

    $('#calculator_form').on('keyup keypress', function (e) {
      var keyCode = e.keyCode || e.which;
      if (keyCode === 13) {
        e.preventDefault();
        return false;
      }
    });

    $('.calcPageMinus').click(function () {
      var quantity = parseInt($('.calcPagesDropdown').val());
      if (quantity > 1) {
        $('.calcPagesDropdown').val(quantity - 1);
        $('.calcSelect').trigger('change');
      }
    });

    $('.calcPagePlus').click(function (e) {
      var quantity = parseInt($('.calcPagesDropdown').val());
      if (quantity < 200) {
        $('.calcPagesDropdown').val(quantity + 1);
        $('.calcSelect').trigger('change');
      }
  
    });

    $('.calcLineSpacing').on('change', function () {
      setPagesWordCount();
    });

    $('.calcSelect').on('change', function () {
      var bulkDiscountPercentage = getBulkDiscountPercentage(bulkDiscountRange);
      bulkDiscountPercentage === 0 ? $('.calcPageDiscountSection').hide() : $('.calcPageDiscountSection').show();
      $('.calcBulkDiscountPercentage').text(bulkDiscountPercentage + '% OFF');

      var prices = calculatePrice(priceChart, discountPercentage, bulkDiscountPercentage);

      $('.calcTotalPrice > .amount').text(prices.totalPrice.toFixed(2));
      $('.calcDiscountedPrice > .amount').text(prices.discountedPrice.toFixed(2));
      $('.calcBulkDiscountedPrice > .amount').text(prices.bulkDiscountedPrice.toFixed(2));
    });

    $('.calcProceedBtn').on('click', function () {
      generateURL();
    });

    set_deadline_json_data();
    //changeWorkState();
  });
})();
/************************ Cookie for Adv compaign************************/
function setCookie(name, value, days) {
	 if (days > 0) {
	 	 var seconds = new Date().getTime() + 1000 * 60 * 60 * 24 * days;
	 	 var date = new Date(seconds).toUTCString();
	 	 document.cookie = name + '=' + value + '; expires=' + date + '; domain=' + window.location.host.replace('www.', '');
	 } else {
	 	 document.cookie = name + '=' + value + '; domain=' + window.location.host.replace('www.', '');
	 }
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

var url = window.location.href;
if (url.toLowerCase().indexOf('utm') !== -1 || url.toLowerCase().indexOf('campaign') !== -1) {
    $("#lead_form [name='ReferalURL']").val(url);
    setCookie('refferarURL', url);
}


/************************Faq collapse Script ************************/
$("#accordionExample .card .faq").click(function(){
   if ( $(this).attr('aria-expanded') == 'false' ){
    $(this).addClass("icon-active");
}
    else{
       $("#accordionExample .card .faq").removeClass("icon-active"); 
    }
});
/************************ Calculator Procesing till to website will be loaded ************************/
$(".calcProceedBtn").click(function(){
    $(".calcProceedBtn").html("Processing ...");
});
// /************************ OrderNow Href updated on LeadForm Signup ************************/
// function update_ordernow_link (data,q='')
// { 
//   $.each($("[href$='order.php']"), function (index, elem) {
//         var v = $(elem).attr('href');
//         // v = v.replace("register", "PlaceOrder");
//         $(elem).attr('href', v + "?data=" + data + '&'+q);
//     });
//     $.each($("[href$='login.php']"), function (index, elem) {
//         var v = $(elem).attr('href');
//         // v = v.replace("register", "PlaceOrder");
//         $(elem).attr('href', v + "?data=" + data + '&'+q);
//     });
//     $.each($(".shared_order"), function (index, elem) {
//         var v = $(elem).attr('href');
//         // v = v.replace("register", "PlaceOrder");
//         $(elem).attr('href', "./order.php?data=" + data + '&'+q);
//         $(elem).removeAttr('data-toggle');
//         $(elem).removeAttr('data-target');
//     });
// }
/************************ Lazy Load ************************/
$(function() {
    $('.lazy').Lazy();
});
const blck_discount = JSON.parse($('#calcBulkDiscountRangeData').val());

if (blck_discount.length === 0 || blck_discount[blck_discount.length - 1].discount === 0) {
  $(".banner_right_adj_1").hide();
} else {
  $(".banner_right_adj_1").show();
  $(".bl_dis").text(blck_discount[blck_discount.length - 1].discount);
}
/************************ Form Pop Up ************************/
$('.shared_order').attr({
    'href': 'javascript:void(0);',
    'data-target': '#login',
    'data-toggle': 'modal'
  });

/******************** Tawk.to Open Button ***********************/

$('.widget_button').attr('href', 'javascript:void(Tawk_API.toggle())');

