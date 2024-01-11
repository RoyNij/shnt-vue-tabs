<template>
	<div class="shnt-tabs">
		<ul class="shnt-tabs__header">
			<li v-for='tab in tabs'
				:key='tab.name'
				:class="['shnt-tabs__head', { selected: tab.selected, visible: tab.visible } ]"
				@click='selectTab( tab )'
			>
				<span v-html='tab.head'
					class="shnt-tabs__head-content"
				></span>
			</li>
		</ul>
		<div class="shnt-tabs__container">
			<slot :set-tab="setTab"></slot>
		</div>
	</div>
</template>

<script>
export default {
	data: function(){
		return {
			tabs: [],
			tabSelected: null,
		}
	},
	props: {
		immediateOpen: {
			type: Boolean,
			default: false
		}
	},
	mounted(){
        console.log( this.tabs )
        if( this.immediateOpen && this.tabs.length > 0 ){
			this.tabs[0].toggleSelected( true );
			this.tabSelected = this.tabs[ 0 ];
		}
	},
	methods: {
        setTab( tab ){
            if( !tab ){
                return
            }
            let idx = this.tabs.findIndex( t => t.title === tab.title );
            if( idx < 0 ){
                this.tabs.push( tab )
            }

        },
		selectTab: function( tab ){
			if( this.tabSelected !== null && this.tabSelected.title === tab.title){
				tab.toggleSelected( false );
				this.tabSelected = null
				return
			}
			
			this.tabs.forEach( tab => tab.toggleSelected( false ) );
			this.tabSelected = tab
			tab.toggleSelected( true );
		}
	}
}
</script>

<style lang='scss' scoped>
.shnt-tabs{
	.shnt-tabs__header{
		list-style: none;
		margin: 0;
		display: flex;
		padding: 0;
	}

	.shnt-tabs__head{
		cursor: pointer;
	}
}

</style>