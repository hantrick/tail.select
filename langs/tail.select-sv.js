/*
 |  tail.select - The vanilla solution to make your HTML select fields AWESOME!
 |  @file       ./langs/tail.select-sv.js
 |  @author     SamBrishes <sam@pytes.net>
 |  @version    0.5.16 - Beta
 |
 |  @website    https://github.com/pytesNET/tail.select
 |  @license    X11 / MIT License
 |  @copyright  Copyright © 2014 - 2019 SamBrishes, pytesNET <info@pytes.net>
 */
/*
 |  Translator:     Hantrick - (https://github.com/hantrick)
 |  GitHub:         
 */
;(function(factory){
   if(typeof(define) == "function" && define.amd){
       define(function(){
           return function(select){ factory(select); };
       });
   } else {
       if(typeof(window.tail) != "undefined" && window.tail.select){
           factory(window.tail.select);
       }
   }
}(function(select){
    select.strings.register("sv", {
        all: "Alla",
        none: "Ingen",
        empty: "Inga alternativ tillgängliga",
        emptySearch: "Inget alternativ hittades",
        limit: "Det går inte att välja fler alternativ",
        placeholder: "Välj...",
        placeholderMulti: "Välj upp till :limit alternativ...",
        search: "Sök...",
        disabled: "Detta fält är inaktiverat"
    });
    return select;
}));
