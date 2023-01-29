function PopUpHide() {
    document.getElementById('popupThanks').style.display = "none";
}
function PopUpShow() {
    document.getElementById('popupThanks').style.display = "flex";
}
function PopUpHideYoutube() {
    document.getElementById('popupYoutube').style.display = "none";
    $('iframe').attr('src', $('iframe').attr('src'));
    var stopAllYouTubeVideos = () => { 
        var iframes = document.querySelector('youtube');
        Array.prototype.forEach.call(iframes, iframe => { 
          iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', 
        func: 'stopVideo' }), '*');
       });
      }
      stopAllYouTubeVideos();
}
function PopUpShowYoutube() {
    document.getElementById('popupYoutube').style.display = "flex";
    $('.youtube').attr("src",$('.youtube').attr("data-src"));
}
$("a.avideo").click(function (e) {
    e.preventDefault();
    var targetpos = $($(this).attr('href')).position(); // note this line
    var scrollpos = targetpos.top - 120;
    window.scrollTo(0,scrollpos);
});
$('#form').submit(function (e) {

    function validateEmail(value) {
        return EMAIL_REGEXP.test(value);
    }

    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const INPUT = document.querySelector('.email');
    const name = document.querySelector('.name').value;
    const message = document.querySelector('.message').value;

    if (validateEmail(INPUT.value)) {
        if (name == '') {
            document.querySelector(".name").classList.add("error");
            document.querySelector(".erorName").style.display = "flex";
        }
        else {
            if (message == '') {
                document.querySelector(".message").classList.add("error");
                document.querySelector(".errorMessage").style.display = "flex";
            }
            else {
                e.preventDefault()
                e.stopImmediatePropagation()
                $.post(
                    '../main.php', // адрес обработчика
                    $("#form").serialize(), // отправляемые данные

                    function (msg) { // получен ответ сервера
                        PopUpShow();
                        document.querySelector(".name").value = "";
                        document.querySelector(".email").value = "";
                        document.querySelector(".message").value = "";
                    }
                );
            }

        }

    }
    else {
        document.querySelector(".email").classList.add("error");
        document.querySelector(".erorEmail").style.display = "flex";
    }

    return false;
});

window.onload = function () {
    //ищем элемент по селектору
    var a = document.querySelector('.email');
    var b = document.querySelector('.name');
    var c = document.querySelector('.message');

    //вешаем на него события
    a.onfocus = function (e) {
        document.querySelector(".erorEmail").style.display = "none";
        document.querySelector(".email").classList.remove("error");

    }
    b.onfocus = function (e) {
        document.querySelector(".erorName").style.display = "none";
        document.querySelector(".name").classList.remove("error");

    }

    c.onfocus = function (e) {
        document.querySelector(".errorMessage").style.display = "none";
        document.querySelector(".message").classList.remove("error");

    }

}



$(document).ready(function () {
    $('.single-item').slick({
        dots: false,
        arrows: false,
        adaptiveHeight: false,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    initialSlide: 1

                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    initialSlide: 1

                }
            }
        ]
    });
})
$('.single-item').on('afterChange', function(event, slick, direction){
    dataLayer.push({'event': 'carousel_about'});
    console.log("asdf");
  });

 

if (jQuery(window).width() < 920) {
    $('.slider2').removeClass('single-item2');
}

if (jQuery(window).width() < 1100) {
    $('#bigIcon').addClass('single-item3');
}
if (jQuery(window).width() < 1100) {
    $('#smallIcon').addClass('single-item4');
}
$(document).ready(function () {
    $('.single-item2').slick({
        dots: false,
        arrows: false,
        adaptiveHeight: false,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
})
$('.single-item2').on('afterChange', function(event, slick, direction){
    dataLayer.push({'event': 'carousel_cooking'});
  });

$(document).ready(function () {
    $('.single-item3').slick({
        dots: false,
        arrows: false,
        adaptiveHeight: false,

        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 520,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
})
$('.single-item3').on('afterChange', function(event, slick, direction){
    dataLayer.push({'event': 'carousel_online'});

});
$(document).ready(function () {
    $('.single-item4').slick({
        dots: false,
        arrows: false,
        adaptiveHeight: false,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 520,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
})
$('.single-item4').on('afterChange', function(event, slick, direction){
    dataLayer.push({'event': 'carousel_offline'});
  });
