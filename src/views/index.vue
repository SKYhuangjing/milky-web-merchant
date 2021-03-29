<template>
	<div>
		<zlayout
			:configData="configData"
			@change-route="getRouteInfo"
			v-if="!hiddenMenu"
		>
			<template slot="logo">
			     <img src="@/assets/MilkyLogo.png" style="width:50px;height:50px" />
			</template>
			
			<router-view slot="content" />
		</zlayout>
		<div v-if="hiddenMenu">
			<router-view slot="content" />
			
		</div>

	</div>
</template>

<script>
export default {
	name: '',
	components: {},
	data() {
		return {
			hiddenMenu: !this.$postMessage.isMaster(),
			configData: {
				// layout: ['sider', 'header'],
				fixed: ['sider', 'header'],
				logo: 'logo-img.png',
				logoText: 'logo-text.png',
				header: {
					theme: 'light', // light/dark
					list: [],
				},
				sider: {
					mode: 'inline', // vertical vertical-right horizontal inline
					theme: 'light', // light/dark
					collapsible: true,
					collapsed: false,
					showCollapsed: true,
					menu: [
			            {
							key: '1',
                            title: '资源',
							iconUrl: 'home',
							children: [
								{
									key: '/game',
									title: '剧本',
									url: '/game/list',
								},
								{
									key: '/room',
									title: '房间',
									url: '/room/list',
								},
							]

						},
						 {
							key: '2',
                            title: '用户',
							iconUrl: 'User.svg',
							children: [
								{
									key: '/contact',
									title: '联系人',
									url: '/contact/list',
								},
								{
									key: '/list',
									title: '员工',
									url: '/employee/list',
								},
							]

						},
						 {
							key: '3',
                            title: '车',
							iconUrl: 'car',
							url: '/car/list'
						},
						{
							key: '4',
							title: '基础',
							iconUrl: 'database',
							disabled: false,
							children: [
								{
									key: '/merchant',
									title: '商家',
									url: '/merchant/list',
								},
								
								{
									key: '/tag',
									title: '标签',
									url: '/tag/list',
								},
							],
						},
					],
				},
			},
		}
	},
	computed: {},
	mounted() {
		console.log(
			'sdasdasd',
			this.$store.state.debuggerStatus,
			sessionStorage.getItem('debuggerStatus')
		)
	},
	methods: {
		onSearch() {},
		getRouteInfo(key, path) {
			console.log(key, path, 999)
		},
		targetElement(e) {},
		submitUTT() {},
	},
	created() {},
}
</script>

<style lang=less>
.v-uitest-content {
	height: 32px;
	user-select: none;
	position: fixed;
	bottom: 24px;
	right: 14px;
	line-height: 1.5;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #0c85ee;
	color: white;
	padding: 0px 8px;
	border-radius: 5px;
	div {
		line-height: 1;
	}
}
</style>
