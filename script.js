function initMap() {
    // Configurações do mapa
    var options = {
        zoom: 14,
        center: { lat: 0.0344566, lng: -51.0666 }
    };

    // Inicialização do mapa
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Dados dos marcadores
    var markersData = [
        {
            position: { lat: 0.028660768067982074, lng: -51.05526423376328 },
            content: `
                <div style="text-align: left; background-color:#4EF279;  padding: 10px; border-radius: 10px; ">
                    <img src="./assets/imageMapView/GinásioTrem.webp" alt="Trem Desportivo Club" style="width: 200px; height: auto; margin-top: 0%; border-radius: 15px;">
                    <h1 class="text-2xl mt-4 mb-2 font-bold">Ginásio do Trem</h1>
                     <h3 class="text-1xls font-black">Bairro: Trem</h3>
                    <button onclick="window.location.href='https://chat.whatsapp.com/CSPUglYmrJwFbZ7mqE1p3u';"  style="margin-top: 10px; padding: 10px 15px; background-color: #2762B8; color: white; border: none; border-radius: 5px; cursor: pointer;">Ver mais</button>
                </div>
            `,
            
        },
        {
            position: { lat: 0.038501528752927755, lng: -51.04907718193669 },
            content: `
                <div style="text-align: left; background-color:#4EF279;  padding: 10px; border-radius: 10px; ">
                    <img src="./assets/imageMapView/JaciBarata.avif" alt="Trem Desportivo Club" style="width: 200px; height: auto; margin-top: 0%; border-radius: 15px;">
                    <h1 class="text-2xl mt-4 mb-2 font-bold">Jaci Barata</h1>
                     <h3 class="text-1xls font-black">Bairro: Central</h3>
                    <button onclick="window.location.href='https://chat.whatsapp.com/CSPUglYmrJwFbZ7mqE1p3u';"  style="margin-top: 10px; padding: 10px 15px; background-color: #2762B8; color: white; border: none; border-radius: 5px; cursor: pointer;">Ver mais</button>
                </div>
            `,
        },
        {
            position: {lat: 0.04963891883540675, lng: -51.05936196578112 },
            content: `
                <div style="text-align: left; background-color:#4EF279;  padding: 10px; border-radius: 10px; ">
                    <img src="./assets/imageMapView/Talentusarena.png" alt="Trem Desportivo Club" style="width: 200px; height: auto; margin-top: 0%; border-radius: 15px;">
                    <h1 class="text-2xl mt-4 mb-2 font-bold">Arena Talentus</h1>
                    <h3 class="text-1xls font-black">Bairro: Jesus de Nazaré</h3>
                    <button onclick="window.location.href='https://chat.whatsapp.com/CSPUglYmrJwFbZ7mqE1p3u';"  style="margin-top: 10px; padding: 10px 15px; background-color: #2762B8; color: white; border: none; border-radius: 5px; cursor: pointer;">Ver mais</button>
                </div>
            `,
        },
        {
            position: {lat: 0.08236982375231279, lng: -51.07582949185539},
            content: `
                <div style="text-align: left; background-color:#4EF279;  padding: 10px; border-radius: 10px; ">
                    <img src="./assets/imageMapView/boneazul.jpeg" alt="Trem Desportivo Club" style="width: 205px; height: auto; margin-top: 0%; border-radius: 15px;">
                    <h1 class="text-2xl mt-4 mb-2 font-bold">Complexo Boné Azul</h1>
                    <h3 class="text-1xls font-black">Bairro: Boné Azul</h3>
                    <button onclick="window.location.href='https://chat.whatsapp.com/CSPUglYmrJwFbZ7mqE1p3u';"  style="margin-top: 10px; padding: 10px 15px; background-color: #2762B8; color: white; border: none; border-radius: 5px; cursor: pointer;">Ver mais</button>
                    
                </div>
            `,
        },
    ];

    // Adiciona os marcadores ao mapa
    markersData.forEach((data) => {
        var marker = new google.maps.Marker({
            position: data.position,
            map: map,
        });

        var infoWindow = new google.maps.InfoWindow({
            content: data.content,
        });

        marker.addListener('click', function () {
            infoWindow.open(map, marker);
        });
    });
}
