// ============================================================================
//  	Tile-Editor by Juan Eguia
// 
// ----------------------------------------------------------------------------
import {showConsole_mapTilesValues} from './functions.js';
import {Settings} from './settings.js';
import {eventListeners} from './eventlisteners.js';
import { Grid } from './grid.js';
import { MapTiles } from './mapTiles.js';

window.onload = () =>
{
	create_newMapTiles();
	create_newGrid(true);
}

function create_newMapTiles()
{
	Settings.obj.maptiles = new MapTiles(
		Settings.mapTiles.tileWidth, Settings.mapTiles.tileHeight,
		Settings.mapTiles.imgUrlTxt,
		Settings.graphFileNumberTiles.x, Settings.graphFileNumberTiles.y
	);

	showConsole_mapTilesValues();
}

export function create_newGrid(bool)
{
	if (!bool)
	{
		const element = Settings.obj.grid.domGrids;
		while (element.firstChild)
		{
			element.removeChild(element.firstChild);
		}
	}

	Settings.obj.grid = new Grid(Settings.grid.x, Settings.grid.y);
}
