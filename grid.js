import { Settings } from "./settings.js";

export class Grid
{
    constructor(x, y)
    {
        this.domGrids = document.getElementById('gridZone');
        this.jsonGridTiles = new Array(x * y).fill('1');
        this.matrizGridTiles = new Array(y);
        this.create_matrizGridTiles(x, y);
        this.update(x, y);
        this.showGridValues(x, y);
    }

    update(x, y)
    {
        this.domGrids.style.gridTemplateRows = `repeat(${y},${Settings.grid.th}px)`;
        this.domGrids.style.gridTemplateColumns = `repeat(${x},${Settings.grid.tw}px)`;

        let contador = 0;

        for (let i = 0; i < Settings.grid.y; i ++)
        {
            for (let ii = 0; ii < Settings.grid.x; ii ++)
            {
                let gridTile = this.matrizGridTiles[i][ii];
                gridTile = document.createElement('div');
                gridTile.setAttribute('class', 'gridTile');
                gridTile.setAttribute('id', `gridTile${contador}`);
                this.domGrids.appendChild(gridTile);
                contador ++;
            }
        }
        // console.log(this.matrizGridTiles);
        console.log(this.jsonGridTiles);
    }

    create_matrizGridTiles(x, y)
    {
        for (let i = 0; i < y; i ++)
        {
            this.matrizGridTiles[i] = new Array(x);

            for (let ii = 0; ii < x; ii ++)
            {
                this.matrizGridTiles[i][ii] = 0; // 0 = fondo (sin Imagen)
            }
        }
        console.log(this.matrizGridTiles);
    }

    showGridValues(x, y)
    {
        Settings.domShowValues.gridRows.innerText = `Grid-Rows: ${y}`;
        Settings.domShowValues.gridColumns.innerText = `Grid-Columns: ${x}`;
    }
}
