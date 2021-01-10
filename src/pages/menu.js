import tabs from "../tabs";
import content from "../content";

const ingredients = {
    tomato : 'San Marzano Tomato Sauce',
    basil: 'Basil',
    cheese: 'Fresh Mozzarella',
    parmesan: 'Parmigiano Reggiano D.O.P',
    mozzarella: 'Mozzarella Di Buffala D.O.P',
    oil: 'Extra Virgin Olive Oil',
    garlic: 'Garlic',
    oregano: 'Oregano',
    sausage: 'Italian Fennel Sausage',
    ham: 'Prosciutto Di Parama D.O.P',
    salami: 'Spicy Sopressata Salami',
    mushrooms: 'Organic Cremini Mushrooms',
    honey: 'Special Hot Honey',
    truffle : 'Truffle Cream',
    goat: 'Goat Cheese',
    rucola: 'Rucola',
    cocktail: 'Cocktail Tomatoes',
    tuna: 'Tuna',
}

const createContent = function () {
    
    const container = content.createContainer('menu');
    
    
    const marinara = createRecipe('Marinara', [ingredients.tomato, ingredients.garlic, ingredients.oregano, ingredients.oil]);
    const maegheira = createRecipe('Margherita', [ingredients.tomato, ingredients.cheese, ingredients.basil, ingredients.parmesan, ingredients.oil]);
    const bianca = createRecipe('Bianca', [ingredients.cheese, ingredients.basil, ingredients.parmesan, ingredients.oil]);
    const diavola = createRecipe('Diavola', [ingredients.tomato, ingredients.cheese, ingredients.salami, ingredients.basil, ingredients.honey, ingredients.oil,]);
    
    const classics = content.createSection('classics');
    classics.appendChild(marinara);
    classics.appendChild(maegheira);
    classics.appendChild(bianca);
    classics.appendChild(diavola);


    const buffala = createRecipe('Bufala D.O.P', [ingredients.tomato, ingredients.mozzarella, ingredients.basil, ingredients.oil]);
    const tartufo = createRecipe('Tartufo',[ingredients.truffle, ingredients.goat, ingredients.honey, ingredients.basil, ingredients.oil]);
    const prosciutto = createRecipe('Proscioutto', [ingredients.tomato, ingredients.cheese, ingredients.ham, ingredients.rucola, ingredients.oil]);
    const tonno = createRecipe('Tonno', [ingredients.mozzarella, ingredients.tuna, ingredients.cocktail, ingredients.basil, ingredients.parmesan, ingredients.oil]);

    const gourmet = content.createSection('gourmet');
    gourmet.appendChild(tartufo);
    gourmet.appendChild(buffala);
    gourmet.appendChild(prosciutto);
    gourmet.appendChild(tonno);

    const bg1 = content.createImage('bg1', 'Classics');
    const bg2 = content.createImage('bg2', 'Gourmet')
    const bg3 = content.createImage('bg3');

    const footer = content.createFooter();

    container.appendChild(bg1);
    container.appendChild(classics);
    container.appendChild(bg2);
    container.appendChild(gourmet);
    container.appendChild(bg3);
    container.appendChild(footer);
    
    return container;
}

const createRecipe = function(name, ingredients){
        const div = document.createElement('div');
        div.classList.add('recipe');
        
        const title = document.createElement('h2');
        title.textContent = name;

        const ingredientList = document.createElement('p');
        ingredients.forEach(i => {
            ingredientList.textContent += i;
            ingredientList.textContent += ' | ';
        });

        ingredientList.textContent = ingredientList.textContent.slice(0 , -2);

        div.appendChild(title);
        div.appendChild(ingredientList);

        return div;
}

const addStyle = function(){
}

const loadPage = function(){
    const menu = createContent();
    tabs.addTabPanel('Menu', menu);
    addStyle();
}

export default {loadPage};