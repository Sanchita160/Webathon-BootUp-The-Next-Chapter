const lights = ["red", "green", "yellow"];
        let currentIndex = 0;

        function updateLights() 
        {
            lights.forEach(light => 
                {
                document.getElementById(light).style.background = "gray";
            });
            document.getElementById(lights[currentIndex]).style.background = lights[currentIndex];
            currentIndex = (currentIndex + 1) % lights.length;
        }

        document.getElementById("button").addEventListener("click", updateLights);
        updateLights(); 
