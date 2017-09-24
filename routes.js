import MainController from './controllers/main';
import extractParams from './utils';

const DEFAULT_ROUTE = '/#home?label=inbox';

const initRoutes = () => {
  const routesMap = {
    '': () => {
      location.replace(DEFAULT_ROUTE);
    },
    'home': (urlParams) => {
      if ( urlParams && urlParams.label ) {
        MainController.render(urlParams);
      } else {
        location.replace(DEFAULT_ROUTE);
      }
    }
  };

  const render = (location) => {
    const route = location.split('?')[0].substr(1);
    const _urlParams = location.split('?')[1];
    let urlParams = null;
    if ( _urlParams ) {
      urlParams = extractParams(_urlParams)
    }
    routesMap[route](urlParams)
  };


  window.addEventListener('hashchange', () => {
    render(decodeURI(window.location.hash));
  });


  render(decodeURI(window.location.hash));
};

export default initRoutes;