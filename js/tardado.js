
        const canvas = document.getElementById("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const stage = new createjs.Stage("canvas");
        const w = stage.canvas.width;
        const h = stage.canvas.height;
        

        // Texto centrado
        var text = new createjs.Text(
            
        );
        text.textAlign = "center";
        text.x = w / 2;
        text.y = h / 2 - 20;
        stage.addChild(text);

        // Función para generar estrellas
        function createStar() {
            let star = new createjs.Shape();
            star.graphics.beginFill(getRandomColor()).drawPolyStar(0, 0, 10, 5, 0.6, -90);
            star.x = Math.random() * w;
            star.y = h + 20;
            star.scaleX = star.scaleY = Math.random() * 3.9 + 0.5; // Tamaño aleatorio
            stage.addChild(star);

            createjs.Tween.get(star)
                .to({ y: -20, alpha: 0 }, 5000 + Math.random() * 3000)
                .call(() => stage.removeChild(star));
        }

        // Función para colores aleatorios
        function getRandomColor() {
            const colors = ["#ff4d6d", "#ff758f", "#ff92a5", "#ffb3c1", "#ffccd5"];
            return colors[Math.floor(Math.random() * colors.length)];
        }

        createjs.Ticker.framerate = 30;
        createjs.Ticker.addEventListener("tick", () => {
            if (Math.random() < 0.3) createStar();
            stage.update();
        });

        // Ajustar tamaño del canvas si la ventana cambia
        window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        stage.canvas.width = canvas.width;
        stage.canvas.height = canvas.height;
        stage.update();
        });
    


