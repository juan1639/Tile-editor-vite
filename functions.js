import { Settings } from "./settings.js";

export function calculaBackgroundPosition(index)
{
	const y = Math.floor(index / Settings.obj.maptiles.nTilesX);
	const x = index - y * Settings.obj.maptiles.nTilesX;

	return [-(y * Settings.mapTiles.tileHeight), -(x * Settings.mapTiles.tileWidth)];
}

export function drawOverGrid(index)
{
	Settings.obj.grid.jsonGridTiles[index] = Settings.selectTile;
	console.log(Settings.obj.grid.jsonGridTiles);

	Settings.obj.grid.domGrids.childNodes[index].style.backgroundImage = `url(${Settings.mapTiles.imgUrlTxt})`;
	const margin = calculaBackgroundPosition(Settings.obj.grid.jsonGridTiles[index]);
	Settings.obj.grid.domGrids.childNodes[index].style.backgroundPosition = `${margin[1]}px ${margin[0]}px`;
}

export function show_values()
{
	console.log('graphFile-Width:' + Settings.graphFile.width);
	console.log('graphFile-Height:' + Settings.graphFile.height);
	console.log('graphFile-TileWidth:' + Settings.graphFile.tileWidth);
	console.log('graphFile-TileHeight:' + Settings.graphFile.tileHeight);

	console.log('graphFile-numberTilesX:' + Settings.graphFileNumberTiles.x);
	console.log('graphFile-numberTilesY:' + Settings.graphFileNumberTiles.y);

	console.log('ScaleXY:', Settings.scaleImgOnScreen, Settings.scaleImgOnScreen);

	console.log('arrayTiles:' + Settings.getArrayTiles(), Settings.getArrayTiles().length);

	/* const mlText = 10;
	ctx.font = "16px arial";
	ctx.fillStyle = Settings.colores.blanco;
	ctx.fillText(`Grid-rows: ${Settings.grid.y}`, mlText, Math.floor(Settings.screen[1] / 1.3));
	ctx.fillText(`Grid-columns: ${Settings.grid.x}`, mlText, Math.floor(Settings.screen[1] / 1.24)); */
}
