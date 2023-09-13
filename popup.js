// Get the list of open tabs and display them in the popup
chrome.tabs.query({}, (tabs) => {
    const tabList = document.getElementById('tabList');
  
    tabs.forEach((tab) => {
      const listItem = document.createElement('li');
      listItem.textContent = tab.title;
      listItem.addEventListener('click', () => {
        // When a tab is clicked, switch to that tab
        chrome.tabs.update(tab.id, { active: true });
        window.close();
      });
  
      tabList.appendChild(listItem);
    });
  });
  