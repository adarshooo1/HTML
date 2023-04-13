// Select all tab items and tab content items using CSS classes
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Function to select the clicked tab item and display its content
function selectItem(e) {
	// Remove the 'tab-border' class from all tab items and the 'show' class from all content items
	removeBorder();
	removeShow();
	// Add the 'tab-border' class to the clicked tab item
	this.classList.add('tab-border');
	// Get the content item corresponding to the clicked tab item
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add the 'show' class to the content item
	tabContentItem.classList.add('show');
}

// Function to remove the 'tab-border' class from all tab items
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

// Function to remove the 'show' class from all content items
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

// Add a click event listener to each tab item
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});

