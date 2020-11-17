class Renderer {

	render(data , templateName , containerName) {
		$(`#${containerName}-container`).empty()
		const source = $(`#${templateName}-template`).html()
		const template = Handlebars.compile(source)
		const someHtml = template(data)
		$(`#${containerName}-container`).append(someHtml)
	}
}