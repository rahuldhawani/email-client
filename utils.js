const extractParams = (paramsString) => {
  let params = {};
  let rawParams = paramsString.split('&');

  let j = 0;
  for (let i = rawParams.length - 1; i >= 0; i--) {
    let urlParams = rawParams[i].split('=');
    if ( urlParams.length === 2 ) {
      params[urlParams[0]] = urlParams[1];
    }
    else if ( urlParams.length === 1 ) {
      params[j] = urlParams[0];
      j += 1;
    }
  }

  return params;
};

export default extractParams ;