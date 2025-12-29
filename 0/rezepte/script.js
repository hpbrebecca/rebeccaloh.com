// Rezepte App - Neue Version
let recipes = [];
let currentFilter = 'all';
let searchQuery = '';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadRecipes();
    setupEventListeners();
    
    if (recipes.length === 0) {
        initDefaultRecipes();
    }
    
    renderRecipes();
    updateCategories();
});

// Event Listeners
function setupEventListeners() {
    // New recipe button
    document.getElementById('newRecipeBtn').addEventListener('click', openRecipeModal);
    
    // Modal close buttons
    document.getElementById('closeModal').addEventListener('click', closeRecipeModal);
    document.getElementById('closeViewModal').addEventListener('click', closeViewModal);
    document.getElementById('cancelBtn').addEventListener('click', closeRecipeModal);
    
    // Close on overlay click
    document.getElementById('recipeModal').addEventListener('click', (e) => {
        if (e.target.id === 'recipeModal') closeRecipeModal();
    });
    document.getElementById('viewModal').addEventListener('click', (e) => {
        if (e.target.id === 'viewModal') closeViewModal();
    });
    
    // Form submission
    document.getElementById('recipeForm').addEventListener('submit', handleFormSubmit);
    
    // Search
    document.getElementById('searchInput').addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        renderRecipes();
    });
    
    // Category filters
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.category;
            renderRecipes();
        });
    });
}

// Load recipes from localStorage
function loadRecipes() {
    const stored = localStorage.getItem('recipes');
    if (stored) {
        recipes = JSON.parse(stored);
    }
}

// Save recipes to localStorage
function saveRecipes() {
    localStorage.setItem('recipes', JSON.stringify(recipes));
}

// Initialize with default recipes
function initDefaultRecipes() {
    recipes = [
        {
            id: Date.now(),
            name: 'Rezept 1',
            image: 'Rezept1.jpg',
            category: 'Hauptgericht',
            description: 'Ein köstliches Hauptgericht aus meiner Sammlung.',
            ingredients: ['Zutat 1', 'Zutat 2', 'Zutat 3', 'Zutat 4'],
            instructions: [
                'Schritt 1: Erste Anweisung für die Zubereitung',
                'Schritt 2: Zweite Anweisung für die Zubereitung',
                'Schritt 3: Dritte Anweisung für die Zubereitung'
            ],
            time: 30,
            servings: 4
        },
        {
            id: Date.now() + 1,
            name: 'Rezept 2',
            image: 'Rezept2.jpg',
            category: 'Dessert',
            description: 'Ein süßes Dessert für besondere Anlässe.',
            ingredients: ['Zutat A', 'Zutat B', 'Zutat C'],
            instructions: [
                'Schritt 1: Erste Anweisung',
                'Schritt 2: Zweite Anweisung'
            ],
            time: 45,
            servings: 2
        },
        {
            id: Date.now() + 2,
            name: 'Rezept 3',
            image: 'Rezept3.jpg',
            category: 'Vorspeise',
            description: 'Eine leichte Vorspeise zum Genießen.',
            ingredients: ['Zutat X', 'Zutat Y', 'Zutat Z', 'Zutat W'],
            instructions: [
                'Schritt 1: Erste Anweisung',
                'Schritt 2: Zweite Anweisung',
                'Schritt 3: Dritte Anweisung',
                'Schritt 4: Vierte Anweisung'
            ],
            time: 20,
            servings: 4
        },
        {
            id: Date.now() + 3,
            name: 'Rezept 4',
            image: 'Rezept4.jpg',
            category: 'Snack',
            description: 'Ein schneller Snack für zwischendurch.',
            ingredients: ['Zutat 1', 'Zutat 2'],
            instructions: [
                'Schritt 1: Erste Anweisung',
                'Schritt 2: Zweite Anweisung'
            ],
            time: 15,
            servings: 2
        }
    ];
    saveRecipes();
}

// Update category list
function updateCategories() {
    const categories = ['all', ...new Set(recipes.map(r => r.category))];
    const categoryList = document.getElementById('categoryList');
    
    categoryList.innerHTML = categories.map(cat => {
        const label = cat === 'all' ? 'Alle' : cat;
        return `<button class="category-btn ${cat === 'all' ? 'active' : ''}" data-category="${cat}">${label}</button>`;
    }).join('');
    
    // Re-attach event listeners
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.category;
            renderRecipes();
        });
    });
}

