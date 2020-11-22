const handleImageError = e => {
	e.target.onerror = null
	// e.target.style.display = 'none'
	e.target.src = '/img/1.jpg'
}

export default handleImageError
