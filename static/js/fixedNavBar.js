(function(window, document) {
    window.onload = function() {
        var header = document.querySelector("#header");
        var banner = document.querySelector("section");
        var main = document.querySelector("main");
        var btn = document.querySelector("#button");
        var sidebar = document.querySelector("#sidebar");
        //console.log(header, banner, main, btn, sidebar);
        function animate(obj, targetPosition, callback) {
            if (obj.timer) { clearInterval(obj.timer); }
            //timer to move
            obj.timer = setInterval(function() {
                    var step = (targetPosition - window.scrollY) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    if (window.scrollY >= targetPosition) {
                        clearInterval(obj.timer);
                    }
                    window.scroll(0, window.scrollY + step);
                },
                20);
            callback && callback();

        }
        document.addEventListener("scroll", function() {
            //fix sidebar after scroll up some distance
            if (window.scrollY >= (header.offsetHeight + banner.offsetHeight)) {
                sidebar.style.position = "fixed";
                sidebar.style.top = "0";
            } else {
                sidebar.style.position = "absolute";
                sidebar.style.top = "600px";
            }
            //show go   back button after reaching the bottom
            if (window.scrollY >= (header.offsetHeight + banner.offsetHeight)) {
                btn.style.display = "block";
                btn.style.position = "fixed";
                btn.style.top = "400px";
            } else {
                btn.style.display = "none";
                btn.style.position = "absolute";
            }
        });
        btn.addEventListener("click", function() {
            animate(window, 0);
        });
    }
})(window, document)