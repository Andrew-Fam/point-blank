point-blank
===========

Blank project with most used extensions and plugins for an efficient start


Getting started
===============




Common use cases
================


1. Copy part of a file into a bigger file (for example, when building a module into a common template):

	Use grunt-copy-part-of-file

	Example:

		'copy-part-of-file': {
			copyPlatform: {
			  options: {
			      sourceFileStartPattern: '<!-- start-platform -->',
			      sourceFileEndPattern: '<!-- end-platform -->',
			      destinationFileStartPattern: '<!-- start-platform -->',
			      destinationFileEndPattern: '<!-- end-platform -->'
			  },	
			  files: {
			      '../public-page/templates/trade-platform.liquid': ['build/index.html']
			  }
			},
			copyTradingActivityPopup: {
				options: {
			      sourceFileStartPattern: '<!-- trading-activity-popup -->',
			      sourceFileEndPattern: '<!-- end-trading-activity-popup -->',
			      destinationFileStartPattern: '<!-- trading-activity-popup -->',
			      destinationFileEndPattern: '<!-- end-trading-activity-popup -->'
			  },	
			  files: {
			      '../public-page/templates/trading-activity-popup.liquid': ['build/trading-activity-popup.html']
			  }
			}
		},





