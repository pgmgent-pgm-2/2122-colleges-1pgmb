function mergedObjects(obj1, obj2) {
  return {
    ...obj1,
    ...obj2,
  };
}

module.exports = mergedObjects;