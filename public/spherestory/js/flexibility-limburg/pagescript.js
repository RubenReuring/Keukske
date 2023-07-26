$(document).ready(function(){
    $('#flexibility-hotspot_office_1').attr('poster', 'https://uploads-ssl.webflow.com/63dcc9351dd74501c9a884ef/64b05b1081d27459e3e6b924_office_1.webp');
    $('#flexibility-hotspot_office_2').attr('poster', 'https://uploads-ssl.webflow.com/63dcc9351dd74501c9a884ef/64b05b10497441335f8e0665_office_2.webp');
    $('#flexibility-hotspot_meetingroom').attr('poster', 'https://uploads-ssl.webflow.com/63dcc9351dd74501c9a884ef/64b05b108e6f7af1532b19b0_meeting.webp');
    $('#flexibility-hotspot_lunchroom').attr('poster', 'https://uploads-ssl.webflow.com/63dcc9351dd74501c9a884ef/64b05b10178a686af82b350e_kantine.webp');
});
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
    } else if (currentType === 'info-modal'){
        $('.room-info_modals').removeClass('inactive');
        $('.room-info_modals').addClass('active');
        setTimeout(function(){
            $('.room-info_modals').css('opacity', '1');
        },50)
        $('.infomodal-container.modal-active').removeClass('modal-active');
        $('.infomodal-container').each(function(){
            if($(this).attr('id') === currentHotspot){
                $(this).addClass('modal-active');
            }
        })
    }
}
$('.imt-close').on('click', function(){
    $('.room-info_modals').css('opacity', '0');
    setTimeout(function(){
        $('.room-info_modals').addClass('inactive');
        $('.room-info_modals').removeClass('active');
        $('.infmodal-container').removeClass('modal-active');
    }, 750)
})
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
        firstScene: "office",
        sceneFadeDuration: 1000,
        //hotSpotDebug: true,
        mouseZoom: false,
        keyboardZoom: false
    },
    scenes: {
        location: {
            type: "equirectangular",
            panorama:
                "https://uploads-ssl.webflow.com/63dcc9351dd74501c9a884ef/649e9543593476f369163fcf_REURING_FLEXIBILTY_360(4)FIX.webp",
            autoLoad: true,
            showZoomCtrl: false,
            showFullscreenCtrl: false,
            pitch: 2.8,
            yaw: 8.3,
            hfov: 110,
            maxHfov: 110,
            hotSpots: [
                {
                    pitch: 2.8,
                    yaw: 8.3,
                    type: "info",
                    cssClass: "custom-hotspot flexibility-hotspot_location"
                }
            ]
        },
        lunchroom: {
            type: "equirectangular",
            panorama:
                "https://uploads-ssl.webflow.com/63dcc9351dd74501c9a884ef/649ebef14fe3311048450833_REURING_FLEXIBILITY_360(3).webp",
            autoLoad: true,
            showZoomCtrl: false,
            showFullscreenCtrl: false,
            pitch: -1.3,
            yaw: 121.5,
            hfov: 90,
            maxHfov: 90,
            hotSpots: [
                {
                    pitch: -6.15,
                    yaw: 153.7,
                    type: "info",
                    cssClass: "custom-hotspot flexibility-hotspot_lunchroom",
                    clickHandlerFunc: hotspotAction,
                    clickHandlerArgs: {hotspot: "flexibility-hotspot_lunchroom", type: "video-modal"}
                },
                {
                    pitch: -13.6,
                    yaw: 12,
                    type: "info",
                    cssClass: "custom-hotspot flexibility-hotspot_football",
                }
            ]
        },
        office: {
            type: "equirectangular",
            panorama:
                "https://uploads-ssl.webflow.com/63dcc9351dd74501c9a884ef/649ebef1c69e613f4e0bb5d7_REURING_FLEXIBILITY_360(1)FIX.webp",
            autoLoad: true,
            showZoomCtrl: false,
            showFullscreenCtrl: false,
            pitch: -3.1,
            yaw: 201.6,
            hfov: 90,
            maxHfov: 90,
            hotSpots: [
                {
                    pitch: -3,
                    yaw: 181.5,
                    type: "info",
                    cssClass: "custom-hotspot flexibility-hotspot_office_1",
                    clickHandlerFunc: hotspotAction,
                    clickHandlerArgs: {hotspot: "flexibility-hotspot_office_1", type: "video-modal"}
                },
                {
                    pitch: 0.95,
                    yaw: 79,
                    type: "info",
                    cssClass: "custom-hotspot flexibility-hotspot_office_2",
                    clickHandlerFunc: hotspotAction,
                    clickHandlerArgs: {hotspot: "flexibility-hotspot_office_2", type: "video-modal"}
                },
                {
                    pitch: 4.5,
                    yaw: 20.9,
                    type: "info",
                    cssClass: "custom-hotspot flexibility-hotspot_office_spot",
                    clickHandlerFunc: hotspotAction,
                    clickHandlerArgs: {hotspot: "flexibility-hotspot_office_spot", type: "external-link"}
                },
                {
                    pitch: 2.8,
                    yaw: 136,
                    type: "info",
                    cssClass: "custom-hotspot flexibility-hotspot_office_facts",
                    clickHandlerFunc: hotspotAction,
                    clickHandlerArgs: {hotspot: "flexibility-hotspot_office_facts", type: "info-modal"}
                }
            ]
        },
        meetingroom: {
            type: "equirectangular",
            panorama:
                "https://uploads-ssl.webflow.com/63dcc9351dd74501c9a884ef/649ebef19223e6e8e1a26c5d_REURING_FLEXIBILITY_360(2)FIX.webp",
            autoLoad: true,
            showZoomCtrl: false,
            showFullscreenCtrl: false,
            pitch: -11.6,
            yaw: 146.4,
            hfov: 90,
            maxHfov: 90,
            hotSpots: [
                {
                    pitch: -27.5,
                    yaw: 127.5,
                    type: "info",
                    cssClass: "custom-hotspot flexibility-hotspot_meetingroom",
                    clickHandlerFunc: hotspotAction,
                    clickHandlerArgs: {hotspot: "flexibility-hotspot_meetingroom", type: "video-modal"}
                }
            ]
        }
    }
});
let mm = gsap.matchMedia();
mm.add("(max-width: 768px)", function() {
    let journeySlide = new Splide('.splide',{perPage: 1,perMove: 1,autoWidth: true,gap: '.75em',focus: 'left',drag: 'free',pagination: false,arrows: false}).mount();
    let animTime = 1750;
    viewer.on("load", function (){
        viewer.setHfov(55, animTime);
        let currentScene  = viewer.getScene()
        if(currentScene === 'office'){
            viewer.setPitch(-1.54, animTime)
            viewer.setYaw(182, animTime)
        } else if(currentScene === 'meetingroom') {
            viewer.setPitch(-16.2, animTime)
            viewer.setYaw(126, animTime)
        } else if(currentScene === 'lunchroom') {
            viewer.setPitch(-6.22, animTime)
            viewer.setYaw(157, animTime)
        }
    })
});
viewer.on("load", function () {
    $('.rc-inner').click();
    $("#ch-wrapper_location").clone().appendTo(".flexibility-hotspot_location");
    $("#ch-wrapper_lunchroom").clone().appendTo(".flexibility-hotspot_lunchroom");
    $("#ch-wrapper_football").clone().appendTo(".flexibility-hotspot_football");
    $("#ch-wrapper_meetingroom").clone().appendTo(".flexibility-hotspot_meetingroom");
    $("#ch-wrapper_office_1").clone().appendTo(".flexibility-hotspot_office_1");
    $("#ch-wrapper_office_2").clone().appendTo(".flexibility-hotspot_office_2");
    $("#ch-wrapper_office_facts").clone().appendTo(".flexibility-hotspot_office_facts");
    $("#ch-wrapper_office_spot").clone().appendTo(".flexibility-hotspot_office_spot");
    let currentScene = viewer.getScene();
    $(".rc-button").each(function(){
        let buttonAttr = $(this).attr("vr-scene");
        if (buttonAttr === currentScene) { $(this).addClass("active"); } else { $(this).removeClass("active");}});
});
$(".rc-button").on("click", function () { let selectedScene = $(this).attr("vr-scene");viewer.loadScene(selectedScene);});
$('.compass-icon').clone().appendTo('.pnlm-orientation-button');
