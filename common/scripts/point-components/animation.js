point.animator = {};

animator = umajin.animator;

animator.scrollHandlers = [];
animator.resizeHandlers = [];

animator._window = $(window);

animator.addScrollHandler = function (f) {
	animator.scrollHandlers.push(f);
}

animator.addResizeHandler = function (f) {
	animator.resizeHandlers.push(f);
}

animator.animate = {
	scrollAnimations: function () {
		animator._window.scroll(function(){
			for(var i=0; i< animator.scrollHandlers.length; i++) {
				animator.scrollHandlers[i]();
			}
		});
	},
	resizeAnimations: function () {
		animator._window.resize(function(){
			console.log('running through resize handler(s)');
			for(var i=0; i< animator.resizeHandlers.length; i++) {
				animator.resizeHandlers[i]();
			}
		});
	}
};

animator.init = function() {

	animator.animate.scrollAnimations();
	animator.animate.resizeAnimations();
};
