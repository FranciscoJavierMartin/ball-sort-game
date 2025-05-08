const CACHE_KEY = 'ball-sort-game';
type StorageType = 'localStorage' | 'sessionStorage';

export function saveCache(data: any, storageType: StorageType): void {
  window[storageType].setItem(CACHE_KEY, JSON.stringify(data));
}

export function getDataCache<T>(storageType: StorageType = 'localStorage'): T {
  const data = window[storageType].getItem(CACHE_KEY) || '';
  return data !== '' && isValidJson(data) ? JSON.parse(data) : ({} as T);
}

export function saveProperties(
  property: string,
  value: any,
  storageType: StorageType,
): void {
  const localCache = getDataCache(storageType);
  localCache[property] = value;
  saveCache(localCache, storageType);
}

export function saveMultipleProperties(
  data: Record<string, any>,
  storageType: StorageType,
): void {
  for (const key in data) {
    saveProperties(key, data[key], storageType);
  }
}

export function getValueFromCache(
  key: string,
  initial: any,
  storageType: StorageType = 'localStorage',
): any {
  const cacheData = getDataCache(storageType);
  return cacheData.hasOwnProperty(key) ? cacheData[key] : initial;
}

export function deleteProperty(
  property: string,
  storageType: StorageType,
): void {
  const localCache = getDataCache(storageType);

  if (localCache.hasOwnProperty(property)) {
    delete localCache[property];
  }

  saveCache(localCache, storageType);
}
