const partitionBy = (array, criteria) => {
  const partitions = [];
  let currentPartition = [array[0]];
  let priorElement = array[0];
  for (const element of array.slice(1)) {
    if (criteria(element) === criteria(priorElement)) {
      currentPartition.push(element);
    } else {
      partitions.push(currentPartition);
      currentPartition = [element];
    }
    priorElement = element;
  }
  partitions.push(currentPartition);
  return partitions;
}