$(function () {
    var width = $(window).width();
    if (width >= 740) {
        $.scrollify({
            section: ".panel",
            sectionName: "section-name",
            interstitialSection: "",
            scrollSpeed: 1000,
            offset: 0,
            scrollbars: true,
            standardScrollElements: "",
            setHeights: true,
            overflowScroll: true,
            updateHash: true,
            touchScroll: true,
            before: function (i, panels) {

                var ref = panels[i].attr("data-section-name");

                $(".pagination .active").removeClass("active");

                $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
            },
            afterRender: function () {
                var pagination = "<ul class=\"pagination flex-column\">";
                var activeClass = "";
                $(".panel").each(function (i) {
                    activeClass = "";
                    if (i === $.scrollify.currentIndex()) {
                        activeClass = "active";
                    }
                    pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
                });

                pagination += "</ul>";

                $(".home").append(pagination);
                $(".pagination a").on("click", $.scrollify.move);
            }
        });
    }
});