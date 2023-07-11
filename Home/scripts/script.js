let layout = {
	main: {
		padding: [0, 0, 0, 0]
	},
	nav: {
		height: 65,
		padding: [0, 20, 0, 20]
	}
}

function totalNavHeight(){
	let nav = layout.nav
	return nav.height + nav.padding[0] + nav.padding[2]
}

function performLayout(){
	let nav = document.getElementById("nav")
	let main = document.getElementById("main")
	let lNav = layout.nav
	let lMain = layout.main
	nav.style.height = layout.nav.height + "px"
	nav.style.padding = `${lNav.padding[0]}px ${lNav.padding[1]}px ${lNav.padding[2]}px ${lNav.padding[3]}px`
	main.style.width = `calc(100% - ${lMain.padding[1] + lMain.padding[3]}px)`
	main.style.height = `calc(100% - ${lMain.padding[0] + lMain.padding[2] + totalNavHeight()}px)`
	main.style.padding = `${lMain.padding[0] + totalNavHeight()}px ${lMain.padding[1]}px ${lMain.padding[2]}px ${lMain.padding[3]}px`
	nav.style.width = ($(main).width() - lMain.padding[1] - lMain.padding[3] - lNav.padding[1] - lNav.padding[3]) + "px"
	console.log(($(main).width() - lMain.padding[1] - lMain.padding[3] - lNav.padding[1] - lNav.padding[3]) + "px")
}

resize()
window.addEventListener("resize", resize)
function dumb(){
	let socials = document.getElementsByClassName("social-item")
	for (let i=0; i<socials.length; i++){
		console.log(socials[i].children[1].clientHeight)
		socials[i].children[0].style.height = (socials[i].children[1].clientHeight - 2) + "px"
		socials[1].parentElement.style.maxHeight = socials[i].children[1].clientHeight + "px"
	}
}

function resize(){
	performLayout()
	dumb()
}