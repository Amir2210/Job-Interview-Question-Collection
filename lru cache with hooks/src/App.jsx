import { useCallback, useMemo, useState } from 'react'
import './App.css'

function App() {
  const [cacheCapacity] = useState(3);
  const lruCache = useMemo(() => new LRUCache(cacheCapacity), [cacheCapacity]); // Memoize the cache creation

  const getFromCache = useCallback((key) => {
    return lruCache.get(key);
  }, [lruCache]); // Memoize the get function

  const addToCache = useCallback((key, value) => {
    lruCache.add(key, value);
  }, [lruCache]); // Memoize the add function

  return (
    <div>

    </div>
  )
}

export default App
