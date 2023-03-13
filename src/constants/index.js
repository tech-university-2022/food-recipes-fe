export const navbarCategories = [
	{ 
		name: 'Home', 
		endpoint: '/'
	},
	{
		name: 'Recipes',
		endpoint: '/recipes'
	},
	{
		name: 'Menu',
		endpoint: '/menu'
	},
	{ 
		name: 'Blogs',
		endpoint: '/blogs'
	}
]

export const navbarAccount = [
	{ 
		name: 'My Account',
		type: 'navigate',
		endpoint: '/me'
	},
	{ 
		name: 'Sign Out',
		type: 'signout'
	}
]

export const footerCategories = [
	{ 
		name: 'About us', 
		endpoint: '/about'
	},
	{
		name: 'Contact us',
		endpoint: '/contact'
	}
]

export const COMMENT_LIMIT = 5