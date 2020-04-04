/**
 * File: app.js
 * Author: Josh Bakos
 * Student ID: 100652490
 * Date: 2020-04-04
 */

 // IIFE
 (function() {

    function Start()
    {
        console.log("App started!");
    }

    // When the user clicks the About Me button on the home page
    document.getElementById("aboutButton").onclick = function () {
        location.href = "about";
    };

    window.addEventListener("load", Start);
 })();