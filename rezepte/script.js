// Rezepte App
let recipes = [];

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    loadRecipes();
    setupEventListeners();
    
    // If no recipes exist, initialize with existing images
    if (recipes.length === 0) {
        initializeDefaultRecipes();
    }
    
    renderRecipes();
});

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

// Initialize with default recipes (using existing images)
function initializeDefaultRecipes() {
    recipes = [
        {
            id: Date.now(),
            name: 'Rezept 1',
            image: 'Rezept1.jpg',
            description: 'Ein leckeres Rezept aus meiner Sammlung.',
            ingredients: ['Zutat 1', 'Zutat 2', 'Zutat 3'],
            instructions: ['Schritt 1: Beschreibung', 'Schritt 2: Beschreibung', 'Schritt 3: Beschreibung'],
            time: 30,
            servings: 4
        },
        {
            id: Date.now() + 1,
            name: 'Rezept 2',
            image: 'Rezept2.jpg',
            description: 'Ein weiteres köstliches Rezept.',
            ingredients: ['Zutat A', 'Zutat B', 'Zutat C'],
            instructions: ['Schritt 1: Beschreibung', 'Schritt 2: Beschreibung'],
            time: 45,
            servings: 2
        },
        {
            id: Date.now() + 2,
            name: 'Rezept 3',
            image: 'Rezept3.jpg',
            description: 'Ein besonderes Rezept für besondere Anlässe.',
            ingredients: ['Zutat X', 'Zutat Y', 'Zutat Z'],
            instructions: ['Schritt 1: Beschreibung', 'Schritt 2: Beschreibung', 'Schritt 3: Beschreibung', 'Schritt 4: Beschreibung'],
            time: 60,
            servings: 6
        },
        {
            id: Date.now() + 3,
            name: 'Rezept 4',
            image: 'Rezept4.jpg',
            description: 'Ein schnelles und einfaches Rezept.',
            ingredients: ['Zutat 1', 'Zutat 2'],
            instructions: ['Schritt 1: Beschreibung', 'Schritt 2: Beschreibung'],
            time: 20,
            servings: 2
        }
    ];
    saveRecipes();
}

// Setup event listeners
function setupEventListeners() {
    // Add recipe button
    document.getElementById('addRecipeBtn').addEventListener('click', () => {
        openAddModal();
    });

    // Close modals
    document.getElementById('closeModal').addEventListener('click', closeAddModal);
    document.getElementById('closeDetailModal').addEventListener('click', closeDetailModal);

    // Close modal when clicking outside
    document.getElementById('addRecipeModal').addEventListener('click', (e) => {
        if (e.target.id === 'addRecipeModal') {
            closeAddModal();
        }
    });

    document.getElementById('recipeDetailModal').addEventListener('click', (e) => {
        if (e.target.id === 'recipeDetailModal') {
            closeDetailModal();
        }
    });

    // Form submission
    document.getElementById('recipeForm').addEventListener('submit', handleFormSubmit);
}

// Open add recipe modal
function openAddModal() {
    document.getElementById('addRecipeModal').classList.add('active');
    document.getElementById('recipeForm').reset();
}

// Close add recipe modal
function closeAddModal() {
    document.getElementById('addRecipeModal').classList.remove('active');
}

// Open recipe detail modal
function openDetailModal(recipe) {
    const modal = document.getElementById('recipeDetailModal');
    const content = document.getElementById('recipeDetailContent');
    
    content.innerHTML = `
        <div class="recipe-detail">
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-detail-image" onerror="this.src='https://via.placeholder.com/800x400?text=Rezept+Bild'">
            <h2 class="recipe-detail-title">${recipe.name}</h2>
            ${recipe.description ? `<p class="recipe-detail-description">${recipe.description}</p>` : ''}
            <div class="recipe-detail-meta">
                ${recipe.time ? `<span>⏱️ ${recipe.time} Min.</span>` : ''}
                ${recipe.servings ? `<span>🍽️ ${recipe.servings} Portionen</span>` : ''}
            </div>
            <div class="recipe-section">
                <h3>Zutaten</h3>
                <ul class="ingredients-list">
                    ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                </ul>
            </div>
            <div class="recipe-section">
                <h3>Zubereitung</h3>
                <ol class="instructions-list">
                    ${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}
                </ol>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

// Close recipe detail modal
function closeDetailModal() {
    document.getElementById('recipeDetailModal').classList.remove('active');
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    const recipe = {
        id: Date.now(),
        name: document.getElementById('recipeName').value,
        image: document.getElementById('recipeImage').value,
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
    closeAddModal();
    
    // Show success message
    showNotification('Rezept erfolgreich hinzugefügt!');
}

// Render all recipes
function renderRecipes() {
    const grid = document.getElementById('recipesGrid');
    
    if (recipes.length === 0) {
        grid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <h2>Noch keine Rezepte</h2>
                <p>Klicke auf "+ Neues Rezept" um dein erstes Rezept hinzuzufügen!</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = recipes.map((recipe, index) => `
        <div class="recipe-card" data-recipe-index="${index}">
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image" onerror="this.src='https://via.placeholder.com/300x250?text=Rezept+Bild'">
            <div class="recipe-info">
                <h3 class="recipe-title">${recipe.name}</h3>
                ${recipe.description ? `<p class="recipe-description">${recipe.description}</p>` : ''}
                <div class="recipe-meta">
                    ${recipe.time ? `<span>⏱️ ${recipe.time} Min.</span>` : ''}
                    ${recipe.servings ? `<span>🍽️ ${recipe.servings} Port.</span>` : ''}
                </div>
            </div>
        </div>
    `).join('');
    
    // Add click listeners to recipe cards
    document.querySelectorAll('.recipe-card').forEach(card => {
        card.addEventListener('click', () => {
            const index = parseInt(card.getAttribute('data-recipe-index'));
            openDetailModal(recipes[index]);
        });
    });
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #4ecdc4;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
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

// Add CSS animations for notification
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

