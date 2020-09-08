export default function (key, order = 'asc') {
  return function innerSort(a, b) {
    try {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0
      }

      const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key]
      const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key]

      let comparison = 0

      if (varA > varB) { comparison = 1 }
      if (varA < varB) { comparison = -1 }

      return order === 'desc' ? comparison * -1 : comparison
    }
    catch (e) {
      console.log(e)
    }
  }
}