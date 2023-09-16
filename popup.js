// Get the list of open tabs and display them in the popup
chrome.tabs.query({}, (tabs) => {
  const tabList = document.getElementById('tabList');

  tabs.forEach((tab) => {
    const listItem = document.createElement('li');
    listItem.textContent = tab.title;

    // Create a close button for each tab
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close Tab';
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
