
export class Settings
{
    static screen = [1000, 600];

    static mapTiles =
    {
        width: 448,
        height: 320,
        tileWidth: 32,
        tileHeight: 32,
        imgUrlTxt: './public/tiles-suelo-metal.png'
    }

    static graphFileNumberTiles =
    {
        x: Math.floor(Settings.mapTiles.width / Settings.mapTiles.tileWidth),
        y: Math.floor(Settings.mapTiles.height / Settings.mapTiles.tileHeight)
    }

    static obj =
    {
        grid: null,
        maptiles: null
    }

    static grid =
    {
        x: 12,
        y: 12,
        tw: Settings.mapTiles.tileWidth,
        th: Settings.mapTiles.tileHeight
    }

    static selectTile = 0;
}