// Render recipes
function renderRecipes() {
    const container = document.getElementById('recipesContainer');
    
    let filtered = recipes.filter(recipe => {
        const matchesSearch = !searchQuery || 
            recipe.name.toLowerCase().includes(searchQuery) ||
            recipe.description?.toLowerCase().includes(searchQuery) ||
            recipe.ingredients.some(ing => ing.toLowerCase().includes(searchQuery));
        
        const matchesCategory = currentFilter === 'all' || recipe.category === currentFilter;
        
        return matchesSearch && matchesCategory;
    });
    
    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <h2>Keine Rezepte gefunden</h2>
                <p>Versuche eine andere Suche oder füge ein neues Rezept hinzu.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = filtered.map(recipe => `
        <div class="recipe-card" onclick="viewRecipe(${recipe.id})">
            <div class="recipe-image-wrapper">
                <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image" 
                     onerror="this.src='https://via.placeholder.com/400x200?text=Rezept'">
            </div>
            <div class="recipe-card-body">
                <h3 class="recipe-card-title">${recipe.name}</h3>
                <p class="recipe-card-description">${recipe.description || ''}</p>
                <div class="recipe-card-footer">
                    <div class="recipe-meta">
                        ${recipe.time ? `<span>⏱️ ${recipe.time} Min</span>` : ''}
                        ${recipe.servings ? `<span>🍽️ ${recipe.servings} Port.</span>` : ''}
                    </div>
                    <span class="recipe-category">${recipe.category}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Open recipe modal
function openRecipeModal(recipeId = null) {
    const modal = document.getElementById('recipeModal');
    const form = document.getElementById('recipeForm');
    const title = document.getElementById('modalTitle');
    
    if (recipeId) {
        const recipe = recipes.find(r => r.id === recipeId);
        if (recipe) {
            title.textContent = 'Rezept bearbeiten';
            populateForm(recipe);
        }
    } else {
        title.textContent = 'Neues Rezept';
        form.reset();
    }
    
    modal.classList.add('active');
}

// Close recipe modal
function closeRecipeModal() {
    document.getElementById('recipeModal').classList.remove('active');
    document.getElementById('recipeForm').reset();
}

// Populate form with recipe data
function populateForm(recipe) {
    document.getElementById('recipeName').value = recipe.name;
    document.getElementById('recipeImage').value = recipe.image || '';
    document.getElementById('recipeCategory').value = recipe.category || 'Hauptgericht';
    document.getElementById('recipeDescription').value = recipe.description || '';
    document.getElementById('recipeTime').value = recipe.time || '';
    document.getElementById('recipeServings').value = recipe.servings || '';
    document.getElementById('recipeIngredients').value = recipe.ingredients.join('\n');
    document.getElementById('recipeInstructions').value = recipe.instructions.join('\n');
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    const recipe = {
        id: Date.now(),
        name: document.getElementById('recipeName').value,
        image: document.getElementById('recipeImage').value || 'https://via.placeholder.com/400x200?text=Rezept',
        category: document.getElementById('recipeCategory').value,
        description: document.getElementById('recipeDescription').value,
        ingredients: document.getElementById('recipeIngredients').value
            .split('\n')
            .map(line => line.trim())
            .filter(line => line.length > 0),
        instructions: document.getElementById('recipeInstructions').value
            .split('\n')
            .map(line => line.trim())
            .filter(line => line.length > 0),
        time: parseInt(document.getElementById('recipeTime').value) || null,
        servings: parseInt(document.getElementById('recipeServings').value) || null
    };
    
    recipes.push(recipe);
    saveRecipes();
    renderRecipes();
    updateCategories();
    closeRecipeModal();
    
    showNotification('Rezept erfolgreich hinzugefügt!');
}

// View recipe
function viewRecipe(id) {
    const recipe = recipes.find(r => r.id === id);
    if (!recipe) return;
    
    const modal = document.getElementById('viewModal');
    const content = document.getElementById('viewRecipeContent');
    const name = document.getElementById('viewRecipeName');
    
    name.textContent = recipe.name;
    
    content.innerHTML = `
        ${recipe.image ? `<img src="${recipe.image}" alt="${recipe.name}" class="recipe-view-image" onerror="this.style.display='none'">` : ''}
        ${recipe.description ? `<p style="font-size: 1.1rem; color: var(--text-light); margin-bottom: 1.5rem;">${recipe.description}</p>` : ''}
        <div class="recipe-view-meta">
            ${recipe.time ? `<span>⏱️ ${recipe.time} Minuten</span>` : ''}
            ${recipe.servings ? `<span>🍽️ ${recipe.servings} Portionen</span>` : ''}
            <span class="recipe-category">${recipe.category}</span>
        </div>
        <div class="recipe-view-section">
            <h3>Zutaten</h3>
            <ul class="ingredients-list">
                ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
        </div>
        <div class="recipe-view-section">
            <h3>Zubereitung</h3>
            <ol class="instructions-list">
                ${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}
            </ol>
        </div>
    `;
    
    modal.classList.add('active');
}

// Close view modal
function closeViewModal() {
    document.getElementById('viewModal').classList.remove('active');
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background: var(--secondary);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: var(--shadow-lg);
        z-index: 2000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Make viewRecipe globally available
window.viewRecipe = viewRecipe;

