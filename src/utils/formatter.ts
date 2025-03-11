export const fileSizeToString = (size: number): string => {
  if (size < 1000) {
    return size + " B"
  } else if (size < 1000 * 1000) {
    return (size / 1000).toFixed(1) + " KB"
  } else if (size < 1000 * 1000 * 1000) {
    return (size / (1000 * 1000)).toFixed(1) + " MB"
  } else {
    return (size / (1000 * 1000 * 1000)).toFixed(1) + " GB"
  }
}

export const timeToString = (date: Date): string => {
  const now = new Date()

  return now.getDate() === date.getDate() &&
    now.getMonth() === date.getMonth() &&
    now.getFullYear() === date.getFullYear()
    ? date.toLocaleTimeString("default", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : date.toLocaleDateString("default", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
}
