
Vue.createApp({
	data() {
		return {
			plans: [],
			value: ''
		}
	},
	methods: {
		addPlan() {
			if(this.value != ''){
				this.plans.push(this.value)
				this.value = ''
			}
		}
	}
}).mount('#myapp')