export const customSort = (sortKey, items, isSortByDate) => {
  return items.sort((a, b) => {
    return sortKey.title.toLowerCase() === "date"
      ? isSortByDate
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date)
      : (b[sortKey.title.toLowerCase()].toLowerCase() ===
          sortKey.keyword.toLowerCase()) -
          (a[sortKey.title.toLowerCase()].toLowerCase() ===
            sortKey.keyword.toLowerCase()) ||
          b[sortKey.title.toLowerCase()].toLowerCase() -
            a[sortKey.title.toLowerCase()].toLowerCase();
  });
};
