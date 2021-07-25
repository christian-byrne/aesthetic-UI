/*
*
*                 _______  _        _______    _______  _______  ______   _______  _       
*       |\     /|(  ____ \( \      (  ____ )  (       )(  ___  )(  __  \ (  ___  )( \      
*       | )   ( || (    \/| (      | (    )|  | () () || (   ) || (  \  )| (   ) || (      
*       | (___) || (__    | |      | (____)|  | || || || |   | || |   ) || (___) || |      
*       |  ___  ||  __)   | |      |  _____)  | |(_)| || |   | || |   | ||  ___  || |      
*       | (   ) || (      | |      | (        | |   | || |   | || |   ) || (   ) || |      
*       | )   ( || (____/\| (____/\| )        | )   ( || (___) || (__/  )| )   ( || (____/\
*       |/     \|(_______/(_______/|/         |/     \|(_______)(______/ |/     \|(_______/
*                                                                                          
*                                            __                           _____
*                                           / /  __ ____ _  __ _____ ___ / / _/
*                                          / _ \/ // /  ' \/ // (_-</ -_) / _/ 
*                                         /_.__/\_, /_/_/_/\_, /___/\__/_/_/   
*                                              /___/      /___/                
*                                        ───────────────────────────────────                 
*                       
*/


function assignAttributes(attributes, node) {
    for ( const attr of Object.keys(attributes) ) {
        node.setAttribute(attr, attributes[attr])
    }
}

// dim bg 
function dimBackground() {
    document.body.style.overflow = "hidden"
    let attributes = {
        "class" : "dim",
        "id" : "dimCover",
        "onmouseover" : "mouseOverHelpCount()",
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
function popHelp() {
    if ( helpInteractions == -1 ) {

        // random homescreen BG
        randomBG()

        // gif background on modal
        document.getElementsByClassName("formpopSpan")[0].style.backgroundImage = 'url("/gifs/bw/media0.giphy.com_media_i1iA5wwEuRQNq_200w.webp")'

        // font color from black to white
        for ( const node of document.getElementsByClassName("formpopSectionContent") ) {
            node.style.color = "white"
        }
        for ( const node of document.getElementsByClassName("formpopSectionHead") ) {
            node.style.color = "white"
        }
        
    }
    document.getElementById("helpModal").style.display = "block"
    dimBackground()
}

// collapse
function collapseHelp() {
    // reset to -1 to indicate that default has already been loaded
    helpInteractions = -1
    document.getElementById("helpModal").style.display = "none"
    unDimBackground()
}

// first pop loads default, then load other stuff (random bgs, etc.)
var helpInteractions = 0
function mouseOverHelpCount() { 
    if ( document.getElementById("helpModal").style.display != "none" ) {
        if ( helpInteractions >= 4 ){
            unDimBackground(remove=false)
        }
        helpInteractions++
    }
}