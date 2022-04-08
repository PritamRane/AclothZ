import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collection
);



export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);






export const selectShopCollectionsArray = createSelector(
  [selectShopCollections],
  selectShopCollections =>
    selectShopCollections ? Object.values(selectShopCollections) : null
);

export const selectShopCollection = selectRouteName => {
  return createSelector(
    [selectShopCollections],
    shopCollection => shopCollection[selectRouteName]
  );
};

export const selectIsFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectIsCollecttionLoaded = createSelector(
  [selectShop],
  shop => !!shop.collection
);
