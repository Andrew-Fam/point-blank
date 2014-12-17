*point-blank
===========

Blank project with most used extensions and plugins for an efficient start


**Getting started
===============

*** Live browser test

	To run live browser test, in the commandline (terminal), enter:

		grunt

	OPen a browser and go to http://localhost:9001/


*** Bootstrap integration

	To add/remove bootstrap components, edit file /common/less/bootstrap/point-bootstrap.less

**Common use cases
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


2. Replace local assets url with production assets url:
	
	Use grunt-replace

	Example: 

		replace: {
		  jsURL: {
		    src: ['../public-page/public/trade-platform/scripts/highlow-main.js'],
		    overwrite: true,                 // overwrite matched source files
		    replacements: [{
		      from: 'common/images',		      
		      to: "public/trade-platform/images"
		    }]
		  }
		}




