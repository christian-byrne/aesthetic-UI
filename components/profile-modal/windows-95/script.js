/*
*
*        _______  _______  _       _________ _______  _______ _________
*       (  ____ \(  ___  )( (    /|\__   __/(  ___  )(  ____ \\__   __/
*       | (    \/| (   ) ||  \  ( |   ) (   | (   ) || (    \/   ) (   
*       | |      | |   | ||   \ | |   | |   | (___) || |         | |   
*       | |      | |   | || (\ \) |   | |   |  ___  || |         | |   
*       | |      | |   | || | \   |   | |   | (   ) || |         | |   
*       | (____/\| (___) || )  \  |   | |   | )   ( || (____/\   | |   
*       (_______/(_______)|/    )_)   )_(   |/     \|(_______/   )_(   
*                                                                      
*        _______  _______  ______   _______  _       
*       (       )(  ___  )(  __  \ (  ___  )( \      
*       | () () || (   ) || (  \  )| (   ) || (      
*       | || || || |   | || |   ) || (___) || |      
*       | |(_)| || |   | || |   | ||  ___  || |      
*       | |   | || |   | || |   ) || (   ) || |      
*       | )   ( || (___) || (__/  )| )   ( || (____/\
*       |/     \|(_______)(______/ |/     \|(_______/
*                                                    
*       
*                                         __                           _____
*                                        / /  __ ____ _  __ _____ ___ / / _/
*                                       / _ \/ // /  ' \/ // (_-</ -_) / _/ 
*                                      /_.__/\_, /_/_/_/\_, /___/\__/_/_/   
*                                           /___/      /___/                
*                                     ───────────────────────────────────                 
*
*
*                       
*/


function assignAttributes(attributes, node) {
    for ( const attr of Object.keys(attributes) ) {
        node.setAttribute(attr, attributes[attr])
    }
}


// 'contact me' button listener
$(document).ready(function() {
    $('.contact').click(function (e) {
        $('.card').toggleClass('active');
        $('.banner').toggleClass('active');
        $('.photo').toggleClass('active');
        $('.social-media-banner').toggleClass('active');
        $('.email-form').toggleClass('active');  
        if ( document.getElementById("btnTxt").innerHTML == "back") {
        document.getElementById("btnTxt").innerHTML = "click to contact me"
        }
        else { document.getElementById("btnTxt").innerHTML = "back" }
    });
});


// __turn on to make the photo follow mouse__
/* 
$(document).ready(function() {
    $(document).mousemove(function( event )  {
        var docWidth = $(document).width();
        var docHeight = $(document).height();
        var xValue = (event.clientX/docWidth)*100;
        var yValue = (event.clientY/docHeight)*100;
        $('.photo').css('background-position', xValue+'%,'+yValue+'%');
    });
});
*/


// dim background 
function dimBackground() {
    // if overflow active, switch back and forth between "overflow: hidden"
    let attributes = {
        "class" : "dim",
        "id" : "dimCover",
        "onmouseover" : "mouseOverProfileCount()",
        "onclick" : "collapseHelp()"
    }
    dimNode = document.createElement("div")
    assignAttributes(attributes, dimNode)
    document.body.appendChild(dimNode);
}


// undim bg
function unDimBackground(remove=true) {
    if ( !!remove ) {
        document.getElementById("dimCover").remove();
    }
    else {
        document.getElementById("dimCover").style.opacity = .01;
    }
}


// pop
function popContact() {
    if ( contactInteractions == -1 ) { 
        randomGif() 
    }
    let attributes = {
        "class" : "card",
        "display" : "block",
    }
    assignAttributes(attributes, document.getElementById("profileModal"))
    dimBackground()
}


// collapse
function collapseProfile() {
    document.getElementById("profileModal").style.display = "none"
    // reset to -1 to indicate that default has already been loaded
    contactInteractions = -1
    unDimBackground()
}


// first pop loads default, then load other stuff (random bgs, etc.)
var contactInteractions = 0
function mouseOverProfileCount() { 
    if ( document.getElementById("profileModal").style.display != "none" ) {
        if ( contactInteractions >= 4 ){
            unDimBackground(remove=false)
        }
        contactInteractions++
    }
}


// ────────────────────────────────────────────────────────────────────────────────
// ───────────────────────────────────────────────────────── Random Gif Loader ────


