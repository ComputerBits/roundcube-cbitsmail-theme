function defer(method) {
    if (window.jQuery) {
        method();
    } else {
        setTimeout(function() { defer(method) }, 50);
    }
}

defer(function () {
	$('label[for=rcmloginhost]').replaceWith('<a href="#" id="server-link">Server</a>');
	$('.box-bottom').append('<div id="server-explain" class="c-hidden">Only choose EZPZ if you have been told to by us</div>');
	$('#server-link').on('click', function (e) {
	    e.preventDefault();
	    $('#server-explain').toggleClass('c-visible c-hidden');
	});
});
