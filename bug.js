```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: The callback function is defined within the useEffect
    // and it closes over the value of count at the time the effect is scheduled.
    // By the time the effect runs, count might have changed, leading to stale closure.
    const intervalId = setInterval(() => {
      console.log('Count:', count); // This will always log the initial value
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```