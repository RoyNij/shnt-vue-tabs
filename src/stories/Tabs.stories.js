import Tabs from './../components/Tabs.vue';
import Tab from './../components/Tab.vue';
import SomethingElse from './../assets/michael-dziedzic-something-else-unsplash.jpg';
import './Tabs.scss';

export default {
	title: 'Tabs/Basic',
	component: Tabs,
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Tabs, Tab },
	template: `
	<Tabs>
		<Tab title='Tab 1'>
			<div class='content-wrap'>
				<p>This is some basic tab content</p>
			</div>
		</Tab>
		<Tab title='Tab 2' prefix='<span>hello</span> '>
			<div class='content-wrap'>
				<h2>This is some basic tab content</h2>
				<p>Pariatur itaque totam nemo. Magnam aut autem voluptatem aut aspernatur asperiores sit. Deleniti fugit quis ab. Doloremque quis eum omnis ea autem ut. Illo sit eius nam facere. Aut soluta et corporis assumenda voluptatem officiis officia.</p>
				<p>Nihil reiciendis et et nesciunt mollitia voluptate. Aut quam quam quo aut dolor ut aut. Possimus dolorum corrupti consectetur minima animi. Est ab rerum sit nihil rem. Eveniet suscipit nam nobis natus esse quisquam vel et.</p>
			</div>
		</Tab>
		<Tab title='Tab 3' suffix=' <span>Something Else</span>'>
			<div class='content-wrap'>
				<img src=${SomethingElse} />
			</div>
		</Tab>
	</Tabs>`,
});

export const Primary = Template.bind({});
Primary.args = {};