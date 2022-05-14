(function(window, document) {
    window.onload = function() {
        //animate fn
        function animate(obj, targetPosition, callback) {
            if (obj.timer) { clearInterval(obj.timer); }
            //timer to move
            obj.timer = setInterval(function() {
                    var step = (targetPosition - obj.offsetLeft) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    if (obj.offsetLeft >= targetPosition) {
                        clearInterval(obj.timer);
                    }
                    obj.style.left = step + obj.offsetLeft + "px";
                    if (callback) {
                        callback();
                    }
                },
                20);


        }
        //click on p to animate,change p content to right arrow when animate finished
        var p = document.querySelector("p");
        var div = document.querySelector(".feedback");
        p.addEventListener("mouseenter", function() {
            //console.log("1");
            animate(div, p.offsetWidth, function() {
                p.innerHTML = "⬅";
            });
        });
        //click again to go back and change p content to left arrow when finished
        p.addEventListener("mouseleave", function() {
            animate(div, -1000, function() {
                p.innerHTML = "➡";
            });
        });
    }
})(window, document);