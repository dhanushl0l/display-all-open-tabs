// Get the list of open tabs and display them in the popup
chrome.tabs.query({}, (tabs) => {
  const tabList = document.getElementById('tabList');

  tabs.forEach((tab) => {
    const listItem = document.createElement('li');
    listItem.textContent = tab.title;

    const closeButton = document.createElement('button');

    // Create an image element for the button
    const closeImage = document.createElement('img');
    closeImage.src = 'icon.png'; // Set the image source
    
    // Add a class to the image element
    closeImage.classList.add('close-button-image');
    
    // Add the image element to the button
    closeButton.appendChild(closeImage);
    
    closeButton.addEventListener('click', () => {
      // When the close button is clicked, close the tab
      chrome.tabs.remove(tab.id, () => {
        // After the tab is closed, remove the corresponding list item
        listItem.remove();
      });
    });
    
    // Add a CSS class to style the list item
    listItem.classList.add('tab-list-item');


    // Add the close button to the list item
    listItem.appendChild(closeButton);

    listItem.addEventListener('click', () => {
      // When a tab is clicked, switch to that tab
      chrome.tabs.update(tab.id, { active: true });
      window.close();
    });

    tabList.appendChild(listItem);
  });
});
