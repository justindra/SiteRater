Template.website.onCreated(function () {
	var instance = this;
	instance.websiteId = FlowRouter.getParam('id');
});

Template.website.helpers({
	website: function () {
		return Websites.findOne({_id: Template.instance().websiteId});
	}
});

Template.website.events({
	'click [data-action="add-comment"]': function (evt, template) {
		evt.preventDefault();
		var websiteId = $(evt.target).closest('li').attr('data-id'),
			comment = $(evt.target).closest('li').find('input').val();

		Meteor.call('addComment', websiteId, comment);
	}
})