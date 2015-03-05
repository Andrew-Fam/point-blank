point.typographer = {
	wrapPunct: function() {
		$('.word').each(function(){
			var self = $(this);
			self.html(self.html().replace(/([。、])/g,"<span class=\"punct\">$1</span>"));

			self.html(self.html().replace(/([！])/g,"<span class=\"exclamation-mark\">$1</span>"));
		});
	},
	init: function() {
		this.wrapPunct();		
	}
}