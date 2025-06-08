        const stage = new createjs.Stage("canvas");
        const w = stage.canvas.width;
        const h = stage.canvas.height;

        // Texto centrado
        var text = new createjs.Text(
        
             
        );
        text.textAlign = "center";
        text.x = w / 2;
        text.y = h / 2 - text.getMeasuredLineHeight();
        stage.addChild(text);

        // Función para generar corazones
        function createHeart() {
            let heart = new createjs.Shape();
            heart.graphics.beginFill(getRandomColor()).drawPolyStar(0, 0, 10, 5, 0.6, -90);
            heart.x = Math.random() * w;
            heart.y = h + 20;
            stage.addChild(heart);

            createjs.Tween.get(heart)
                .to({ y: -20, alpha: 0 }, 5000 + Math.random() * 3000)
                .call(() => stage.removeChild(heart));
        }

        // Función para colores aleatorios
        function getRandomColor() {
            const colors = ["#ff4d6d", "#ff758f", "#ff92a5", "#ffb3c1", "#ffccd5"];
            return colors[Math.floor(Math.random() * colors.length)];
        }

        createjs.Ticker.framerate = 30;
        createjs.Ticker.addEventListener("tick", () => {
            if (Math.random() < 0.3) createHeart();
            stage.update();
        });
