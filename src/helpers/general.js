// Youtube Video URL Sorter
export const srcUrl = (url, playerParams = '') => {
    let video;

    if(url.match(/&/)) {
        video = url.split(/&/)[0].split('?v=')[1];
    } else {
        video = url.split('?v=')[1];
    }

    return `https://www.youtube.com/embed/${video}?rel=0&playlist=${video}${playerParams}`;
}