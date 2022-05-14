(function(window, document) {
    window.onload = function() {
        //get required DOM elements
        var slideContainer = document.querySelector(".container");
        var imgSlide = document.querySelector(".slide");
        var prev = document.querySelector(".prev");
        var next = document.querySelector(".next");
        var dot = document.querySelector(".dot");

        //dynamically create imgs
        for (var i = 0; i < 4; i++) {
            var li = document.createElement("li");
            var img = document.createElement("img");
            img.src = "./static/img/slideshow" + i + ".jpg";
            li.appendChild(img);
            li.setAttribute("class", "fade");
            imgSlide.appendChild(li);
        }
        //dynamically create dots
        for (var i = 0; i < imgSlide.children.length; i++) {
            var li = document.createElement("li");
            li.setAttribute("index", i);
            dot.appendChild(li);
            //click dot to show pictures with the same index
            li.addEventListener("click", function() {
                for (var i = 0; i < imgSlide.children.length; i++) {
                    imgSlide.children[i].style.display = "none";
                }
                imgSlide.children[this.getAttribute("index")].style.display = "block";
            });
        }


        //click arrow to show imgs
        next.addEventListener("click", function() {
            var index = 0;
            for (var i = 0; i < imgSlide.children.length; i++) {
                if (imgSlide.children[i].style.display == "block") {
                    index = i;
                }
            }
            console.log(index);
            if (index >= imgSlide.children.length - 1) {
                imgSlide.children[index].style.display = "none";
                imgSlide.children[0].style.display = "block";
            } else {
                imgSlide.children[index].style.display = "none";
                imgSlide.children[index + 1].style.display = "block";
            }


        });
        prev.addEventListener("click", function() {
            var index = 0;
            for (var i = 0; i < imgSlide.children.length; i++) {
                if (imgSlide.children[i].style.display == "block") {
                    index = i;
                }
            }
            console.log(index);
            if (index < 1) {
                imgSlide.children[index].style.display = "none";
                imgSlide.children[imgSlide.children.length - 1].style.display = "block";
            } else {
                imgSlide.children[index].style.display = "none";
                imgSlide.children[index - 1].style.display = "block";
            }

        });

        //show and hide dots and arrow when mouse over and out
        slideContainer.addEventListener("mouseenter", function() {
            prev.style.display = "inline-block";
            next.style.display = "inline-block";
            dot.style.display = "block";
        });
        slideContainer.addEventListener("mouseleave", function() {
            prev.style.display = "none";
            next.style.display = "none";
            dot.style.display = "none";
        });
    }
})(window, document);