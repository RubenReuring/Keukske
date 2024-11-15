
function hotspotAction(e, data) {
    let currentHotspot = data.hotspot;
    let currentType = data.type;
    if(currentType === 'video-modal'){
        $('.room-videos').removeClass('inactive');
        $('.room-videos').addClass('active');
        setTimeout(function(){
            $('.room-videos').css('opacity', '1');
        },50)
        $('._360videocontainer.modal-active').removeClass('modal-active');
        $('._360videocontainer').each(function(){
            if($(this).find('.video-js').attr('id') === currentHotspot){
                $(this).addClass('modal-active').trigger('classChange');
            }
        })
    }
}

$('.video-js').each(function(){
    var player = videojs(this);
    let currentPlayer = $(this);
    $(currentPlayer).parents("._360videocontainer").find("._360vc-cb.play, ._360vc-cb.pause").on('click', function () {
        if(!player.paused()){
            player.pause();
            $('._360vc-cb.play').removeClass('videocontrolinactive')
            $('._360vc-cb.pause').addClass('videocontrolinactive')
        }
        else {
            player.play();
            $(this).parents("._360videocontainer").find('._360vc-cb.play').addClass('videocontrolinactive')
            $(this).parents("._360videocontainer").find('._360vc-cb.pause').removeClass('videocontrolinactive')
        }
    });
    $(currentPlayer).parents("._360videocontainer").find("._360vc_close").on('click', function(){
        player.currentTime(0);
        player.pause();
        $('._360vc-cb.play').addClass('videocontrolinactive')
        $('._360vc-cb.pause').removeClass('videocontrolinactive')
        $('.room-videos').css('opacity', '0');
        setTimeout(function(){
            $('.room-videos').addClass('inactive');
            $('.room-videos').removeClass('active');
            $('._360videocontainer').removeClass('modal-active');
        }, 750)
    })
    let isWaiting = false;
    $(currentPlayer).on('waiting', function(){ isWaiting = true; })
    $(currentPlayer).on('playing', function(){ isWaiting = false; })
    $(currentPlayer).parents("._360videocontainer").on('classChange', function () {
        setTimeout(function(){
            if(player.paused() && isWaiting === false){
                player.play();
            }
        },50)
    });
})

let viewer = pannellum.viewer("panorama", {
    default: {
        firstScene: "voorkant",
        sceneFadeDuration: 1000,
        hotSpotDebug: true,
        mouseZoom: false,
        keyboardZoom: false
    },
    scenes: {
        voorkant: {
            type: "equirectangular",
            panorama: "/spherestory/assets/the-spot/Scene 1.webp",
            autoLoad: true,
            showZoomCtrl: false,
            showFullscreenCtrl: false,
            pitch: -1.3,
            yaw: 121.5,
            hfov: 120,
            maxHfov: 120,
            hotSpots: [
                {
                    pitch: 4.2,
                    yaw: 292,
                    type: "scene",
                    cssClass: "custom-hotspot opdebar",
                    sceneId: 'opdebar'
                }
            ]
        },
        achterkant: {
            type: "equirectangular",
            panorama: "/spherestory/assets/the-spot/Scene 2.webp",
            autoLoad: true,
            showZoomCtrl: false,
            showFullscreenCtrl: false,
            pitch: -1.3,
            yaw: 121.5,
            hfov: 120,
            maxHfov: 120,
            hotSpots: [
                {
                    pitch: -17,
                    yaw: 181,
                    type: "scene",
                    cssClass: "custom-hotspot achterkant",
                    sceneId: 'achterkant'
                },
                {
                    pitch: -18,
                    yaw: 29,
                    type: "scene",
                    cssClass: "custom-hotspot voorkant",
                    sceneId: 'voorkant'
                }
            ]
        },
        opdebar: {
            type: "equirectangular",
            panorama:
                "/spherestory/assets/the-spot/Scene 4.webp",
            autoLoad: true,
            showZoomCtrl: false,
            showFullscreenCtrl: false,
            pitch: -1.3,
            yaw: 121.5,
            hfov: 120,
            maxHfov: 120,
            hotSpots: [
                {
                    pitch: -17,
                    yaw: 181,
                    type: "scene",
                    cssClass: "custom-hotspot achterkant",
                    sceneId: 'achterkant'
                },
                {
                    pitch: -18,
                    yaw: 29,
                    type: "scene",
                    cssClass: "custom-hotspot voorkant",
                    sceneId: 'voorkant'
                },
                {
                    pitch: -36,
                    yaw: 87,
                    type: "scene",
                    cssClass: "custom-hotspot opslag",
                    sceneId: 'opslag'
                }
            ]
        },
        achterdebar: {
            type: "equirectangular",
            panorama:
                "/spherestory/assets/the-spot/Scene 3.webp",
            autoLoad: true,
            showZoomCtrl: false,
            showFullscreenCtrl: false,
            pitch: -1.3,
            yaw: 121.5,
            hfov: 120,
            maxHfov: 120,
            hotSpots: [
                {
                    pitch: -6.15,
                    yaw: 153.7,
                    type: "info",
                    cssClass: "custom-hotspot flexibility-hotspot_lunchroom",
                    clickHandlerFunc: hotspotAction,
                    clickHandlerArgs: {hotspot: "flexibility-hotspot_lunchroom", type: "video-modal"}
                }
            ]
        },
        opslag: {
            type: "equirectangular",
            panorama:
                "/spherestory/assets/the-spot/Scene 5.webp",
            autoLoad: true,
            showZoomCtrl: false,
            showFullscreenCtrl: false,
            pitch: -1.3,
            yaw: 121.5,
            hfov: 120,
            maxHfov: 120,
            hotSpots: [
                {
                    pitch: -7,
                    yaw: 183,
                    type: "scene",
                    cssClass: "custom-hotspot toilet",
                    sceneId: 'toilet'
                }
            ]
        },
        toilet: {
            type: "equirectangular",
            panorama:
                "/spherestory/assets/the-spot/Scene 6.webp",
            autoLoad: true,
            showZoomCtrl: false,
            showFullscreenCtrl: false,
            pitch: -1.3,
            yaw: 121.5,
            hfov: 120,
            maxHfov: 120,
            hotSpots: [
                {
                    pitch: -6.15,
                    yaw: 153.7,
                    type: "info",
                    cssClass: "custom-hotspot flexibility-hotspot_lunchroom",
                    clickHandlerFunc: hotspotAction,
                    clickHandlerArgs: {hotspot: "flexibility-hotspot_lunchroom", type: "video-modal"}
                }
            ]
        },

    }
});

let mm = gsap.matchMedia();
mm.add("(max-width: 768px)", function() {
    let animTime = 1750;
    viewer.on("load", function (){
        viewer.setHfov(55, animTime);
        let currentScene  = viewer.getScene()
        if(currentScene === 'main'){
            viewer.setPitch(-3.54, animTime)
            viewer.setYaw(-31, animTime)
        }
    })
});
viewer.on("load", function () {
    // $("#ch-wrapper_company").clone().appendTo(".sphere-hotspot_company");
    $("#ch-wrapper_video-1").clone().appendTo(".opdebar");
    $("#ch-wrapper_video-2").clone().appendTo(".voorkant");
    $("#ch-wrapper_video-3").clone().appendTo(".achterkant");
    $("#ch-wrapper_video-4").clone().appendTo(".opdebar2");
    $("#ch-wrapper_video-5").clone().appendTo(".opslag");
    $("#ch-wrapper_video-6").clone().appendTo(".toilet");
    let currentScene = viewer.getScene();
});
$('.compass-icon').clone().appendTo('.pnlm-orientation-button');
