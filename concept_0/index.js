function words() {
    const words = '{"name":"Nick", "age":"26"}'
    const obj = JSON.parse(words);
    document.getElementById("text").innerHTML = obj.name;
}