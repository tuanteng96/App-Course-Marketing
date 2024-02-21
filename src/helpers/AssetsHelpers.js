const toAbsoluteUrl = (pathname, path = "/upload/image/") => {
  return import.meta.env.VITE_HOST + path + pathname;
};

const toAbsoluteAsset = (pathname) => import.meta.env.BASE_URL + pathname;

const AssetsHelpers = {
  toAbsoluteUrl,
  toAbsoluteAsset,
};

export default AssetsHelpers;
