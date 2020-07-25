const getHash = () => location.hash.slice(1).toLocalelowerCase().split('/')[1] || '/'

export {getHash}