const GAME_WIDTH = 350;
const GAME_HEIGHT = 450;
const MAP_WIDTH = 7;
const MAP_HEIGHT = 9;
const BOX_PADDING = 2;//for seperating the obstacles
const BOX_PAD_SQUARE = BOX_PADDING * BOX_PADDING;
const TILE_WIDTH = Math.floor(GAME_WIDTH/7);
const TILE_HEIGHT = Math.floor(GAME_HEIGHT/9);
const OBSTACLE_WIDTH = TILE_WIDTH - BOX_PAD_SQUARE;
const OBSTACLE_HEIGHT = TILE_HEIGHT - BOX_PAD_SQUARE;

