let itemsPerPage = 8;
let currentPage = 1;

function renderItems() {
  const container = document.getElementById("grid-container");
  container.innerHTML = ""; 

  const start = 0;
  const end = itemsPerPage * currentPage;
  const visibleItems = allItems.slice(start, end);

  visibleItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <p>${item.title}</p>
    `;
    container.appendChild(card);
  });

  // show/hide "more" button
  const moreBtn = document.getElementById("load-more");
  if (allItems.length > end) {
    moreBtn.style.display = "block";
  } else {
    moreBtn.style.display = "none";
  }
}

document.getElementById("load-more").addEventListener("click", () => {
  currentPage++;
  renderItems();
});

// أول تحميل
renderItems();
