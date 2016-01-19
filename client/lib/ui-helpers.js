Template.registerHelper('getName', function (userId) {
	var user = Meteor.users.findOne(userId);
	return user && user.profile && user.profile.name || 'anonymous';
});