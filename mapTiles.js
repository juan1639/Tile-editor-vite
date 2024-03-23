
export class MapTiles
{
    constructor(tw, th, img, nTilesX, nTilesY)
    {
        this.tw = tw;
        this.th = th;
        this.img = img;
        this.nTilesX = nTilesX;
        this.nTilesY = nTilesY;

        this.getImgMapTiles();
        this.div_imgInTiles();
    }

    getImgMapTiles()
    {
        this.domMapTiles = document.getElementById('graphZone');
        this.domMapTiles.style.backgroundImage = `url(${this.img})`;
        this.domMapTiles.style.backgroundRepeat = 'no-repeat';
        this.domMapTiles.style.gridTemplateRows = `repeat(${this.nTilesY},${this.th}px)`;
        this.domMapTiles.style.gridTemplateColumns = `repeat(${this.nTilesX},${this.tw}px)`;
    }

    div_imgInTiles()
    {
        this.imgInTiles = [];

        let contador = 0;
    
        for (let i = 0; i < this.nTilesY; i ++)
        {
            for (let ii = 0; ii < this.nTilesX; ii ++)
            {
                this.imgInTiles.push(document.createElement('div'));
                this.imgInTiles[contador].setAttribute('class', 'imgInTile');
                this.imgInTiles[contador].setAttribute('id', `tile${contador}`);
                this.domMapTiles.appendChild(this.imgInTiles[contador]);
                contador ++;
            }
        }
    }
}
