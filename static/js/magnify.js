(function(window, document) {
    window.onload = function() {
        var box = document.querySelector("#box");
        var mask = document.querySelector("#mask");
        var bigBox = document.querySelector("#big");
        var img = document.querySelector("img");
        var boxX = box.offsetLeft;
        var boxY = box.offsetTop;

        //reveal mask when mouse over
        box.addEventListener("mouseover", function(e) {
            mask.style.display = "block";
            bigBox.style.display = "block";
        });

        //hide mask on mouse out
        box.addEventListener("mouseout", function() {
            mask.style.display = "none";
            bigBox.style.display = "none";
            //box.removeEventListener("mousemove");
        });

        //move mask when mouse moving
        box.addEventListener("mousemove", function(e) {
            //calculate relative position of cursor to the box
            var x = e.pageX;
            var y = e.pageY;
            var fixedX = x - boxX;
            var fixedY = y - boxY;
            //make cursor to the center of the mask
            mask.style.left = fixedX - 100 + "px";
            mask.style.top = fixedY - 100 + "px";
            var maskX = mask.offsetWidth;
            var maskY = mask.offsetHeight;
            //make sure mask don't go over the boundary of the box
            if (mask.offsetLeft <= 0) {
                mask.style.left = 0 + "px";
            } else if (mask.offsetLeft >= (box.offsetWidth - maskX)) {
                mask.style.left = "200px";
            }
            if (mask.offsetTop <= 0) {
                mask.style.top = "0px";
            } else if (mask.offsetTop >= (box.offsetHeight - maskY)) {
                mask.style.top = (box.offsetHeight - maskY) +
                    "px";
            }

            //magnified picture--mask offset/mask max movement distance = img offset/img max movement distance 
            var bigPicX = mask.offsetLeft / (box.offsetWidth - maskX) * (img.offsetWidth - bigBox.offsetWidth);
            var bigPicY = mask.offsetTop / (box.offsetHeight - maskY) * (img.offsetHeight - bigBox.offsetHeight);
            img.style.left = "-" + bigPicX + "px";
            img.style.top = "-" + bigPicY + "px";
        });
    }
})(window, document)