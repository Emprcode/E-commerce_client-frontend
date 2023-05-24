



export const getRandomProducts = (numberOfProducts, products)=> {
    // Create a copy of the original array to avoid modifying it
    const newProducts = [...products];

    // Shuffle the array using the Fisher-Yates algorithm
    for (let i = newProducts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newProducts[i], newProducts[j]] = [newProducts[j], newProducts[i]];
    }

    // Return the first 'numberOfProducts' elements from the shuffled array
    return newProducts.slice(0, numberOfProducts);
  }

  // Get 3 random products
//  const randomProducts = getRandomProducts(3);