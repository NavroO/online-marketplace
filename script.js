const form = document.querySelector('form');
const productsSection = document.querySelector('#products');

const products = [
  {
    name: 'Product 1',
    price: 10.99,
    category: 'Electronics',
    image: 'https://via.placeholder.com/250x250',
    description: 'This is product 1'
  },
  {
    name: 'Product 2',
    price: 19.99,
    category: 'Clothing',
    image: 'https://via.placeholder.com/250x250',
    description: 'This is product 2'
  },
  {
    name: 'Product 3',
    price: 5.99,
    category: 'Books',
    image: 'https://via.placeholder.com/250x250',
    description: 'This is product 3'
  },
  {
    name: 'Product 4',
    price: 15.99,
    category: 'Books',
    image: 'https://via.placeholder.com/250x250',
    description: 'This is product 4'
  },
  {
    name: 'Product 5',
    price: 8.99,
    category: 'Clothing',
    image: 'https://via.placeholder.com/250x250',
    description: 'This is product 5'
  }
];

function renderProducts(productsArray) {
  productsSection.innerHTML = '';

  productsArray.forEach(product => {
    const productElement = `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.category}</p>
        <p>${product.description}</p>
        <p>$${product.price.toFixed(2)}</p>
        <button>Add to Cart</button>
      </div>
    `;
    productsSection.insertAdjacentHTML('beforeend', productElement);
  });
}

renderProducts(products);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchInput = document.querySelector('#search').value.toLowerCase();
  const categorySelect = document.querySelector('#category').value.toLowerCase();

  const priceRange = document.querySelector('#price');
  const minPrice = priceRange.min;
  const maxPrice = priceRange.max;
  const currentPrice = priceRange.value;

  const filteredProducts = products.filter(product => {
    const nameMatch = product.name.toLowerCase().includes(searchInput);
    const descMatch = product.description.toLowerCase().includes(searchInput);

    const categoryMatch = categorySelect === '' || product.category.toLowerCase() === categorySelect;

    const priceMatch = product.price >= minPrice && product.price <= currentPrice;

    return (nameMatch || descMatch) && categoryMatch && priceMatch;
  });

  renderProducts(filteredProducts);
});
