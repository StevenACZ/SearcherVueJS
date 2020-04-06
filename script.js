vue = new Vue({
	el: "#app",
	data: {
		newComment: "",
		comments: ["Looks great Julianne!", "I love the sea", "Where are you at?"]
	},
	methods: {
		addComment() {
			if (this.newComment != "") {
				this.comments.push(this.newComment);
			}
		}
	}
});