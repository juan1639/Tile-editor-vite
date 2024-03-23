import { Settings } from "./settings.js";
import { create_newGrid } from './main.js';
import { drawOverGrid } from "./functions.js";

export const eventListeners = document.addEventListener('click', ({target}) =>
{
	console.log(target.id);
    
    if (target.id === 'buttonDecX')
    {
        Settings.grid.x --;
        create_newGrid();
    }
    else if (target.id === 'buttonIncX')
    {
        Settings.grid.x ++;
        create_newGrid();
    }
    else if (target.id === 'buttonDecY')
    {
        Settings.grid.y --;
        create_newGrid();
    }
    else if (target.id === 'buttonIncY')
    {
        Settings.grid.y ++;
        create_newGrid();
    }

    if (target.id.slice(0, 4) === 'tile')
    {
        Settings.selectTile = parseInt(target.id.slice(4));
        // console.log(target.id.slice(4), parseInt(target.id.slice(4)));
    }

    if (target.id.slice(0, 8) === 'gridTile')
    {
        const index = parseInt(target.id.slice(8));
        drawOverGrid(index);
    }

    if (target.id === 'obtenerJson')
    {
        console.log('copy to clipboard to paste to your project in a json file');
        Settings.domShowValues.textArea.innerText = Settings.obj.grid.jsonGridTiles;
    }
});
