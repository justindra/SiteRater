// Home
FlowRouter.route('/', {
	name: 'home',
	action: function(params) {
		BlazeLayout.render('main_body', {content: 'website_home'});
	}
});

// Website Details
FlowRouter.route('/website/:id', {
	name: 'website',
	action: function(params) {
		BlazeLayout.render('main_body', {content: 'website', websiteId: params.id});
	}
});