panels = [
    {
        "backgroundImage" : 'url("gifs/bw/flying-birds.webp"), url("gifs/bw/pixel-storm.webp")',
        "background-blend-mode" : "soft-light",
        "backgroundPosition" : "top right, center",
        "background-repeat" : "no-repeat, no-repeat",
        "backgroundSize" : "cover, 80% 65%",
        "filter" : "brightness(78%) grayscale(95%) saturate(30%)"
    },
    {
        "backgroundImage" : "url('pictures/wallpaperflare.com_wallpaper (3) (copy).jpg')",
        "backgroundSize" : "cover",
        "filter" : "none"

    },
    {
        "backgroundImage" : "url('pictures/bw3.jpg')",
        "backgroundSize" : "cover",
        "filter" : "none"

    },
    {
        "backgroundImage" : "url('pictures/wallpaperflare.com_wallpaper (4) (copy).jpg')",
        "backgroundSize" : "cover",
        "filter" : "none"

    },
    {
        "backgroundImage" : "url('pictures/wallpaperflare.com_wallpaper (3) (copy).jpg')",
        "backgroundSize" : "cover",
        "filter" : "none"
    },
    {
        "backgroundImage" : "url('pictures/wallpaperflare.com_wallpaper (6).jpg')",
        "backgroundSize" : "cover",
        "filter" : "none"
    },
    {
        "backgroundImage" : "url('pictures/1.jpg')",
        "backgroundSize" : "cover",
        "backgroundPosition" : "center",
        "filter" : "none"
    },
    {
        "backgroundImage" : "url('pictures/647786.jpg')",
        "backgroundSize" : "cover",
        "backgroundPosition" : "center",
        "filter" : "grayscale(85%) brightness(78%) opacity(100%) saturation(100%)"
    },
    {
        "backgroundImage" : "url('pictures/annalisa-bellini-sn-Qmo6CCIM-unsplash.jpg')",
        "backgroundSize" : "cover",
        "filter" : "grayscale(100%)"
    },
    {
        "backgroundImage" : "url('pictures/1313179.jpg')",
        "backgroundSize" : "cover",
        "filter" : "none",
        "backgroundPosition": "bottom"

    },
    {
        "backgroundImage" : 'url("gifs/film-noir/media1.giphy.com_media_Tk79kO0ELC7WpmR4xW_200w.webp")',
        "backgroundPosition" : "center",
        "backgroundSize" : "cover",
        "filter" : "brightness(78%) grayscale(95%)"
    },
    {
        "backgroundImage" : 'url("gifs/film-noir/audrey-fish.webp")',
        "backgroundPosition" : "top",
        "backgroundSize" : "cover",
        "filter" : "opacity(90%) grayscale(95%)"
    },    
    {
        "backgroundImage" : 'url("gifs/film-noir/media4.giphy.com_media_SvEeTSlDs7YBDqp7M4_200w.webp")',
        "backgroundPosition" : "center",
        "backgroundSize" : "cover",
        "filter" : "brightness(78%) grayscale(95%)"
    },    
    {
        "backgroundImage" : 'url("gifs/film-noir/media0.giphy.com_media_3gNpW2a8WK04N5Ybmv_200.webp")',
        "backgroundPosition" : "center",
        "backgroundSize" : "cover",
        "filter" : "brightness(78%) grayscale(95%)"
    },    
    {
        "backgroundImage" : 'url("gifs/bw/media4.giphy.com_media_l2QE5bDTfjOKHmme4_200w.webp")',
        "backgroundPosition" : "center",
        "backgroundSize" : "cover",
        "filter" : "brightness(78%) grayscale(95%)"
    },    
    {
        "backgroundImage" : 'url("gifs/bw/media2.giphy.com_media_LLYMoDblVhhjvjRBtj_200w.webp")',
        "backgroundPosition" : "center",
        "backgroundSize" : "cover",
    },
    {
        "backgroundImage" : 'url("gifs/bw/flying-birds.webp")',
        "backgroundPosition" : "center",
        "backgroundSize" : "cover",
        "filter" : "brightness(76%) grayscale(90%)"
    },
    {
        "backgroundImage" : 'url("gifs/pixel-art/pixel-art20.webp")',
        "backgroundPosition" : "center",
        "backgroundSize" : "cover",
        "filter" : "brightness(78%) grayscale(98%)"
    },
    {
        "backgroundImage" : 'url("gifs/pixel-art/pixel-art28.webp")',
        "backgroundPosition" : "center",
        "backgroundSize" : "cover",
        "filter" : "grayscale(100%)"
    },
    {
        "backgroundImage" : 'url("gifs/pixel-art/pixel-art39.webp")',
        "backgroundPosition" : "center",
        "backgroundSize" : "cover",
        "filter" : "grayscale(100%)"
    },
]

// Random Gif Panel Loader
function randomGif() {
    rindex = Math.floor( Math.random() * ( panels.length - 1 ) )
    newGif = panels[rindex]
    n = document.getElementsByClassName("banner")[0].style

    for ( const k of Object.keys(newGif) ) {
        n[k] = newGif[k]
    }
}