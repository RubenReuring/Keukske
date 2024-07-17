
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
        firstScene: "main",
        sceneFadeDuration: 1000,
        //hotSpotDebug: true,
        mouseZoom: false,
        keyboardZoom: false
    },
    scenes: {
        main: {
            type: "equirectangular",
            panorama:
                "/spherestory/assets/umc/IMG_20240424_083228_00_011_PureShot.webp",
            autoLoad: true,
            showZoomCtrl: false,
            showFullscreenCtrl: false,
            pitch: -1.8,
            yaw: -4.9,
            hfov: 90,
            maxHfov: 90,
            hotSpots: [
                {
                    pitch: -4.5,
                    yaw: -90.3,
                    type: "info",
                    cssClass: "custom-hotspot sphere-hotspot_company"
                },
                {
                    pitch: 0.4,
                    yaw: 81.29,
                    type: "info",
                    cssClass: "custom-hotspot sphere-hotspot_video-1",
                    clickHandlerFunc: hotspotAction,
                    clickHandlerArgs: {hotspot: "sphere-hotspot_video-1", type: "video-modal"}
                },
                {
                    pitch: -6.4,
                    yaw: 42.29,
                    type: "info",
                    cssClass: "custom-hotspot sphere-hotspot_video-2",
                    clickHandlerFunc: hotspotAction,
                    clickHandlerArgs: {hotspot: "sphere-hotspot_video-2", type: "video-modal"}
                }
                ,
                {
                    pitch: 0.4,
                    yaw: 141.29,
                    type: "info",
                    cssClass: "custom-hotspot sphere-hotspot_video-3",
                    clickHandlerFunc: hotspotAction,
                    clickHandlerArgs: {hotspot: "sphere-hotspot_video-3", type: "video-modal"}
                },
                {
                    pitch: -7.51,
                    yaw: -17.5,
                    type: "info",
                    cssClass: "custom-hotspot sphere-hotspot_video-4",
                    clickHandlerFunc: hotspotAction,
                    clickHandlerArgs: {hotspot: "sphere-hotspot_video-4", type: "video-modal"}
                }
            ]
        }
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
    $("#ch-wrapper_company").clone().appendTo(".sphere-hotspot_company");
    $("#ch-wrapper_video-1").clone().appendTo(".sphere-hotspot_video-1");
    $("#ch-wrapper_video-2").clone().appendTo(".sphere-hotspot_video-2");
    $("#ch-wrapper_video-3").clone().appendTo(".sphere-hotspot_video-3");
    $("#ch-wrapper_video-4").clone().appendTo(".sphere-hotspot_video-4");
    let currentScene = viewer.getScene();
});
$('.compass-icon').clone().appendTo('.pnlm-orientation-button');
