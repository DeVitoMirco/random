$(document).ready(function () {
    $(function () {

        $(window).bind('load', function () {
        $('.r').each(function (i) {
            $(this).css("background-image", 'url("https://picsum.photos/1920/1080?random=' + Math.random() + '")');
        });
        $('.r').each(function (i) {
            $(this).css("display", 'flex'); 
        });
        fetcht(".a .text");
        fetcht(".b .text");
        fetcht(".c .text");
        fetcht(".d .text");
        fetcht(".e .text");
        fetcht(".f .text");
        fetcht(".g .text");

        });
    });
    $('.page').each(function (i, e) {
        var $this = $(this);
        $(this).click(function (event) {
          
            var x = event.pageX;
            var y = event.pageY;
            var nextItem = i + 1;
            if (nextItem >= $('.page').length) {
                nextItem = 0;
            }
            $('.page:eq(' + nextItem + ')').css('z-index', parseInt($(this).css('z-index')) + 1);
            $('.page:eq(' + nextItem + ')').css('clip-path', 'circle(0% at ' + x + 'px ' + y + 'px)');

            if ($this.hasClass("a")) {
                $(".h").css("background-image", 'url("https://picsum.photos/1920/1080?random=' + Math.random() + '")');
                
                fetcht(".h .text");

            }
            if ($this.hasClass("b")) {
                $(".a").css("background-image", 'url("https://picsum.photos/1920/1080?random=' + Math.random() + '")');
                fetcht(".a .text");
            }

            if ($this.hasClass("c")) {
                $(".b").css("background-image", 'url("https://picsum.photos/1920/1080?random=' + Math.random() + '")');
                fetcht(".b .text");
            }
            if ($this.hasClass("d")) {
                $(".c").css("background-image", 'url("https://picsum.photos/1920/1080?random=' + Math.random() + '")');
                fetcht(".c .text");
            }
            if ($this.hasClass("e")) {
                $(".d").css("background-image", 'url("https://picsum.photos/1920/1080?random=' + Math.random() + '")');
                fetcht(".d .text");
            }
            if ($this.hasClass("f")) {
                $(".e").css("background-image", 'url("https://picsum.photos/1920/1080?random=' + Math.random() + '")');
                fetcht(".e .text");
            }

            if ($this.hasClass("g")) {
                $(".f").css("background-image", 'url("https://picsum.photos/1920/1080?random=' + Math.random() + '")');
                fetcht(".f .text");
            }

            if ($this.hasClass("h")) {
                $(".g").css("background-image", 'url("https://picsum.photos/1920/1080?random=' + Math.random() + '")');
                fetcht(".g .text");
            }
            anime({
                targets: $('.page')[nextItem],
                update: function (anim) {
                    $('.page:eq(' + nextItem + ')').css('clip-path', 'circle(' + (anim.progress * 2) + '% at ' + x + 'px ' + y + 'px)');
                }
            });


        });

    });

    function fetcht(div) {
        fetch('https://uselessfacts.jsph.pl/random.json?language=en')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                $(div).html(data.text);
                console.log(data.text)
            });


    }
  
});