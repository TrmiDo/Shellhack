window.onload = function () {

    // GET THE IMAGE.
    var img = new Image();
    img.src = "simple_map";

    // WAIT TILL IMAGE IS LOADED.
    img.onload = function () {
        fill_canvas(img);       // FILL THE CANVAS WITH THE IMAGE.
    }

    function fill_canvas(img) {
        // CREATE CANVAS CONTEXT.
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');

        canvas.width = 1500;
        canvas.height = 720;
        window.onload = function () {

        // GET THE IMAGE.
        var img = new Image();
        img.src = "simple_map.png";

        // WAIT TILL IMAGE IS LOADED.
        img.onload = function () {
            fill_canvas(img);       // FILL THE CANVAS WITH THE IMAGE.
        }

        function fill_canvas(img) {
            // CREATE CANVAS CONTEXT.
            var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext('2d');

            canvas.width = "1500px";
            canvas.height = "720px";

            ctx.drawImage(img, 0, 0);       // DRAW THE IMAGE TO THE CANVAS.
        }
    }

        ctx.drawImage(img, 0, 0);       // DRAW THE IMAGE TO THE CANVAS.
    }
}

