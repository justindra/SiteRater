Template.main_body.events({
	'click .js-details': function (evt, template) {
		evt.preventDefault();
		FlowRouter.go('website', {id: $(evt.target).closest('li').attr('data-id')});
	}
})