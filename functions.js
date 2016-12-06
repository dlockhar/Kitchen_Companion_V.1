var recipe;

var url = 'http://api.yummly.com/v1/api/recipes?_app_id=98618b8a&_app_key=eecc59adb1d00cbe4efdf5c7c775e12f&your%20_search_parameters';

function setup() {
    loadJSON(url, recipe)
}

function gotData(data) {
    recipe = data;
}

