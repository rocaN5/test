$.getScript('/lib.js', function() {
    var downloadButton = $("<button>").attr("id", "downloadButton").text("Download Links as PDF").appendTo("body");

    $(document).on("click", "#downloadButton", function() {
        var links = [];
        $("a").each(function() {
            links.push($(this).attr("href"));
        });
        var linksText = links.join("\n");
        var doc = new jsPDF();
        doc.text(linksText, 10, 10);
        doc.save("links.pdf");
    });
});
