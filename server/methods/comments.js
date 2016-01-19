Meteor.methods({
	'addComment': function (websiteId, comment) {
		if(Meteor.userId()) {
			check(websiteId, String);
			check(comment, String);

			Websites.update({_id: websiteId}, {$push: {comments: {
				userId: Meteor.userId(),
				comment: comment
			}}});
		} else new Meteor.Error(401, 'Unauthorized call');
	}
})