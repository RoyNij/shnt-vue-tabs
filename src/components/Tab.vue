<template>
	<Collapsible :open='selected' :immediateClose="true" :class='["shnt-tab"]'>
		<slot></slot>
	</Collapsible>
</template>

<script>
import Collapsible from './shnt-vue-accordion/src/components/Collapsible.vue';

export default {
	components: {
		Collapsible
	},
	data: function(){
		return {
			selected: false,
			visible: true,
		}
	},
	props: {
		title: {
			type: String,
			required: true
		},
		prefix: {
			type: String,
			default: ''
		},
		suffix: {
			type: String,
			default: ''
		}
	},
	computed: {
		head(){
			return [this.prefix, this.title, this.suffix].join('')
		}
	},
	methods: {
		toggleSelected( value ){
			this.selected = value
		},
		toggleVisibility( value ){
			this.visible = value
		}
	}
}
</script>

<style lang='scss'>
</style>