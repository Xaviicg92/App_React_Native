export const mapFromBuildApiToBuildVm = (build: buildApi[]): buildVm[] => {
  return build.map((build) => ({
    name: build.name,
    id: build._id,
    url_image: build.url_image,
    totalTime: build.totalTime,
  }));
};
