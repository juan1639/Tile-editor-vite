import { Settings } from "./settings.js";

export function calculaBackgroundPosition(index)
{
	const y = Math.floor(index / Settings.obj.maptiles.nTilesX);
	const x = index - y * Settings.obj.maptiles.nTilesX;

	return [-(y * Settings.mapTiles.tileHeight), -(x * Settings.mapTiles.tileWidth)];
}

export function drawOverGrid(index)
{
	Settings.obj.grid.jsonGridTiles[index] = Settings.selectTile + 1;
	console.log(Settings.obj.grid.jsonGridTiles);

	Settings.obj.grid.domGrids.childNodes[index].style.backgroundImage = `url(${Settings.mapTiles.imgUrlTxt})`;
	const margin = calculaBackgroundPosition(Settings.selectTile);
	Settings.obj.grid.domGrids.childNodes[index].style.backgroundPosition = `${margin[1]}px ${margin[0]}px`;
}

export function showConsole_mapTilesValues()
{
	console.log('graphFile-Width:' + Settings.mapTiles.width);
	console.log('graphFile-Height:' + Settings.mapTiles.height);
	console.log('graphFile-TileWidth:' + Settings.mapTiles.tileWidth);
	console.log('graphFile-TileHeight:' + Settings.mapTiles.tileHeight);

	console.log('graphFile-numberTilesX:' + Settings.graphFileNumberTiles.x);
	console.log('graphFile-numberTilesY:' + Settings.graphFileNumberTiles.y);
}
