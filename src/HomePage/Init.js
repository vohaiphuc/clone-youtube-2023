import Scrollbar from 'smooth-scrollbar';
export const initScrollbar = () => {
    Scrollbar.init(document.querySelector('#sidebar-scrollbar'), { alwaysShowTracks: true });
    Scrollbar.init(document.querySelector('#body-scrollbar'), { alwaysShowTracks: true });
    console.log("Init");
}